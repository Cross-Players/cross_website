import 'package:cross_website/components/home_page/footer_block.dart';
import 'package:cross_website/components/home_page/header_price.dart';
import 'package:cross_website/language/language_manager.dart';
import 'package:jaspr_riverpod/jaspr_riverpod.dart';
import 'package:jaspr/jaspr.dart';

class PricePage extends StatelessComponent {
  const PricePage({super.key});

  static final List<ServiceGroup> serviceGroups = [
    ServiceGroup(
      title: 'pricing_web_title',
      id: 'adsdigi',
      services: [
        ServicePackage(
          tier: 'PLANES',
          price: 'pricing_web_planes_money',
          features: ['pricing_web_planes'],
        ),
        ServicePackage(
          tier: 'BASIC',
          price: 'pricing_web_basic_money',
          features: ['pricing_web_basic'],
        ),
        ServicePackage(
          tier: 'MEDIUM',
          price: 'pricing_web_medium_money',
          features: ['pricing_web_medium'],
        ),
        ServicePackage(
          tier: 'PREMIUM',
          price: 'pricing_web_premium_money',
          features: ['pricing_web_premium'],
        ),
      ],
    ),
    ServiceGroup(
      title: 'pricing_landpage_title',
      id: 'landing',
      services: [
        ServicePackage(
          tier: 'BASIC',
          price: 'pricing_landpage_basic_money',
          features: ['pricing_landpage_basic'],
        ),
        ServicePackage(
          tier: 'MEDIUM',
          price: 'pricing_landpage_medium_money',
          features: ['pricing_landpage_medium'],
        ),
        ServicePackage(
          tier: 'PREMIUM',
          price: 'pricing_landpage_premium_money',
          features: ['pricing_landpage_premium'],
        ),
      ],
    ),
    ServiceGroup(
      title: 'pricing_app_title',
      id: 'app',
      services: [
        ServicePackage(
          tier: 'STARTER',
          price: 'pricing_app_starter_money',
          features: ['pricing_app_starter'],
        ),
        ServicePackage(
          tier: 'ADVANCED',
          price: 'pricing_app_advanced_money',
          features: ['pricing_app_advanced'],
        ),
        ServicePackage(
          tier: 'PREMIUM APP',
          price: 'pricing_app_premium_money',
          features: ['pricing_app_premium'],
        ),
      ],
    ),
    ServiceGroup(
      title: 'pricing_uiux_title',
      id: 'design',
      services: [
        ServicePackage(
          tier: 'BASIC UI/UX',
          price: 'pricing_uiux_basic_money',
          features: ['pricing_uiux_basic'],
        ),
        ServicePackage(
          tier: 'ADVANCED UI/UX',
          price: 'pricing_uiux_advanced_money',
          features: ['pricing_uiux_advanced'],
        ),
        ServicePackage(
          tier: 'PREMIUM UI/UX',
          price: 'pricing_uiux_premium_money',
          features: ['pricing_uiux_premium'],
        ),
      ],
    ),
    ServiceGroup(
      title: 'pricing_maintenance_title',
      id: 'maintenance',
      services: [
        ServicePackage(
          tier: 'BASIC MAINTENANCE',
          price: 'pricing_maintenance_basic_money',
          features: ['pricing_maintenance_basic'],
        ),
        ServicePackage(
          tier: 'ADVANCED MAINTENANCE',
          price: 'pricing_maintenance_advanced_money',
          features: ['pricing_maintenance_advanced'],
        ),
        ServicePackage(
          tier: 'CUSTOM UPGRADE',
          price: 'pricing_maintenance_custom_money',
          features: ['pricing_maintenance_custom'],
        ),
      ],
    ),
    ServiceGroup(
      title: 'pricing_combo_title',
      id: 'combo',
      services: [
        ServicePackage(
          tier: 'COMBO KHỞI ĐỘNG – STARTUP LAUNCH',
          price: 'pricing_combo_startup_money',
          features: ['pricing_combo_startup'],
        ),
        ServicePackage(
          tier: 'COMBO DOANH NGHIỆP – BUSINESS BOOST',
          price: 'pricing_combo_business_money',
          features: ['pricing_combo_business'],
        ),
        ServicePackage(
          tier: 'COMBO TOÀN DIỆN – DIGITAL SOLUTION',
          price: 'pricing_combo_solution_money',
          features: ['pricing_combo_solution'],
        ),
      ],
    ),
  ];

