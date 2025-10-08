import 'package:cross_website/components/common/size_box_component.dart';
import 'package:jaspr/jaspr.dart';

@client
class GPLXPolicy extends StatefulComponent {
  const GPLXPolicy({super.key});
  @css
  static List<StyleRule> get styles => [
        css('&', [
          css('h2').styles(
            color: Color('#1a73e8'),
            fontSize: 2.rem,
            fontWeight: FontWeight.w700,
          ),
        ]),
      ];
  @override
  State<StatefulComponent> createState() => _GPLXPolicyState();
}

class _GPLXPolicyState extends State<GPLXPolicy> {
  bool _isVietnamese = true;

  void _toggleLanguage() {
    setState(() {
      _isVietnamese = !_isVietnamese;
    });
  }

  @override
  Iterable<Component> build(BuildContext context) sync* {
    yield div(
      styles: Styles(maxWidth: 100.percent),
      [
        div(
            styles: Styles(
              display: Display.flex,
              width: 100.percent,
              padding: Spacing.only(right: 16.px),
              margin: Spacing.only(top: 16.px),
              justifyContent: JustifyContent.end,
            ),
            [
              button(events: {
                'click': (_) => _toggleLanguage(),
              }, attributes: {
                'style':
                    'padding:8px; margin-bottom:16px; cursor:pointer; border-radius:6px; border:1px solid #ccc; background:#f7f7f7;'
              }, [
                text(_isVietnamese ? 'English' : 'Tiếng Việt')
              ]),
            ]),
        if (_isVietnamese) _PrivacyPolicyVN() else _PrivacyPolicyEN(),
      ],
    );
  }
}

class _PrivacyPolicyVN extends StatelessComponent {
  Iterable<Component> _sectionVN(
    String title, {
    List<String>? bulletPoints,
    String? subTitle,
  }) sync* {
    yield div([
      h3(attributes: {
        'style': 'font-size:1.2rem; margin-top:24px; margin-bottom:8px;'
      }, [
        text(title)
      ]),
      SizeBoxComponent(height: 10),
      if (bulletPoints != null && bulletPoints.isNotEmpty) ...[
        ul(
            styles: Styles(margin: Spacing.only(left: 20.px, bottom: 6.px)),
            bulletPoints
                .map((point) => li(attributes: {
                      'style': 'font-size:1rem; color:#333; margin-bottom:4px;'
                    }, [
                      text(point)
                    ]))
                .toList()),
        SizeBoxComponent(height: 10),
      ],
      if (subTitle != null && subTitle.isNotEmpty)
        p(attributes: {
          'style': 'font-size:1rem; color:#333; margin-bottom:8px;'
        }, [
          text(subTitle)
        ]),
    ]);
  }

  @override
  Iterable<Component> build(BuildContext context) sync* {
    yield div(
        styles: Styles(
            height: 100.vh, maxWidth: 100.percent, padding: Spacing.all(20.px)),
        [
          h2([
            text('Chính Sách Quyền Riêng Tư'),
          ]),
          SizeBoxComponent(height: 15),
          h2([
            text('Ứng dụng: Học Giấy Phép Lái Xe Vạn Xuân'),
          ]),
          SizeBoxComponent(height: 15),
          p([
            text('Ứng dụng'),
            strong([text(' Học Giấy Phép Lái Xe Vạn Xuân ')]),
            text(
                'được phát triển nhằm hỗ trợ người dùng ôn luyện và kiểm tra kiến thức cho kỳ thi giấy phép lái xe tại Việt Nam. Chúng tôi tôn trọng và cam kết bảo vệ quyền riêng tư của bạn.')
          ]),
          ..._sectionVN('1. Thông tin thu thập',
              bulletPoints: [
                'Dữ liệu thiết bị (phiên bản hệ điều hành, ngôn ngữ, loại thiết bị) để cải thiện trải nghiệm.',
                'Thông tin sử dụng ứng dụng (số lần làm bài, thời gian học, kết quả quiz) nhằm phân tích và tối ưu nội dung.'
              ],
              subTitle:
                  'Ứng dụng không yêu cầu, lưu trữ hoặc chia sẻ thông tin cá nhân nhạy cảm như họ tên, số điện thoại, email hoặc vị trí trừ khi bạn chủ động cung cấp.'),
          ..._sectionVN('2. Cách sử dụng thông tin',
              bulletPoints: [
                'Nâng cao chất lượng câu hỏi và giao diện.',
                'Cải thiện tính năng ôn tập và đề xuất nội dung phù hợp.'
              ],
              subTitle:
                  'Chúng tôi không bán, chia sẻ hay tiết lộ thông tin người dùng cho bên thứ ba.'),
          ..._sectionVN('3. Quyền của người dùng', bulletPoints: [
            'Bạn có thể xóa dữ liệu học tập trong ứng dụng bất cứ lúc nào.',
            'Bạn có quyền ngừng sử dụng ứng dụng nếu không đồng ý với chính sách này.'
          ]),
          ..._sectionVN('4. Thay đổi chính sách',
              subTitle:
                  'Chính sách này có thể được cập nhật định kỳ. Mọi thay đổi sẽ được thông báo trong ứng dụng.'),
          ..._sectionVN('Liên hệ hỗ trợ', subTitle: 'crosstechedu@gmail.com'),
          div([
            p(attributes: {
              'style':
                  'color:#aaa; font-size:14px; text-align:center; margin-top:32px;'
            }, [
              text('© Van Xuan Quiz. All rights reserved.')
            ])
          ]),
        ]);
  }
}

