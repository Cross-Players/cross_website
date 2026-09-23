import 'dart:io';

// Regenerates lib/locales/translations_data.dart from lib/locales/translations.csv
// so translations ship as a compiled Dart constant instead of being fetched over
// HTTP at runtime. Run after `dart run bin/fetch_translations.dart` updates the CSV.
Future<void> main() async {
  final csvFile = File('lib/locales/translations.csv');
  if (!await csvFile.exists()) {
    stderr.writeln('❌ lib/locales/translations.csv not found');
    exit(1);
  }

  final csv = await csvFile.readAsString();
  if (csv.contains("'''")) {
    stderr.writeln(
        "❌ CSV contains a ''' sequence, which breaks the generated raw string literal");
    exit(1);
  }

  final buffer = StringBuffer()
    ..writeln('// GENERATED FILE, DO NOT EDIT BY HAND.')
    ..writeln('// Run `dart run bin/generate_translations.dart` to regenerate,')
    ..writeln('// after refreshing lib/locales/translations.csv.')
    ..writeln()
    ..writeln('const String translationsCsv = r\'\'\'')
    ..write(csv)
    ..writeln('\'\'\';');

  final outFile = File('lib/locales/translations_data.dart');
  await outFile.writeAsString(buffer.toString());
  print('✅ Generated lib/locales/translations_data.dart');
}