  @override
  Iterable<Component> build(BuildContext context) sync* {
    final selectedLang =
        context.watch(LanguageManager.selectedLanguageProvider);
    yield section(classes: 'section_price', [
      div(id: serviceGroups.first.id, [
        const HeaderPrice(),
        div(
          classes: 'header-container',
          [
            h1([
              text(LanguageManager.translate('pricing_heading', selectedLang))
            ]),
            p(
              classes: 'price-desc',
              [
                text(LanguageManager.translate(
                    'pricing_subtitle', selectedLang)),
              ],
            ),
          ],
        ),
        for (final group in serviceGroups)
          div(id: group.id, classes: 'service-group', [
            h2(
              classes:
                  'service-title${group.id == 'landing' ? ' landing-title' : ''}',
              [text(LanguageManager.translate(group.title, selectedLang))],
            ),
            div(
              classes: 'price-row',
              [
                for (final service in group.services)
                  div(classes: 'price-card', [
                    div(classes: 'tier-label', [text(service.tier)]),
                    div(classes: 'price-value', [
                      text(LanguageManager.translate(
                          service.price, selectedLang))
                    ]),
                    ul([
                      for (final f in service.features)
                        for (final feature in LanguageManager.parseFeatures(
                            LanguageManager.translate(f, selectedLang)))
                          li([text(feature)]),
                    ]),
                    // a(
                    //   href: 'mailto:crosstechedu@gmail.com',
                    //   classes: 'price-contact',
                    //   [text('Liên hệ tư vấn')],
                    // ),
                  ]),
              ],
            ),
          ]),
      ]),
      div(classes: 'floating-contact', [
        a(href: 'tel:0901234567', classes: 'contact-button', [
          img(src: 'images/phone.svg', alt: 'Phone', width: 24, height: 24),
        ]),
        a(href: 'https://zalo.me/your-zalo-id', classes: 'contact-button', [
          img(src: 'images/zalo.svg', alt: 'Zalo', width: 24, height: 24),
        ]),
        a(href: 'https://wa.me/84901234567', classes: 'contact-button', [
          img(
              src: 'images/facebook_icon.png',
              alt: 'FaceBook',
              width: 24,
              height: 24),
        ]),
      ]),
      div(
          styles: Styles(
            raw: {
              'background': 'var(--footerAltBackground)',
              'width': '100%',
            },
          ),
          [FooterBlock()])
    ]);
  }

