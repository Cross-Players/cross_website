import 'dart:developer';

import 'package:csv/csv.dart';
import 'package:jaspr/jaspr.dart';
import 'package:jaspr_riverpod/jaspr_riverpod.dart';
import 'package:jaspr_riverpod/legacy.dart';
import 'package:universal_web/web.dart' as web;

import '../locales/translations_data.dart';

enum SupportLanguage {
  en,
  vi,
  ja,
  ko,
}

class LanguageManager {
  static Map<String, Map<String, String>> translations = {};
  static const _languageKey = 'lang';
  static Map<String, dynamic> langAssets = {};
  static bool _hasCookieConsent = getCookieConsent();
  static bool get hasCookieConsent => _hasCookieConsent;

  static final cookieConsentProvider = StateProvider<bool?>((ref) {
    if (!isClient) return null;
    final cookies = web.document.cookie.split(';');
    for (var cookie in cookies) {
      final parts = cookie.trim().split('=');
      if (parts[0] == 'cookie_consent' && parts.length > 1) {
        return parts[1] == 'true' ? true : false;
      }
    }
    return null;
  });

  static bool get isClient => kIsWeb;

  static Future<Map<String, dynamic>> loadAsset(String assetsPath) async {
    throw UnimplementedError('Handle later');
  }

  static String _getClientLanguage() {
    if (!isClient) return 'en';
    try {
      final browserLang = web.window.navigator.language.toLowerCase();
      if (browserLang.startsWith('vi')) return 'vi';
      if (browserLang.startsWith('ja')) return 'ja';
      if (browserLang.startsWith('ko')) return 'ko';
      return 'en';
    } catch (e) {
      log('Error detecting client language: $e');
      return 'en';
    }
  }

  static void saveLanguage(String langCode, BuildContext context) {
    if (!isClient || !_hasCookieConsent) {
      log('Skipping saveLanguage due to no cookie consent');
      return;
    }
    try {
      final expires = DateTime.now().add(Duration(days: 365)).toUtc();
      final cookie =
          '$_languageKey=$langCode; expires=${expires.toIso8601String()}; path=/';
      web.document.cookie = cookie;
    } catch (e) {
      log('Error saving language to cookie: $e');
    }
  }

  static String? getStoredLanguage() {
    if (!isClient || !_hasCookieConsent) {
      log('No cookie consent or not client, skipping cookie read');
      return null;
    }
    try {
      final cookies = web.document.cookie.split(';');
      for (var cookie in cookies) {
        final parts = cookie.trim().split('=');
        if (parts[0] == _languageKey && parts.length > 1) {
          return parts[1];
        }
      }
    } catch (e) {
      log('Error reading language from cookie: $e');
    }
    return null;
  }

  static void setCookieConsent(bool consent, BuildContext context) {
    log('setCookieConsent called with consent: $consent');
    _hasCookieConsent = consent;
    context.read(cookieConsentProvider.notifier).state = consent;

    if (isClient) {
      try {
        final expires = DateTime.now().add(Duration(days: 365)).toUtc();
        final consentCookie =
            'cookie_consent=$consent; expires=${expires.toIso8601String()}; path=/';
        web.document.cookie = consentCookie;

        if (!consent) {
          log('Clearing language cookie due to Decline');
          web.document.cookie =
              '$_languageKey=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/';
          context.read(selectedLanguageProvider.notifier).state = 'en';
        } else {
          final langCode = _getClientLanguage();
          saveLanguage(langCode, context);
          context.read(selectedLanguageProvider.notifier).state = langCode;
        }
      } catch (e) {
        log('Error saving cookie consent or language: $e');
      }
    } else {
      final langCode = consent ? _getClientLanguage() : 'en';
      context.read(selectedLanguageProvider.notifier).state = langCode;
    }
  }

  static bool getCookieConsent() {
    if (!isClient) return false;
    try {
      final cookies = web.document.cookie.split(';');
      for (var cookie in cookies) {
        final parts = cookie.trim().split('=');
        if (parts[0] == 'cookie_consent' && parts.length > 1) {
          return parts[1] == 'true';
        }
      }
    } catch (e) {
      log('Error reading cookie consent: $e');
    }
    return false;
  }

  static final selectedLanguageProvider = StateProvider<String>((ref) {
    final hasConsent = ref.watch(cookieConsentProvider);
    if (hasConsent == null) {
      log('No cookie consent decision, defaulting to English');
      return 'en';
    }
    if (!hasConsent) {
      log('Cookie consent declined, defaulting to English');
      return 'en';
    }
    final storedLang = getStoredLanguage();
    if (storedLang != null && languages.containsKey(storedLang)) {
      log('Using stored language: $storedLang');
      return storedLang;
    }
    final clientLang = _getClientLanguage();
    log('Using client language: $clientLang');
    return languages.containsKey(clientLang) ? clientLang : 'en';
  });

  static final languages = {
    'en': 'English',
    'vi': 'Tiếng Việt',
    'ko': '한국어',
    'ja': '日本語',
  };

  static bool _isLoaded = false;

  /// Parses the bundled translations CSV into [translations].
  ///
  /// Synchronous because the data is a compiled-in constant. Safe to call
  /// from `initState` directly (unlike `setState`, which can't run before
  /// the first `build`).
  static bool ensureLoaded({bool forceRefresh = false}) {
    if (_isLoaded && !forceRefresh) {
      return true;
    }

    try {
      // Dart normalizes \r\n to \n when tokenizing raw string literals in
      // source files, so the embedded CSV is LF-only regardless of the
      // original file's line endings.
      final rows = const CsvToListConverter(eol: '\n').convert(translationsCsv);
      if (rows.isEmpty) {
        log('No translations available: bundled CSV is empty');
        return false;
      }

      final headers = rows.first.cast<String>();
      translations.clear();

      for (var i = 1; i < rows.length; i++) {
        final row = rows[i];
        final key = row[0].toString();
        for (var j = 1; j < headers.length; j++) {
          final langCode = headers[j].toString().toLowerCase();
          final value = j < row.length ? row[j].toString() : '';
          translations.putIfAbsent(key, () => {})[langCode] = value;
        }
      }

      _isLoaded = true;
      return true;
    } catch (e) {
      log('Error parsing bundled translations: $e');
      return false;
    }
  }

  static Future<bool> loadTranslations({bool forceRefresh = false}) async {
    return ensureLoaded(forceRefresh: forceRefresh);
  }

  static String translate(String key, [String? langCode]) {
    final language = langCode ?? 'en';
    return translations[key]?[language] ?? 'Translation not found';
  }

  static String tr(String key, String langCode) {
    return translations[key]?[langCode] ?? 'unknown';
  }
}
