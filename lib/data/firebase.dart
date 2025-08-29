import 'dart:io';

import 'package:cross_website/models/job_model.dart';
import 'package:jaspr/jaspr.dart';

@Import.onWeb('package:firebase_core/firebase_core.dart',
    show: [#Firebase, #FirebaseApp])
@Import.onWeb('package:cloud_firestore/cloud_firestore.dart',
    show: [#FirebaseFirestore, #FieldValue, #DocumentSnapshot])
@Import.onWeb('package:firebase_auth/firebase_auth.dart', show: [#FirebaseAuth])
@Import.onWeb('../firebase_options.dart', show: [#DefaultFirebaseOptions])
@Import.onServer('package:dart_firebase_admin/dart_firebase_admin.dart',
    show: [#FirebaseAdminApp, #Credential])
@Import.onServer('package:dart_firebase_admin/firestore.dart',
    show: [#Firestore])
import 'firebase.imports.dart';

class FirebaseService {
  static FirebaseService instance = FirebaseService();

  // === server setup ===

  late final FirebaseAdminAppOrStubbed adminApp =
      FirebaseAdminApp.initializeApp(
    'cross-website-83900',
    Credential.fromServiceAccount(File(
        'lib/configs/cross-website-83900-firebase-adminsdk-fbsvc-36a102538e.json')),
  );

  late final FirestoreOrStubbed adminFirestore = Firestore(adminApp);

  // === client logic ===

  late final Future<FirebaseAppOrStubbed> clientApp = Future(() async {
    try {
      var app = await Firebase.initializeApp(
        options: DefaultFirebaseOptions.currentPlatform,
      );

      // Không cần anonymous authentication để đọc public data
      // await FirebaseAuth.instance.signInAnonymously();

      return app;
    } catch (e) {
      print('Firebase initialization error: $e');
      rethrow;
    }
  });

  Future<List<Job>> loadJobs() async {
    try {
      if (kIsWeb) {
        // Client side implementation
        await clientApp;
        var query =
            await FirebaseFirestore.instance.collection('careers').get();
        return query.docs.map((doc) {
          return Job.fromData(doc.data());
        }).toList();
      } else {
        // Server side implementation
        var query = await adminFirestore.collection('careers').get();
        return query.docs.map((doc) {
          return Job.fromData(doc.data());
        }).toList();
      }
    } catch (e) {
      print('Error loading jobs: $e');
      // Trả về dữ liệu mock khi có lỗi
      return [];
    }
  }



  Future<Job?> getJobById(String id) async {
    if (kIsWeb) {
      await clientApp;
      var doc =
          await FirebaseFirestore.instance.collection('careers').doc(id).get();
      if (doc.exists && doc.data() != null) {
        return Job.fromData(doc.data()!);
      }
      return null;
    } else {
      var doc = await adminFirestore.doc('careers/$id').get();
      if (doc.exists) {
        return Job.fromData(doc.data()!);
      }
      return null;
    }
  }

  Stream<List<Job>> getCareersStream() async* {
    if (kIsWeb) {
      await clientApp;
      var snapshots =
          FirebaseFirestore.instance.collection('careers').snapshots();
      await for (var snapshot in snapshots) {
        yield snapshot.docs.map((doc) {
          return Job.fromData(doc.data());
        }).toList();
      }
    } else {
      // Server side không hỗ trợ stream, trả về list một lần
      yield await loadJobs();
    }
  }

  // Stream<Job?> getJobById(String id) async* {
  //   if (kIsWeb) {
  //     await clientApp;
  //     var snapshots =
  //         FirebaseFirestore.instance.collection('careers').doc(id).snapshots();
  //     await for (var doc in snapshots) {
  //       yield Job.fromData(doc.id, doc.data()!);
  //     }
  //   } else {
  //     var doc = await adminFirestore.doc('careers/$id').get();
  //     if (doc.exists) {
  //       yield Job.fromData(doc.id, doc.data()!);
  //     } else {
  //       yield null;
  //     }
  //   }
  // }

  // Future<void> toggleLikeOnJob(String id, bool liked) async {
  //   if (!kIsWeb) {
  //     throw UnimplementedError("[toggleLikeOnJob] is not implemented on the server.");
  //   }

  //   await clientApp;
  //   var JobId = FirebaseAuth.instance.currentJob!.uid;
  //   await FirebaseFirestore.instance.collection('Jobs').doc(id).update({
  //     'likes': liked ? FieldValue.arrayUnion([JobId]) : FieldValue.arrayRemove([JobId]),
  //   });
  // }

  // String getJobId() {
  //   if (!kIsWeb) {
  //     throw UnimplementedError("[getJobId] is not implemented on the server.");
  //   }

  //   return FirebaseAuth.instance.currentJob!.uid;
  // }
}
