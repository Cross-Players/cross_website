import 'package:jaspr/jaspr.dart';

class Admin extends StatelessComponent {
  const Admin({super.key});

  @override
  Iterable<Component> build(BuildContext context) sync* {
    yield div(
        styles: Styles(
          display: Display.flex,
          maxWidth: 100.percent,
          minHeight: 100.vh,
          backgroundColor: Colors.white,
        ),
        [
          iframe(
            [],
            src: 'https://cross-website-83900.web.app',
          )
        ]);
  }
}
