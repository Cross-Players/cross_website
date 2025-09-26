import 'package:url_launcher/url_launcher.dart';

class AppUtils {
  Future<void> appLaunchUrl(String url) async {
    try {
      final Uri uri = Uri.parse(url);
      if (!await launchUrl(uri, mode: LaunchMode.externalApplication)) {}
    } catch (e) {}
  }
}
