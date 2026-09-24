import 'dart:convert';

import 'package:jaspr/dom.dart';
import 'package:jaspr/jaspr.dart';

/// Public origin of the site, used for canonical and Open Graph URLs.
const siteUrl = 'https://www.crosstechedu.site';
const siteName = 'Cross Tech & Edu';
const _ogImage = '$siteUrl/images/og-image.png';

typedef SeoPage = ({
  String path,
  String title,
  String description,
  bool noIndex,
});

/// Title and description of every route, in one place. The router reads the
/// titles (`Route.title`), and each page renders [PageSeo] with its entry.
abstract final class SeoPages {
  static const SeoPage home = (
    path: '/',
    title: 'Cross Tech & Edu | Technology & Education Solutions in Vietnam',
    description:
        'Cross Technology and Education builds smart learning platforms, '
            'custom software and digital solutions for schools and businesses '
            'in Vietnam and beyond.',
    noIndex: false,
  );

  static const SeoPage about = (
    path: '/about',
    title: 'About Us | Cross Tech & Edu',
    description:
        'Meet CROSS TECH & EDU CO., LTD.: our vision, mission, core values '
            'and the team connecting technology and education in Vietnam.',
    noIndex: false,
  );

  // Careers is hidden from the navigation for now, so keep it out of search.
  static const SeoPage careers = (
    path: '/careers',
    title: 'Careers | Cross Tech & Edu',
    description:
        'Open positions at Cross Technology and Education. Join our team.',
    noIndex: true,
  );

  static const SeoPage admin = (
    path: '/adminQuyenAnh',
    title: 'Admin | Cross Tech & Edu',
    description: 'Internal administration page.',
    noIndex: true,
  );

  static const SeoPage gplxPolicy = (
    path: '/gplx/policy',
    title: 'GPLX App Privacy Policy | Cross Tech & Edu',
    description:
        'Privacy policy for the GPLX driving licence practice app by Cross '
            'Technology and Education.',
    noIndex: false,
  );
}

/// Writes the page's description, robots, canonical and social tags into
/// `<head>`. Tags carry an `id` (or a `name`) so client-side navigation
/// replaces them instead of adding duplicates.
class PageSeo extends StatelessComponent {
  const PageSeo(this.page, {super.key});

  final SeoPage page;

  @override
  Component build(BuildContext context) {
    final url = '$siteUrl${page.path}';
    return Document.head(
      meta: {
        'description': page.description,
        'robots': page.noIndex ? 'noindex, nofollow' : 'index, follow',
        'twitter:card': 'summary_large_image',
        'twitter:title': page.title,
        'twitter:description': page.description,
        'twitter:image': _ogImage,
      },
      children: [
        link(id: 'canonical', rel: 'canonical', href: url),
        _property('og-type', 'og:type', 'website'),
        _property('og-site-name', 'og:site_name', siteName),
        _property('og-title', 'og:title', page.title),
        _property('og-description', 'og:description', page.description),
        _property('og-url', 'og:url', url),
        _property('og-image', 'og:image', _ogImage),
        _property('og-locale', 'og:locale', 'en_US'),
        if (page.path == '/')
          script(
            id: 'organization-ld',
            attributes: {'type': 'application/ld+json'},
            content: _organizationJsonLd,
          ),
      ],
    );
  }

  static Component _property(String id, String property, String content) =>
      meta(id: id, attributes: {'property': property, 'content': content});
}

final _organizationJsonLd = jsonEncode({
  '@context': 'https://schema.org',
  '@type': 'Organization',
  'name': 'CROSS TECH & EDU CO., LTD.',
  'alternateName': 'Cross Technology and Education',
  'url': siteUrl,
  'logo': '$siteUrl/icons/cross-512.png',
  'email': 'crosstechedu@gmail.com',
  'telephone': '+84338305895',
  'address': {
    '@type': 'PostalAddress',
    'addressLocality': 'Hanoi',
    'addressCountry': 'VN',
  },
});
