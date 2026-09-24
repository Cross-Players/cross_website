import 'package:cross_website/components/seo.dart';
import 'package:jaspr/dom.dart';
import 'package:jaspr/jaspr.dart';

class Admin extends StatelessComponent {
  const Admin({super.key});

  @override
  Component build(BuildContext context) {
    return div(
        styles: Styles(
          display: Display.flex,
          width: 100.percent,
          height: 100.vh,
          backgroundColor: Colors.white,
        ),
        [
          const PageSeo(SeoPages.admin),
          iframe(
              src: 'https://cross-website-83900.web.app',
              styles: Styles(
                display: Display.flex,
                width: 100.percent,
                height: 100.vh,
                backgroundColor: Colors.white,
              ),
              [])
        ]);
  }
}