class _PrivacyPolicyEN extends StatelessComponent {
  Iterable<Component> _sectionEN(
    String title, {
    List<String>? bulletPoints,
    String? subTitle,
  }) sync* {
    yield div([
      h3(attributes: {
        'style': 'font-size:1.2rem; margin-top:24px; margin-bottom:8px;'
      }, [
        text(title)
      ]),
      SizeBoxComponent(height: 10),
      if (bulletPoints != null && bulletPoints.isNotEmpty) ...[
        ul(
            styles: Styles(margin: Spacing.only(left: 20.px, bottom: 6.px)),
            bulletPoints
                .map((point) => li(attributes: {
                      'style': 'font-size:1rem; color:#333; margin-bottom:4px;'
                    }, [
                      text(point)
                    ]))
                .toList()),
        SizeBoxComponent(height: 10),
      ],
      if (subTitle != null && subTitle.isNotEmpty)
        p(attributes: {
          'style': 'font-size:1rem; color:#333; margin-bottom:8px;'
        }, [
          text(subTitle)
        ]),
    ]);
  }

  @override
  Iterable<Component> build(BuildContext context) sync* {
    yield div(
        styles: Styles(
            height: 100.vh, maxWidth: 100.percent, padding: Spacing.all(20.px)),
        [
          h2([
            text('Privacy Policy'),
          ]),
          SizeBoxComponent(height: 15),
          h2([
            text('App: Van Xuan Driving License Quiz'),
          ]),
          SizeBoxComponent(height: 15),
          p([
            text('The '),
            strong([text(' Van Xuan Driving License Quiz ')]),
            text(
                'app is developed to help users practice and test their knowledge for the driving license exam in Vietnam. We respect and are committed to protecting your privacy.')
          ]),
          ..._sectionEN('1. Information We Collect',
              bulletPoints: [
                'Device data (OS version, language, device type) to improve user experience.',
                'App usage information (number of quizzes taken, study time, results) to analyze and enhance content.'
              ],
              subTitle:
                  'The app does not request, store, or share sensitive personal data such as name, phone number, email, or location unless voluntarily provided by the user.'),
          ..._sectionEN('2. How We Use the Information',
              bulletPoints: [
                'Improve question quality, UI design, and app performance.',
                'Enhance learning features and provide relevant quiz recommendations.'
              ],
              subTitle:
                  'We do not sell, share, or disclose any user data to third parties.'),
          ..._sectionEN('3. User Rights', bulletPoints: [
            'Users may delete their learning data within the app at any time.',
            'Users may stop using the app if they disagree with this policy.'
          ]),
          ..._sectionEN('4. Changes to This Policy',
              subTitle:
                  'This privacy policy may be updated periodically to reflect app improvements or legal changes. The latest version will be available within the app.'),
          ..._sectionEN('Contact Us', subTitle: 'crosstechedu@gmail.com'),
          div([
            p(attributes: {
              'style':
                  'color:#aaa; font-size:14px; text-align:center; margin-top:32px;'
            }, [
              text('© Van Xuan Quiz. All rights reserved.')
            ])
          ]),
        ]);
  }
}
