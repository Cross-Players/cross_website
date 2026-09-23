import 'dart:developer';

import 'package:jaspr/dom.dart';
import 'package:jaspr/server.dart';

import 'app.dart';
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
    title: 'Cross Website',
    styles: [
      css.import(
          "https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;700&display=swap"),
      css.import('https://fonts.googleapis.com/css?family=Roboto'),
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
      link(rel: 'manifest', href: 'manifest.json'),
      link(href: 'images/x_cross.png', rel: 'icon', type: 'image/png'),
      script(
          src:
              "https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js"),
      script(
          src:
              "https://unpkg.com/@dotlottie/player-component@2.7.12/dist/dotlottie-player.mjs",
          attributes: {'type': 'module'}),
    ],
    body: App(
      careerJobs: careerJobs,
      careersErrorMessage: careersErrorMessage,
    ),
  ));
}
