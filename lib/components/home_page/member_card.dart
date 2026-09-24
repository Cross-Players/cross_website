import 'package:cross_website/components/common/size_box_component.dart';
import 'package:cross_website/constants/app_colors.dart';
import 'package:jaspr/dom.dart';
import 'package:jaspr/jaspr.dart';

class MemberCard extends StatelessComponent {
  final String name;
  final String position;
  final String content;
  final String imagePath;
  final String alt;
  final String? navigateLink;

  const MemberCard({
    super.key,
    required this.name,
    required this.position,
    required this.imagePath,
    required this.content,
    required this.alt,
    this.navigateLink,
  });

  @override
  Component build(BuildContext context) {
    return navigateLink != null
        ? a(
            href: navigateLink!,
            target: Target.blank,
            styles: Styles(
              color: AppColors.textBlack,
              textDecoration: TextDecoration.none,
            ),
            [
              div(
                  styles: Styles(
                      padding:
                          Padding.symmetric(horizontal: 35.px, vertical: 40.px),
                      border:
                          Border.all(color: AppColors.textBlack, width: 1.px),
                      radius: BorderRadius.circular(45.px),
                      shadow: BoxShadow(
                          offsetX: 0.px,
                          offsetY: 5.px,
                          color: AppColors.textBlack),
                      backgroundColor: AppColors.white),
                  [_nameAndPosition(), _line(), _content()]),
            ],
          )
        : div(
            styles: Styles(
                padding: Padding.symmetric(horizontal: 35.px, vertical: 40.px),
                border: Border.all(color: AppColors.textBlack, width: 1.px),
                radius: BorderRadius.circular(45.px),
                shadow: BoxShadow(
                    offsetX: 0.px, offsetY: 5.px, color: AppColors.textBlack),
                backgroundColor: AppColors.white),
            [_nameAndPosition(), _line(), _content()]);
  }

  Component _nameAndPosition() {
    return div(
        styles: Styles(
          display: Display.flex,
          flexDirection: FlexDirection.row,
        ),
        [
          div([
            img(
                src: imagePath,
                width: 130,
                height: 130,
                alt: alt,
                loading: MediaLoading.lazy,
                attributes: {'decoding': 'async'},
                styles: Styles(
                  border:
                      Border.all(width: 2.px, color: AppColors.greenPrimary),
                  radius: BorderRadius.circular(20.px),
                ))
          ]),
          SizeBoxComponent(width: 20),
          div(
              styles: Styles(
                display: Display.flex,
                width: 100.percent,
                flexDirection: FlexDirection.column,
                justifyContent: JustifyContent.center,
                alignItems: AlignItems.start,
              ),
              [
                div(
                    styles: Styles(
                      width: 100.percent,
                    ),
                    [
                      div(
                          styles: Styles(
                            width: 100.percent,
                            color: AppColors.textBlack,
                            textAlign: TextAlign.start,
                            fontSize: 20.px,
                            fontWeight: FontWeight.w500,
                          ),
                          [Component.text(name)]),
                      div(
                          styles: Styles(
                              color: AppColors.textBlack,
                              textAlign: TextAlign.start,
                              fontSize: 18.px,
                              fontWeight: FontWeight.w400),
                          [Component.text(position)]),
                    ])
              ]),
        ]);
  }

  Component _line() {
    return div(
        styles: Styles(
            height: 1.px,
            margin: Margin.symmetric(vertical: 28.px),
            backgroundColor: AppColors.textBlack),
        []);
  }

  Component _content() {
    return div(
        styles: Styles(
          color: AppColors.textBlack,
          textAlign: TextAlign.start,
          fontSize: 18.px,
          fontWeight: FontWeight.w400,
        ),
        [Component.text(content)]);
  }
}
