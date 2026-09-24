import 'dart:async';

import 'package:cross_website/components/common/size_box_component.dart';
import 'package:cross_website/constants/app_colors.dart';
import 'package:cross_website/constants/image_constant.dart';
import 'package:cross_website/language/language_manager.dart';
import 'package:jaspr/dom.dart';
import 'package:jaspr/jaspr.dart';
import 'package:jaspr_riverpod/jaspr_riverpod.dart';
import 'package:universal_web/web.dart' as web;

class FooterBlock extends StatelessComponent {
  const FooterBlock({super.key});

  @override
  Component build(BuildContext context) {
    final selectedLang =
        context.watch(LanguageManager.selectedLanguageProvider);

    return div(
        styles: Styles(
          maxWidth: 100.percent,
        ),
        [
          div(classes: 'footer_block', [
            _header(selectedLang),
            SizeBoxComponent(height: 20),
            _body(selectedLang),
            SizeBoxComponent(height: 20),
            _footer(selectedLang),
          ]),
        ]);
  }

  Component _header(String lang) {
    return div(
      classes: 'footer_header',
      [
        div(
          styles: Styles(
              display: Display.flex,
              flexDirection: FlexDirection.row,
              alignItems: AlignItems.center),
          [
            img(
                alt: 'Cross Tech & Edu logo',
                width: 40,
                height: 40,
                // styles: Styles(raw: {"filter": "invert(1)"}),
                src: Images.crossLogo),
            SizeBoxComponent(width: 6),
            div(
              styles: Styles(
                color: Colors.white,
                fontSize: 30.px,
                fontWeight: FontWeight.w500,
              ),
              [
                Component.text(
                    LanguageManager.translate('footer_company_name', lang)),
              ],
            ),
          ],
        ),
        div(
          styles: Styles(
              display: Display.flex,
              flexDirection: FlexDirection.row,
              color: Colors.white,
              fontSize: 18.px,
              fontWeight: FontWeight.w400,
              textDecoration:
                  TextDecoration(line: TextDecorationLine.underline)),
          [
            Component.text(LanguageManager.translate('footer_about_us', lang)),
            SizeBoxComponent(width: 20),
            Component.text(LanguageManager.translate('footer_services', lang)),
            SizeBoxComponent(width: 20),
            Component.text(LanguageManager.translate('footer_user_case', lang)),
            SizeBoxComponent(width: 20),
            Component.text(LanguageManager.translate('footer_pricing', lang)),
          ],
        ),
        div(
            styles:
                Styles(display: Display.flex, flexDirection: FlexDirection.row),
            [
              img(
                  alt: 'Instagram',
                  src: Images.instagramIcon,
                  height: 30,
                  width: 30),
              SizeBoxComponent(width: 20),
              img(
                  alt: 'Facebook',
                  src: Images.facebookIcon,
                  height: 30,
                  width: 30),
              SizeBoxComponent(width: 20),
              img(
                  alt: 'Twitter',
                  src: Images.twitterIcon,
                  height: 30,
                  width: 30),
            ])
      ],
    );
  }

  Component _body(String lang) {
    return div(classes: 'footer_body', [
      _contentUs(lang),
      _map(lang),
    ]);
  }

  Component _contentUs(String lang) {
    return div(classes: 'footer_content_us', [
      div(
        styles: Styles(
            display: Display.flex,
            width: 120.px,
            padding: Padding.all(5.px),
            radius: BorderRadius.circular(14.px),
            flexWrap: FlexWrap.wrap,
            justifyContent: JustifyContent.center,
            color: Colors.black,
            textAlign: TextAlign.center,
            backgroundColor: AppColors.greenPrimary),
        [
          Component.text(LanguageManager.translate('footer_contact_us', lang)),
        ],
      ),
      SizeBoxComponent(height: 20),
      div([
        a(
          href: "mailto:crosstechedu@gmail.com",
          styles: Styles(
            color: Colors.white,
            textDecoration: TextDecoration(line: TextDecorationLine.none),
          ),
          [
            Component.text(
                LanguageManager.translate('footer_email_label', lang)),
          ],
        ),
      ]),
      SizeBoxComponent(height: 20),
      div([
        a(
          href: "tel:0338305895",
          styles: Styles(
            color: Colors.white,
            textDecoration: TextDecoration(line: TextDecorationLine.none),
          ),
          [
            Component.text(
                LanguageManager.translate('footer_phone_label', lang)),
          ],
        ),
      ]),
      SizeBoxComponent(height: 20),
      div([
        a(
          href: "https://maps.app.goo.gl/8RR39Ge1WESWiPcj6",
          target: Target.blank,
          styles: Styles(
            color: Colors.white,
            textDecoration: TextDecoration(line: TextDecorationLine.none),
          ),
          [
            Component.text(
                LanguageManager.translate('footer_address_label', lang)),
          ],
        ),
      ]),
    ]);
  }

  Component _map(String lang) => const _LazyMap();

  Component _footer(String lang) {
    return div(
      styles: Styles(
          display: Display.flex,
          padding: Padding.only(top: 50.px),
          border:
              Border.only(top: BorderSide(width: 1.px, color: Colors.white)),
          color: Colors.white),
      [
        Component.text(LanguageManager.translate('footer_copyright', lang)),
        SizeBoxComponent(width: 40),
        div(
          styles: Styles(
            textDecoration: TextDecoration(line: TextDecorationLine.underline),
          ),
          [
            Component.text(
                LanguageManager.translate('footer_privacy_policy', lang)),
          ],
        ),
      ],
    );
  }

