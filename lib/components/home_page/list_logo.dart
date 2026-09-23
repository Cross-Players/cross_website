import 'package:cross_website/constants/app_colors.dart';
import 'package:cross_website/constants/image_constant.dart';
import 'package:cross_website/language/language_manager.dart';
import 'package:jaspr/dom.dart';
import 'package:jaspr/jaspr.dart';
import 'package:jaspr_riverpod/jaspr_riverpod.dart';

typedef _Client = ({
  String name,
  String logo,
  String? url,
  // Logos that are a solid-colour square fill the whole tile instead of
  // sitting inside it with padding.
  bool fill,
});

class ListLogo extends StatelessComponent {
  const ListLogo({super.key});

  static const List<_Client> _clients = [
    (
      name: 'Twendee Soft',
      logo: Images.twendeeLogo,
      url: 'https://twendeesoft.com/',
      fill: false
    ),
    (
      name: 'JVB Corp',
      logo: Images.jvbLogo,
      url: 'https://jvb-corp.com/vi/',
      fill: false
    ),
    (
      name: 'ITED',
      logo: Images.itedLogo,
      url: 'https://ited.edu.vn/',
      fill: true
    ),
    (
      name: 'VFast Soft',
      logo: Images.vfastLogo,
      url: 'https://vfastsoft.com/',
      fill: false
    ),
  ];

  @override
  Component build(BuildContext context) {
    final selectedLang =
        context.watch(LanguageManager.selectedLanguageProvider);

    return section(classes: 'clients-section', [
      div(classes: 'clients-heading', [
        span(classes: 'clients-eyebrow', [
          Component.text(
              LanguageManager.translate('home_clients_eyebrow', selectedLang)),
        ]),
        h2(classes: 'clients-title', [
          Component.text(
              LanguageManager.translate('home_clients_title', selectedLang)),
        ]),
      ]),
      ul(classes: 'clients-grid', [
        for (final client in _clients) li([_buildCard(client)]),
      ]),
    ]);
  }

  Component _buildCard(_Client client) {
    final children = [
      div(
          classes: client.fill ? 'client-logo client-logo-fill' : 'client-logo',
          [
            img(src: client.logo, alt: '${client.name} logo'),
          ]),
      span(classes: 'client-name', [Component.text(client.name)]),
    ];
    final url = client.url;
    if (url == null) {
      return div(classes: 'client-card', children);
    }
    return a(
      classes: 'client-card client-card-link',
      href: url,
      target: Target.blank,
      attributes: {'rel': 'noopener noreferrer'},
      children,
    );
  }

  @css
  static List<StyleRule> get styles => [
        css('.clients-section').styles(
          display: Display.flex,
          maxWidth: 100.percent,
          padding: Padding.symmetric(vertical: 48.px, horizontal: 100.px),
          flexDirection: FlexDirection.column,
          alignItems: AlignItems.center,
          gap: Gap.all(32.px),
        ),
        css('.clients-heading').styles(
          display: Display.flex,
          flexDirection: FlexDirection.column,
          alignItems: AlignItems.center,
          gap: Gap.all(10.px),
          textAlign: TextAlign.center,
        ),
        css('.clients-eyebrow').styles(
          padding: Padding.symmetric(vertical: 4.px, horizontal: 14.px),
          radius: BorderRadius.circular(999.px),
          color: AppColors.primaryColor,
          fontSize: 14.px,
          fontWeight: FontWeight.w500,
          letterSpacing: 0.08.em,
          textTransform: TextTransform.upperCase,
          backgroundColor: AppColors.greenPrimary,
        ),
        css('.clients-title').styles(
          margin: Margin.zero,
          color: AppColors.textBlack,
          fontSize: 28.px,
          fontWeight: FontWeight.w500,
        ),
        // Flex-wrap rather than grid so a partly filled last row stays
        // centered; every card still gets the same fixed width per row.
        css('.clients-grid').styles(
          display: Display.flex,
          width: 100.percent,
          maxWidth: 1200.px,
          padding: Padding.zero,
          margin: Margin.zero,
          flexWrap: FlexWrap.wrap,
          justifyContent: JustifyContent.center,
          gap: Gap.all(24.px),
          raw: {'list-style': 'none'},
        ),
        css('.clients-grid > li').styles(
          raw: {'flex': '0 0 calc((100% - 4 * 24px) / 5)'},
        ),
        css('.client-card').styles(
          display: Display.flex,
          height: 100.percent,
          padding: Padding.all(20.px),
          boxSizing: BoxSizing.borderBox,
          flexDirection: FlexDirection.column,
          alignItems: AlignItems.center,
          gap: Gap.all(14.px),
          radius: BorderRadius.circular(20.px),
          color: AppColors.textBlack,
          textDecoration: TextDecoration.none,
          raw: {
            'background': 'var(--cardBackground)',
            'border': '1px solid var(--cardBorder)',
            'box-shadow': '0 4px 16px rgba(15, 23, 42, 0.06)',
            'backdrop-filter': 'blur(8px)',
            'transition': 'transform 0.2s ease, box-shadow 0.2s ease',
          },
        ),
        css('.client-card-link:hover, .client-card-link:focus-visible').styles(
          raw: {
            'transform': 'translateY(-4px)',
            'box-shadow': '0 12px 28px rgba(15, 23, 42, 0.12)',
          },
        ),
        // Every logo sits in an identical white tile so mixed aspect ratios
        // and backgrounds read as one consistent set.
        css('.client-logo').styles(
          display: Display.flex,
          width: 100.percent,
          height: 110.px,
          padding: Padding.all(14.px),
          boxSizing: BoxSizing.borderBox,
          overflow: Overflow.hidden,
          justifyContent: JustifyContent.center,
          alignItems: AlignItems.center,
          radius: BorderRadius.circular(14.px),
          backgroundColor: Colors.white,
        ),
        css('.client-logo img').styles(
          width: 100.percent,
          height: 100.percent,
          raw: {'object-fit': 'contain'},
        ),
        css('.client-logo-fill').styles(
          padding: Padding.zero,
          backgroundColor: Color('#3469AB'),
        ),
        css('.client-name').styles(
          fontSize: 16.px,
          fontWeight: FontWeight.w500,
          textAlign: TextAlign.center,
        ),
        css.media(MediaQuery.screen(maxWidth: 900.px), [
          css('.clients-section').styles(
            padding: Padding.symmetric(vertical: 40.px, horizontal: 24.px),
          ),
          css('.clients-grid > li').styles(
            raw: {'flex': '0 0 calc((100% - 2 * 24px) / 3)'},
          ),
        ]),
        css.media(MediaQuery.screen(maxWidth: 600.px), [
          css('.clients-section').styles(
            padding: Padding.symmetric(vertical: 32.px, horizontal: 16.px),
          ),
          css('.clients-grid').styles(gap: Gap.all(14.px)),
          css('.clients-grid > li').styles(
            raw: {'flex': '0 0 calc((100% - 14px) / 2)'},
          ),
          css('.client-card').styles(
            padding: Padding.all(12.px),
            radius: BorderRadius.circular(16.px),
          ),
          css('.client-logo').styles(height: 84.px),
          css('.clients-title').styles(fontSize: 22.px),
        ]),
      ];
}
