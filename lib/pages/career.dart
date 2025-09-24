import 'package:cross_website/components/common/size_box_component.dart';
import 'package:cross_website/components/header.dart';
import 'package:cross_website/components/home_page/footer_block.dart';
import 'package:cross_website/constants/app_colors.dart';
import 'package:cross_website/data/firebase.dart';
import 'package:cross_website/language/language_manager.dart';
import 'package:jaspr_riverpod/jaspr_riverpod.dart';
import 'package:jaspr/jaspr.dart';

@client
class Career extends StatefulComponent {
  const Career({super.key});

  @override
  State createState() => CareerState();

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

class CareerState extends State<Career> {
  List<dynamic> jobs = [];
  bool isLoading = true;
  String? errorMessage;

  @override
  void initState() {
    super.initState();
    _loadJobs();
  }

  Future<void> _loadJobs() async {
    try {
      final loadedJobs = await FirebaseService.instance.loadJobs();
      setState(() {
        jobs = loadedJobs;
        isLoading = false;
      });
    } catch (e) {
      setState(() {
        errorMessage = 'Lỗi khi tải dữ liệu: $e';
        isLoading = false;
      });
    }
  }

  String getLanguageText(String key, String selectedLang) {
    return LanguageManager.translate(key, selectedLang);
  }

  @override
  Iterable<Component> build(BuildContext context) sync* {
    final selectedLang =
        context.watch(LanguageManager.selectedLanguageProvider);
    yield div(
        styles: Styles(
            height: 100.vh,
            maxWidth: 100.percent,
            backgroundColor: AppColors.backgroundTheme),
        [
          const Header(),
          _buildHeroSection(selectedLang),
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
                          h4([
                            text(LanguageManager.translate(
                                'career_job_title', selectedLang))
                          ])
                        ]),
                        div(classes: 'career-table-item', id: 'salary', [
                          h4([
                            text(LanguageManager.translate(
                                'career_salary', selectedLang))
                          ])
                        ]),
                        div(classes: 'career-table-item', id: 'deadline', [
                          h4([
                            text(LanguageManager.translate(
                                'career_expired_date', selectedLang))
                          ])
                        ]),
                      ]),

                      // Dữ liệu từ Firebase
                      if (isLoading)
                        div(
                            styles: Styles(
                              padding: const Spacing.all(Unit.pixels(16)),
                              textAlign: TextAlign.center,
                            ),
                            [
                              p([text('Loading...')])
                            ]),

                      if (errorMessage != null)
                        div(
                            styles: Styles(
                              padding: const Spacing.all(Unit.pixels(16)),
                              color: Colors.red,
                              textAlign: TextAlign.center,
                            ),
                            [
                              p([text(errorMessage!)])
                            ]),

                      if (!isLoading && errorMessage == null)
                        ...jobs.map((job) => div(
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
                                                  color: const Color('#1565C0'),
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
                                ])),
                    ]),
              ]),
          // Phần hướng dẫn nộp CV
          _buildApplicationGuide(selectedLang),
          FooterBlock()
        ]);
  }

  Component _buildHeroSection(String selectedLang) {
    return section(classes: 'hero', [
      div(classes: 'container', [
        h1(
            classes: 'hero-title',
            [text(LanguageManager.translate('career_title', selectedLang))]),
      ]),
    ]);
  }

  Component _buildApplicationGuide(String selectedLang) {
    return section(
        styles: Styles(
          padding: const Spacing.symmetric(vertical: Unit.pixels(60)),
          backgroundColor: AppColors.backgroundTheme,
        ),
        [
          div(
              styles: Styles(
                maxWidth: 800.px,
                padding: const Spacing.symmetric(horizontal: Unit.pixels(20)),
                margin: const Spacing.symmetric(horizontal: Unit.auto),
                textAlign: TextAlign.center,
              ),
              [
                // Tiêu đề
                h2(
                    styles: Styles(
                      margin: const Spacing.only(bottom: Unit.pixels(30)),
                      color: AppColors.textBlack,
                      fontSize: 32.px,
                      fontWeight: FontWeight.bold,
                    ),
                    [
                      text(LanguageManager.translate(
                          'career_apply_title', selectedLang))
                    ]),

                // Card chứa thông tin
                div(
                    styles: Styles(
                      padding: const Spacing.all(Unit.pixels(40)),
                      radius: BorderRadius.circular(12.px),
                      backgroundColor: Colors.white,
                      raw: {'box-shadow': '0 4px 6px rgba(0, 0, 0, 0.1)'},
                    ),
                    [
                      // Email
                      div(
                          styles: Styles(
                            margin: const Spacing.only(bottom: Unit.pixels(20)),
                          ),
                          [
                            p(
                                styles: Styles(
                                  margin: const Spacing.only(
                                      bottom: Unit.pixels(8)),
                                  color: Colors.black,
                                  fontSize: 18.px,
                                ),
                                [
                                  text(LanguageManager.translate(
                                      'career_how_to_apply', selectedLang))
                                ]),
                            a(
                                href: 'mailto:crosstechedu@gmail.com',
                                styles: Styles(
                                  color: const Color('#1565C0'),
                                  fontSize: 20.px,
                                  fontWeight: FontWeight.bold,
                                  textDecoration: TextDecoration.none,
                                ),
                                [text('crosstechedu@gmail.com')])
                          ]),

                      // Cú pháp
                      div(
                          styles: Styles(
                            padding: const Spacing.all(Unit.pixels(20)),
                            margin: const Spacing.only(bottom: Unit.pixels(20)),
                            radius: BorderRadius.circular(8.px),
                            backgroundColor: const Color('#f1f3f4'),
                          ),
                          [
                            p(
                                styles: Styles(
                                  margin: const Spacing.only(
                                      bottom: Unit.pixels(8)),
                                  color: Colors.black,
                                  fontSize: 16.px,
                                  fontWeight: FontWeight.w600,
                                ),
                                [
                                  text(LanguageManager.translate(
                                      'career_email', selectedLang))
                                ]),
                            p(
                                styles: Styles(
                                  color: const Color('#d73027'),
                                  fontSize: 18.px,
                                  fontWeight: FontWeight.bold,
                                ),
                                [
                                  text(LanguageManager.translate(
                                      'career_format', selectedLang))
                                ])
                          ]),

                      // Liên hệ
                      div([
                        p(
                            styles: Styles(
                              margin:
                                  const Spacing.only(bottom: Unit.pixels(8)),
                              color: Colors.black,
                              fontSize: 18.px,
                            ),
                            [
                              text(LanguageManager.translate(
                                  'career_contact', selectedLang))
                            ]),
                        a(
                            href: 'tel:0338305895',
                            styles: Styles(
                              color: const Color('#1565C0'),
                              fontSize: 20.px,
                              fontWeight: FontWeight.bold,
                              textDecoration: TextDecoration.none,
                            ),
                            [text('0338305895 - Mr. Quyen Anh')])
                      ])
                    ])
              ])
        ]);
  }
}
