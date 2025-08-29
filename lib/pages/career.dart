import 'package:cross_website/components/common/size_box_component.dart';
import 'package:cross_website/components/header.dart';
import 'package:cross_website/data/firebase.dart';
import 'package:jaspr/server.dart';

@client
class Career extends StatelessComponent {
  const Career({super.key});

  @override
  Iterable<Component> build(BuildContext context) sync* {
    yield div(
        styles: Styles(
          height: 100.vh,
          maxWidth: 100.percent,
        ),
        [
          Header(),
          _buildHeroSection(),
          div(
              styles: Styles(
                display: Display.flex,
                maxWidth: 100.percent,
                flexDirection: FlexDirection.column,
                justifyContent: JustifyContent.center,
                alignItems: AlignItems.center,
              ),
              [
                SizeBoxComponent(height: 50),
                div(
                    styles: Styles(
                      display: Display.flex,
                      width: 80.percent,
                      flexDirection: FlexDirection.column,
                      justifyContent: JustifyContent.center,
                      alignItems: AlignItems.center,
                    ),
                    [
                      // Tiêu đề bảng
                      div(
                          styles: Styles(
                            display: Display.flex,
                            width: 100.percent,
                            padding: const Spacing.all(Unit.pixels(16)),
                            margin: const Spacing.only(bottom: Unit.pixels(2)),
                            backgroundColor: const Color('#f5f5f5'),
                          ),
                          [
                            div(
                                styles: Styles(
                                  width: 33.33.percent,
                                  textAlign: TextAlign.center,
                                ),
                                [
                                  h4([text('Tuyển dụng')])
                                ]),
                            div(
                                styles: Styles(
                                  width: 33.33.percent,
                                  textAlign: TextAlign.center,
                                ),
                                [
                                  h4([text('Mức lương')])
                                ]),
                            div(
                                styles: Styles(
                                  width: 33.33.percent,
                                  textAlign: TextAlign.center,
                                ),
                                [
                                  h4([text('Ngày hết hạn')])
                                ]),
                          ]),

                      // Dữ liệu từ Firebase
                      AsyncBuilder(
                        builder: (context) async* {
                          try {
                            var jobs =
                                await FirebaseService.instance.loadJobs();
                            for (var job in jobs) {
                              yield div(
                                  styles: Styles(
                                    display: Display.flex,
                                    width: 100.percent,
                                    padding: const Spacing.all(Unit.pixels(16)),
                                    margin: const Spacing.only(
                                        bottom: Unit.pixels(1)),
                                    border: const Border.only(
                                        bottom: BorderSide(
                                            color: Color('#e0e0e0'),
                                            width: Unit.pixels(1))),
                                    backgroundColor: Colors.white,
                                  ),
                                  [
                                    div(
                                        styles: Styles(
                                          width: 33.33.percent,
                                          textAlign: TextAlign.center,
                                        ),
                                        [
                                          job.link.isNotEmpty
                                              ? a(
                                                  href: job.link,
                                                  target: Target.blank,
                                                  styles: Styles(
                                                    color:
                                                        const Color('#1565C0'),
                                                    textDecoration:
                                                        TextDecoration.none,
                                                  ),
                                                  [text(job.title)])
                                              : p([text(job.title)])
                                        ]),
                                    div(
                                        styles: Styles(
                                          width: 33.33.percent,
                                          textAlign: TextAlign.center,
                                        ),
                                        [
                                          p([text(job.salary + ' triệu VND')])
                                        ]),
                                    div(
                                        styles: Styles(
                                          width: 33.33.percent,
                                          textAlign: TextAlign.center,
                                        ),
                                        [
                                          p([text(job.deadlineTime)])
                                        ]),
                                  ]);
                            }
                          } catch (e) {
                            yield div(
                                styles: Styles(
                                  padding: const Spacing.all(Unit.pixels(16)),
                                  color: Colors.red,
                                ),
                                [
                                  p([text('Lỗi khi tải dữ liệu: $e')])
                                ]);
                          }
                        },
                      )
                    ]),
              ]),
        ]);
  }

  Component _buildHeroSection() {
    return section(classes: 'hero', [
      div(classes: 'container', [
        h1(classes: 'hero-title', [text('Tuyển dụng')]),
        // p(classes: 'hero-subtitle', [text('Sologan')]),
        // p(classes: 'hero-description', [
        //   text(
        //       'Từ một startup nhỏ đến đối tác tin cậy của hàng trăm doanh nghiệp, '
        //       'chúng tôi không ngừng đổi mới và phát triển để mang lại giá trị tốt nhất cho khách hàng.')
        // ]),
      ]),
    ]);
  }

  @css
  static List<StyleRule> get styles => [];
}
