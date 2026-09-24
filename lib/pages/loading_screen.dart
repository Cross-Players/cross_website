import 'package:cross_website/components/common/dotlottie_player.dart';
import 'package:cross_website/constants/app_colors.dart';
import 'package:cross_website/constants/image_constant.dart';
import 'package:jaspr/dom.dart';
import 'package:jaspr/jaspr.dart';

class LoadingScreen extends StatelessComponent {
  const LoadingScreen({super.key});

  @override
  Component build(BuildContext context) {
    return div(classes: 'loading-container', [
      // Load the player script only when this screen is actually shown,
      // rather than on every page.
      Document.head(children: [
        script(
          id: 'dotlottie-player-script',
          src:
              'https://unpkg.com/@dotlottie/player-component@2.7.12/dist/dotlottie-player.mjs',
          attributes: {'type': 'module'},
        ),
      ]),
      div(classes: 'loading-spinner', [
        DotLottiePlayer(
          src: Images.loadingAnimation,
          background: 'transparent',
          speed: 1.0,
          width: 100,
          height: 100,
          loop: true,
          autoplay: true,
        ),
      ]),
    ]);
  }

  @css
  static List<StyleRule> get styles => [
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