  @css
  static List<StyleRule> get styles => [
        css(':root').styles(raw: {
          '--primary-cyan': '#35daff',
          '--primary-blue': '#3b82f6',
          '--primary-purple': '#a855f7',
          '--gray-50': '#f9fafb',
          '--gray-100': '#f3f4f6',
          '--gray-200': '#e5e7eb',
          '--gray-300': '#d1d5db',
          '--gray-400': '#9ca3af',
          '--gray-500': '#6b7280',
          '--gray-600': '#4b5563',
          '--gray-700': '#374151',
          '--gray-800': '#1f2937',
          '--gray-900': '#111827',
          '--white': '#ffffff',
        }),

        // ---------- LAYOUT ----------

        css('.section_price').raw({
          'background': 'var(--gradientBackground)',
        }),

        css('.header-container').raw({
          'text-align': 'center',
          'padding': '3rem 1rem',
          'max-width': '1200px',
          'margin': '0 auto',
        }),

        css('h1').raw({
          'font-size': '5rem',
          'color': 'var(--textBlack)',
          'margin-bottom': '1rem',
          'font-weight': '700',
        }),

        css('.price-desc').raw({
          'text-align': 'center',
          'color': 'var(--textBlack)',
          'margin-bottom': '2.5rem',
          'max-width': '800px',
          'margin-left': 'auto',
          'margin-right': 'auto',
          'line-height': '1.6',
        }),

        css('.service-title').raw({
          'text-align': 'center',
          'font-size': '2rem',
          'color': '#1976d2',
          'margin-bottom': '2rem',
          'font-weight': '600',
        }),

        css('.service-group').raw({'margin-bottom': '4rem'}),

        // ---------- PRICING ----------

        css('.price-row').raw({
          'display': 'flex',
          'flex-wrap': 'wrap',
          'justify-content': 'center',
          'gap': '1.5rem',
          'max-width': '1400px',
          'margin': '0 auto',
          'padding': '0 1rem',
        }),

        css('.price-card').raw({
          'padding': '2rem',
          'background': '#ffffff',
          'border-radius': '12px',
          'box-shadow': '0 6px 20px rgba(0, 0, 0, 0.15)',
          'border': '1px solid #e0e0e0',
          'text-align': 'center',
          'transition': 'transform 0.2s ease',
          'width': '100%',
          'max-width': '300px',
          'flex': '1 1 auto',
          'box-sizing': 'border-box',
        }),

        css('.price-card:hover').raw({
          'transform': 'translateY(-4px)',
        }),

        css('.tier-label').raw({
          'background': 'linear-gradient(to right, #ff6f00, #ffa000)',
          'color': '#fff',
          'font-weight': 'bold',
          'display': 'inline-block',
          'padding': '0.5rem 1rem',
          'border-radius': '20px',
          'margin-bottom': '1rem',
        }),

        css('.price-value').raw({
          'font-size': '1.5rem',
          'font-weight': 'bold',
          'color': '#1976d2',
          'margin': '1rem 0',
        }),

        css('ul').raw({'padding-left': '1rem', 'text-align': 'left'}),
        css('li').raw({'margin-bottom': '0.6rem', 'color': '#555'}),

        // ---------- CONTACT FLOATING ----------

        css('.floating-contact').raw({
          'position': 'fixed',
          'top': '50%',
          'right': '1rem',
          'transform': 'translateY(-50%)',
          'display': 'flex',
          'flex-direction': 'column',
          'gap': '0.7rem',
          'z-index': '999',
        }),

        css('.contact-button').raw({
          'width': '40px',
          'height': '40px',
          'border-radius': '50%',
          'background': '#d32f2f',
          'color': 'white',
          'font-size': '20px',
          'display': 'flex',
          'align-items': 'center',
          'justify-content': 'center',
          'box-shadow': '0 2px 8px rgba(0,0,0,0.15)',
          'cursor': 'pointer',
          'transition': 'transform 0.2s',
          'text-decoration': 'none',
        }),

        css('.contact-button:hover').raw({
          'transform': 'scale(1.1)',
        }),

        // ---------- FOOTER ----------

        css('.footer').styles(
          padding: Spacing.only(top: 64.px, bottom: 32.px),
          color: Colors.white,
          backgroundColor: Color('var(--gray-900)'),
        ),

        css('.footer-content').styles(
          display: Display.grid,
          margin: Spacing.only(bottom: 32.px),
          gap: Gap.all(32.px),
          raw: {
            'grid-template-columns': 'repeat(auto-fit, minmax(250px, 1fr))'
          },
        ),

        css('.footer-logo').styles(margin: Spacing.only(bottom: 32.px)),
        css('.footer-description').styles(
          margin: Spacing.only(bottom: 16.px),
          color: Color('var(--gray-400)'),
        ),

        css('.footer-title').styles(
          margin: Spacing.only(bottom: 16.px),
          fontWeight: FontWeight.w600,
        ),

        css('.footer-links').styles(listStyle: ListStyle.none),
        css('.footer-links li').styles(margin: Spacing.only(bottom: 8.px)),

        css('.footer-links a').styles(
          color: Color('var(--gray-400)'),
          textDecoration: TextDecoration.none,
          raw: {'transition': 'color 0.3s ease'},
        ),

        css('.footer-links a:hover').styles(
          color: Color('var(--primary-cyan)'),
        ),

        css('.contact-info').styles(
          display: Display.flex,
          flexDirection: FlexDirection.column,
          gap: Gap.all(8.px),
          color: Color('var(--gray-400)'),
        ),

        css('.contact-item').styles(
          display: Display.flex,
          alignItems: AlignItems.center,
          gap: Gap.all(8.px),
        ),

        css('.footer-bottom').styles(
          padding: Spacing.only(top: 32.px),
          border: Border.only(
            top: BorderSide(width: 1.px, color: Color('var(--gray-800)')),
          ),
          color: Color('var(--gray-400)'),
          textAlign: TextAlign.center,
        ),

        // ---------- RESPONSIVE ALL ----------

        StyleRule.media(
          query: MediaQuery.raw('only screen and (max-width: 1024px)'),
          styles: [
            css('.header-container').raw({'padding': '2rem 1rem'}),
            css('h1').raw({'font-size': '2.5rem', 'line-height': '1.2'}),
            css('.price-desc').raw({'font-size': '1rem', 'padding': '0 1rem'}),
            css('.service-title')
                .raw({'font-size': '1.25rem', 'margin-bottom': '1.5rem'}),
            css('.price-row').raw({
              'flex-direction': 'column',
              'align-items': 'center',
              'overflow-x': 'unset',
            }),
            css('.price-card').raw({
              'width': '100%',
              'max-width': '320px',
              'margin': '0 auto 1rem auto',
            }),
            css('.floating-contact').raw({
              'top': 'unset',
              'bottom': '1rem',
              'right': '1rem',
              'flex-direction': 'column',
              'transform': 'none',
            }),
            css('.footer-content').raw({'grid-template-columns': '1fr'}),
          ],
        ),
        StyleRule.media(
          query: MediaQuery.raw('only screen and (max-width: 480px)'),
          styles: [
            css('h1').raw({
              'font-size': '1.75rem',
              'line-height': '1.4',
              'padding': '0 1rem',
              'word-break': 'break-word',
              'overflow-wrap': 'break-word',
            }),
          ],
        ),
      ];
}

class ServiceGroup {
  final String title;
  final String id;
  final List<ServicePackage> services;
  const ServiceGroup(
      {required this.title, required this.id, required this.services});
}

class ServicePackage {
  final String tier;
  final String price;
  final List<String> features;
  const ServicePackage({
    required this.tier,
    required this.price,
    required this.features,
  });
}
