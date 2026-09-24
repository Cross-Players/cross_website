import 'package:jaspr/dom.dart';
import 'package:jaspr/jaspr.dart';

class Divider extends StatelessComponent {
  const Divider({super.key});

  @override
  Component build(BuildContext context) {
    return div(classes: 'divider', []);
  }

  @css
  static List<StyleRule> get styles => [
        css('.divider').styles(
          width: 97.vw,
          height: 1.px,
          // margin: 8px 0;
          backgroundColor: Colors.lightGrey,
        ),
      ];
}
