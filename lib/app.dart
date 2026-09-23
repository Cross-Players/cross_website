import 'dart:developer';

import 'package:cross_website/constants/app_colors.dart';
import 'package:cross_website/language/language_manager.dart';
import 'package:cross_website/pages/about_new.dart';
import 'package:cross_website/pages/admin.dart';
import 'package:cross_website/pages/career_view.dart';
import 'package:cross_website/pages/policy/gplx_policy.dart';
import 'package:jaspr/dom.dart';
import 'package:jaspr/jaspr.dart';
import 'package:jaspr_riverpod/jaspr_riverpod.dart';
import 'package:jaspr_router/jaspr_router.dart';
import 'package:universal_web/web.dart' as web;

import 'pages/home.dart';

final translationsProvider = FutureProvider<bool>((ref) async {
  final start = DateTime.now();
  final success = await LanguageManager.loadTranslations();
  log('Translations loaded in ${DateTime.now().difference(start)}');
  return success;
});

@client
class App extends StatefulComponent {
  const App({this.careerJobs = const [], this.careersErrorMessage});

  /// Job listings fetched once, server-side, in `main.server.dart` (static
  /// mode: baked in at build time). `cloud_firestore`/`firebase_auth` are
  /// Flutter-only packages that cannot compile for a Jaspr web client, so
  /// this must never be fetched from `@client` code.
  final List<Map<String, String>> careerJobs;
  final String? careersErrorMessage;

  @override
  State createState() => AppState();
}

class AppState extends State<App> {
  @override
  void initState() {
    super.initState();
    LanguageManager.ensureLoaded();
  }

  @override
  Component build(BuildContext context) {
    return ProviderScope(
      child: div(classes: 'main', [
        Router(
          routes: [
            Route(
              path: '/',
              title: 'Home',
              builder: (context, state) => const _ScrollToTop(key: ValueKey('/'), child: Home()),
            ),
            Route(
              path: '/about',
              title: 'About',
              builder: (context, state) =>
                  const _ScrollToTop(key: ValueKey('/about'), child: AboutNew()),
            ),
            Route(
              path: '/careers',
              title: 'Careers',
              builder: (context, state) => _ScrollToTop(
                key: const ValueKey('/careers'),
                child: CareerView(
                  jobs: component.careerJobs,
                  errorMessage: component.careersErrorMessage,
                ),
              ),
            ),
            Route(
              path: '/adminQuyenAnh',
              title: 'Admin',
              builder: (context, state) => const Admin(),
            ),
            Route(
              path: '/gplx/policy',
              title: 'GPLX Policy',
              builder: (context, state) => const GPLXPolicy(),
            ),
          ],
        ),
      ]),
    );
  }

  @css
  static List<StyleRule> get styles => [
        css('.main', [
          css('&').styles(
            display: Display.flex,
            maxWidth: 100.percent,
            flexDirection: FlexDirection.column,
            backgroundColor: AppColors.backgroundTheme,
          ),
          css('section').styles(
            display: Display.flex,
            flexDirection: FlexDirection.column,
            justifyContent: JustifyContent.center,
            alignItems: AlignItems.center,
            flex: Flex(grow: 1),
          ),
          css('h1, h4, p').styles(
            color: AppColors.textBlack,
          ),
        ]),
        css('.loading-container', [
          css('&').styles(
            display: Display.flex,
            width: 100.vw,
            height: 100.vh,
            justifyContent: JustifyContent.center,
            alignItems: AlignItems.center,
            backgroundColor: AppColors.backgroundTheme,
          ),
        ]),
        css('.loading-spinner', [
          css('&').styles(
            display: Display.flex,
            flexDirection: FlexDirection.column,
            justifyContent: JustifyContent.center,
            alignItems: AlignItems.center,
            textAlign: TextAlign.center,
          ),
        ]),
      ];
}

/// Resets the window scroll position when a route is entered via client-side
/// navigation, since jaspr_router's [Link] keeps the previous page's offset.
class _ScrollToTop extends StatefulComponent {
  const _ScrollToTop({required this.child, super.key});

  final Component child;

  @override
  State createState() => _ScrollToTopState();
}

class _ScrollToTopState extends State<_ScrollToTop> {
  // The first mount is the initial page load, where the browser already
  // handles scroll position (including restore on reload).
  static bool _isInitialMount = true;

  @override
  void initState() {
    super.initState();
    if (kIsWeb && !_isInitialMount) {
      web.window.scrollTo(web.ScrollToOptions(top: 0));
    }
    _isInitialMount = false;
  }

  @override
  Component build(BuildContext context) => component.child;
}
