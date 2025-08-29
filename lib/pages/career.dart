import 'package:cross_website/components/common/size_box_component.dart';
import 'package:cross_website/components/header.dart';
import 'package:cross_website/components/home_page/footer_block.dart';
import 'package:cross_website/constants/app_colors.dart';
import 'package:cross_website/data/firebase.dart';
import 'package:jaspr/server.dart';

@client
class Career extends StatefulComponent {
  const Career({super.key});

  @override
  State createState() => CareerState();
}

class CareerState extends State<Career> {
  @override
  Iterable<Component> build(BuildContext context) sync* {
    yield div(
        styles: Styles(
            height: 100.vh,
            maxWidth: 100.percent,
            backgroundColor: AppColors.backgroundTheme),
        [
          const Header(),
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
                      div(classes: 'career-table-header', [
                        div(classes: 'career-table-item', [
                          h4([text('Tuyển dụng')])
                        ]),
                        div(classes: 'career-table-item', id: 'salary', [
                          h4([text('Mức lương')])
                        ]),
                        div(classes: 'career-table-item', id: 'deadline', [
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
                                    backgroundColor: AppColors.backgroundTheme,
                                  ),
                                  [
                                    div(
                                        classes: 'career-table-item',
                                        styles: Styles(),
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
                                        classes: 'career-table-item',
                                        id: 'salary',
                                        [
                                          p([text(job.salary + ' triệu VND')])
                                        ]),
                                    div(
                                        classes: 'career-table-item',
                                        id: 'deadline',
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
          SizeBoxComponent(height: 100),
          FooterBlock()
        ]);
  }

  Component _buildHeroSection() {
    return section(classes: 'hero', [
      div(classes: 'container', [
        h1(classes: 'hero-title', [text('Tuyển dụng')]),
      ]),
    ]);
  }

  @css
  static List<StyleRule> get styles => [
        css('.career-table-header', [
          css('&').styles(
            display: Display.flex,
            width: 100.percent,
            padding: const Spacing.all(Unit.pixels(16)),
            margin: const Spacing.only(bottom: Unit.pixels(2)),
            raw: {'background': 'var(--gradientBackground)'},
          ),
        ]),
        css('.career-table-item', [
          css('&').styles(
            width: 33.33.percent,
            textAlign: TextAlign.center,
          )
        ]),
        css.media(MediaQuery.screen(maxWidth: 600.px), [
          css('.career-table-item', [
            css('&').styles(
              width: 50.percent,
              textAlign: TextAlign.center,
            )
          ]),
          css('#deadline.career-table-item', [
            css('&').styles(
              display: Display.none,
              visibility: Visibility.hidden,
            )
          ])
        ]),
        css.media(MediaQuery.screen(maxWidth: 400.px), [
          css('.career-table-item', [
            css('&').styles(
              width: 100.percent,
              textAlign: TextAlign.center,
            )
          ]),
          css('#salary.career-table-item', [
            css('&').styles(
              display: Display.none,
              visibility: Visibility.hidden,
            )
          ])
        ])
      ];
}
