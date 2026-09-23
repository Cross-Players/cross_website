import 'package:cross_website/constants/app_colors.dart';
import 'package:cross_website/language/language_manager.dart';
import 'package:cross_website/pages/about_new.dart';
<<<<<<< HEAD
import 'package:cross_website/pages/admin.dart';
import 'package:cross_website/pages/career.dart';
import 'package:cross_website/pages/policy/gplx_policy.dart';
=======
import 'package:jaspr/dom.dart';
>>>>>>> 23d32c0 (upgrade jaspr ver)
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
