import 'package:jaspr/jaspr.dart';

@client
class Admin extends StatelessComponent {
  const Admin({super.key});

  @override
  Iterable<Component> build(BuildContext context) sync* {
    yield div(
        styles: Styles(
          display: Display.flex,
          width: 100.percent,
          height: 100.vh,
          backgroundColor: Colors.white,
        ),
        [
          iframe(
              width: 1200,
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
