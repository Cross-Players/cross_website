// dart format off
// ignore_for_file: type=lint

// GENERATED FILE, DO NOT MODIFY
// Generated with jaspr_builder

import 'package:jaspr/client.dart';

import 'package:cross_website/app.dart' deferred as _app;

/// Default [ClientOptions] for use with your Jaspr project.
///
/// Use this to initialize Jaspr **before** calling [runApp].
///
/// Example:
/// ```dart
/// import 'main.client.options.dart';
///
/// void main() {
///   Jaspr.initializeApp(
///     options: defaultClientOptions,
///   );
///
///   runApp(...);
/// }
/// ```
ClientOptions get defaultClientOptions => ClientOptions(
  clients: {
    'app': ClientLoader(
      (p) => _app.App(
        careerJobs: (p['careerJobs'] as List<Object?>)
            .map((i) => (i as Map<String, Object?>).cast<String, String>())
            .toList(),
        careersErrorMessage: p['careersErrorMessage'] as String?,
      ),
      loader: _app.loadLibrary,
    ),
  },
);
