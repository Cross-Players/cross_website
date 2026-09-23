import 'package:jaspr/dom.dart';
import 'package:jaspr/jaspr.dart';

class SizeBoxComponent extends StatelessComponent {
  final double? height;
  final double? width;

  const SizeBoxComponent({super.key, this.height, this.width});

  @override
  Component build(BuildContext context) {
    return div(
        styles: Styles(
          width: width != null ? Unit.pixels(width!) : null,
          height: height != null ? Unit.pixels(height!) : null,
        ),
        []);
  }
}
