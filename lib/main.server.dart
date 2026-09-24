import 'dart:developer';

import 'package:jaspr/dom.dart';
import 'package:jaspr/server.dart';

import 'app.dart';
import 'components/seo.dart';
import 'data/firebase.dart';
import 'main.server.options.dart';

void main() async {
  Jaspr.initializeApp(
    options: defaultServerOptions,
  );

  String? careersErrorMessage;
  var careerJobs = const <Map<String, String>>[];
  try {
    final loadedJobs = await FirebaseService.instance.loadJobs();
    careerJobs = loadedJobs
        .map((job) => {
              'title': job.title,
              'salary': job.salary,
              'deadlineTime': job.deadlineTime,
              'link': job.link,
            })
        .toList();
  } catch (e) {
    careersErrorMessage = 'Failed to load job listings.';
    log('Error loading jobs: $e');
  }

  runApp(Document(
    title: siteName,
    lang: 'en',
    meta: {'theme-color': '#64B6F7'},
    styles: [
      css('html, body').styles(
        width: 100.percent,
        minHeight: 100.vh,
        padding: Padding.zero,
        margin: Margin.zero,
        fontFamily: const FontFamily.list(
            [FontFamily('Space Grotesk'), FontFamilies.andaleMono]),
      ),
      css('h1').styles(
        margin: Margin.unset,
        fontSize: 4.rem,
      ),
    ],
    head: [
      // Fonts: connect early and load one stylesheet instead of chained CSS
      // @imports, which block rendering until each one resolves.
      link(rel: 'preconnect', href: 'https://fonts.googleapis.com'),
      link(
          rel: 'preconnect',
          href: 'https://fonts.gstatic.com',
          attributes: {'crossorigin': ''}),
      link(
          rel: 'stylesheet',
          href:
              'https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;700&display=swap'),
      link(rel: 'manifest', href: 'manifest.json'),
      link(rel: 'icon', href: 'favicon.ico', attributes: {'sizes': '48x48'}),
      link(rel: 'icon', href: 'icons/cross-192.png', type: 'image/png'),
      link(rel: 'apple-touch-icon', href: 'icons/apple-touch-icon.png'),
    ],
    body: App(
      careerJobs: careerJobs,
      careersErrorMessage: careersErrorMessage,
    ),
  ));
}
