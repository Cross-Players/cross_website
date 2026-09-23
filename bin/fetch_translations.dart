import 'dart:developer';
import 'dart:io';

import 'package:http/http.dart' as http;

import 'generate_translations.dart' as generate;

// Link CSV đã Publish từ Google Sheets
const csvUrl =
    'https://docs.google.com/spreadsheets/d/e/2PACX-1vSXx2-CPWb_NE8LJ55A6biCd49-9Y2RBAjP6_D-DCRwviSRqnxBM6KglN3EQxk1EmT4LrApGCuTnphX/pub?output=csv';
void main() async {
  log('🔄 Đang tải bản dịch mới từ Google Sheets...');

  try {
    final response = await http.get(Uri.parse(csvUrl));

    if (response.statusCode == 200) {
      // Đảm bảo thư mục lưu trữ file tồn tại (ví dụ: lib/locales hoặc web/assets)
      final directory = Directory('lib/locales');
      if (!await directory.exists()) {
        await directory.create(recursive: true);
      }

      // Lưu file CSV về dự án
      final file = File('lib/locales/translations.csv');
      await file.writeAsString(response.body);

      stdout.writeln('✅ Tải bản dịch thành công!');

      await generate.main();
    } else {
      stderr.writeln('❌ Lỗi tải dữ liệu: ${response.statusCode}');
      exit(1);
    }
  } catch (e) {
    stderr.writeln('❌ Có lỗi xảy ra: $e');
    exit(1);
  }
}
