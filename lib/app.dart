import 'package:cross_website/constants/app_colors.dart';
import 'package:cross_website/language/language_manager.dart';
import 'package:cross_website/pages/about_new.dart';
import 'package:cross_website/pages/admin.dart';
import 'package:cross_website/pages/career.dart';
import 'package:jaspr/jaspr.dart';
import 'package:jaspr_riverpod/jaspr_riverpod.dart';
import 'package:jaspr_router/jaspr_router.dart';

import 'pages/home.dart';

final translationsProvider = FutureProvider<bool>((ref) async {
  final start = DateTime.now();
  final success = await LanguageManager.loadTranslations();
  print('Translations loaded in ${DateTime.now().difference(start)}');
  return success;
});

@client
class App extends StatefulComponent {
  @override
  State createState() => AppState();
}

class AppState extends State<App> {
  bool _isLoading = true;
  bool _hasError = false;

  Future<void> _loadTranslations() async {
    try {
      final success = await LanguageManager.loadTranslations();
      if (mounted) {
        setState(() {
          _isLoading = false;
          _hasError = !success;
        });
      }
    } catch (e) {
      if (mounted) {
        setState(() {
          _isLoading = false;
          _hasError = true;
        });
      }
    }
  }

  @override
  void initState() {
    super.initState();
    _loadTranslations();
  }

  @override
  Iterable<Component> build(BuildContext context) sync* {
    yield ProviderScope(
      child: div(classes: 'main', [
        Router(
          routes: [
            Route(
              path: '/',
              title: 'Home',
              builder: (context, state) => const Home(),
            ),
            Route(
              path: '/about',
              title: 'About',
              builder: (context, state) => const AboutNew(),
            ),
            Route(
              path: '/careers',
              title: 'Careers',
              builder: (context, state) => const Career(),
            ),
            Route(
              path: '/adminQuyenAnh',
              title: 'Admin',
              builder: (context, state) => const Admin(),
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
