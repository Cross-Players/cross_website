import 'package:cross_website/constants/app_colors.dart';
import 'package:jaspr/dom.dart';
import 'package:jaspr/jaspr.dart';

class ButtonPrimaryBlack extends StatelessComponent {
  final String text;
  final VoidCallback? onClick;

  const ButtonPrimaryBlack({required this.text, this.onClick, super.key});

  @override
  Component build(BuildContext context) {
    return div(classes: 'btn-container', [
      div(
          classes: 'btn-primary-black',
          events: {'click': (_) => onClick?.call()},
          [Component.text(text)])
    ]);
  }

  @css
  static List<StyleRule> get styles => [
        css('.btn-container')
            .styles(display: Display.flex, cursor: Cursor.pointer),
        css('.btn-primary-black', [
          css('&').styles(
            padding: Padding.symmetric(horizontal: 20.px, vertical: 20.px),
            radius: BorderRadius.circular(14.px),
            alignItems: AlignItems.center,
            color: AppColors.backgroundWhite,
            textAlign: TextAlign.center,
            fontFamily: FontFamily.list(
                [FontFamily("Space Grotesk"), FontFamilies.andaleMono]),
            fontSize: 20.px,
            backgroundColor: AppColors.textBlack,
          ),
        ])
      ];
}