  @css
  static List<StyleRule> get style => [
        css('.footer_block', [
          css('&').styles(
              display: Display.flex,
              padding:
                  Padding.symmetric(horizontal: 5.percent, vertical: 50.px),
              margin: Margin.symmetric(horizontal: 5.percent),
              radius: BorderRadius.only(
                  topLeft: Radius.circular(45.px),
                  topRight: Radius.circular(45.px)),
              flexDirection: FlexDirection.column,
              justifyContent: JustifyContent.spaceBetween,
              backgroundColor: AppColors.primaryColor)
        ]),
        css('.footer_header', [
          css('&').styles(
            display: Display.flex,
            margin: Spacing.only(bottom: 20.px),
            flexDirection: FlexDirection.row,
            justifyContent: JustifyContent.spaceBetween,
            alignItems: AlignItems.center,
          ),
        ]),
        css('.footer_body', [
          css('&').styles(
            display: Display.flex,
            flexDirection: FlexDirection.row,
            justifyContent: JustifyContent.spaceBetween,
            alignItems: AlignItems.start,
          ),
        ]),
        css('.footer_content_us', [
          css('&').styles(
              display: Display.flex,
              width: 30.percent,
              height: 100.percent,
              flexDirection: FlexDirection.column,
              justifyContent: JustifyContent.spaceBetween,
              color: Colors.white,
              fontSize: 18.px,
              fontWeight: FontWeight.w400)
        ]),
        css('.footer_map', [
          css('&').styles(
            display: Display.flex,
            width: 65.percent,
            height: 230.px,
            padding: Padding.all(0.px),
            radius: BorderRadius.circular(14.px),
            overflow: Overflow.hidden,
            justifyContent: JustifyContent.center,
            alignItems: AlignItems.center,
            backgroundColor: AppColors.background292A32,
          ),
          css('.map').styles(
            width: 100.percent,
            height: 100.percent,
            radius: BorderRadius.circular(14.px),
            overflow: Overflow.hidden,
          ),
        ]),
        css.media(MediaQuery.screen(maxWidth: 1000.px), [
          css('.footer_block', [
            css('&').styles(
                flexDirection: FlexDirection.column,
                justifyContent: JustifyContent.spaceBetween,
                backgroundColor: AppColors.primaryColor)
          ]),
          css('.footer_header', [
            css('&').styles(
              flexDirection: FlexDirection.column,
              gap: Gap.all(20.px),
              textAlign: TextAlign.center,
            ),
          ]),
          css('.footer_body', [
            css('&').styles(
              width: 100.percent,
              flexDirection: FlexDirection.column,
              justifyContent: JustifyContent.spaceBetween,
              alignItems: AlignItems.center,
            ),
          ]),
          css('.footer_content_us', [
            css('&').styles(
              width: 100.percent,
              alignItems: AlignItems.center,
              textAlign: TextAlign.center,
            ),
          ]),
          css('.footer_map', [
            css('&').styles(
              width: 100.percent,
              height: 200.px,
              padding: Padding.all(0.px),
              margin: Spacing.symmetric(vertical: 20.px),
            ),
          ]),
          css('.map').styles(
            width: 100.percent,
            height: 100.percent,
          ),
        ]),
        css.media(MediaQuery.screen(maxWidth: 600.px), [
          css('.footer_map', [
            css('&').styles(
              width: 100.percent,
              height: 180.px,
              padding: Padding.all(0.px),
              margin: Spacing.symmetric(vertical: 10.px),
            ),
          ]),
          css('.map').styles(
            width: 100.percent,
            height: 100.percent,
          ),
        ]),
      ];
}

/// Google Maps embed that is only created once the footer nears the viewport.
///
/// `loading="lazy"` alone doesn't help here: hydration re-inserts the
/// server-rendered DOM, and re-inserting an iframe makes the browser load it
/// immediately (~450 KB of Maps scripts on every first visit).
class _LazyMap extends StatefulComponent {
  const _LazyMap();

  @override
  State<_LazyMap> createState() => _LazyMapState();
}

class _LazyMapState extends State<_LazyMap> {
  static const _mapUrl =
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3722.8291308260964!2d105.80479707504539!3d21.079485680582636!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135abe65144a209%3A0xaf7eeca92c256d9e!2sCross%20Technology%20%26%20Education!5e0!3m2!1sen!2sus!4v1747126150721!5m2!1sen!2sus";

  // How far below the viewport the map starts loading.
  static const _preloadMargin = 600;

  final _containerKey = GlobalNodeKey<web.HTMLElement>();
  StreamSubscription<web.Event>? _scrollSub;
  bool _showMap = false;

  @override
  void initState() {
    super.initState();
    if (!kIsWeb) return;
    _scrollSub = web.EventStreamProviders.scrollEvent
        .forTarget(web.window)
        .listen((_) => _checkVisible());
    // Also covers pages opened already scrolled down (e.g. /#contact).
    Future.delayed(Duration.zero, _checkVisible);
  }

  void _checkVisible() {
    final node = _containerKey.currentNode;
    if (_showMap || node == null) return;
    final top = node.getBoundingClientRect().top;
    if (top < web.window.innerHeight + _preloadMargin) {
      _scrollSub?.cancel();
      _scrollSub = null;
      setState(() => _showMap = true);
    }
  }

  @override
  void dispose() {
    _scrollSub?.cancel();
    super.dispose();
  }

  @override
  Component build(BuildContext context) {
    return div(key: _containerKey, classes: 'footer_map', [
      if (_showMap)
        iframe(
          src: _mapUrl,
          classes: 'map',
          styles: Styles(
            width: 100.percent,
            height: 100.percent,
            border: Border.none,
          ),
          attributes: {
            'allowfullscreen': '',
            'title': 'Cross Technology and Education on Google Maps',
          },
          [],
        ),
    ]);
  }
}
