import 'package:cross_website/models/job_model.dart';
import 'package:jaspr/jaspr.dart';

@Import.onServer('dart:io', show: [#File])
@Import.onServer('package:dart_firebase_admin/dart_firebase_admin.dart',
    show: [#FirebaseAdminApp, #Credential])
@Import.onServer('package:dart_firebase_admin/firestore.dart',
    show: [#Firestore])
import 'firebase.imports.dart';

/// Server-only: reads job listings via `dart_firebase_admin`. Never call
/// from `@client` code — `cloud_firestore`/`firebase_auth`/`firebase_core`
/// are Flutter-only packages that cannot compile for a Jaspr web client.
class FirebaseService {
  static FirebaseService instance = FirebaseService();

  late final FirebaseAdminAppOrStubbed adminApp =
      FirebaseAdminApp.initializeApp(
    'cross-website-83900',
    Credential.fromServiceAccount(File(
        'lib/.env/cross-website-83900-firebase-adminsdk-fbsvc-36a102538e.json')),
  );

  late final FirestoreOrStubbed adminFirestore = Firestore(adminApp);

  Future<List<Job>> loadJobs() async {
    var query = await adminFirestore.collection('careers').get();
    return query.docs.map((doc) {
      return Job.fromData(doc.data());
    }).toList();
  }

  Future<Job?> getJobById(String id) async {
    var doc = await adminFirestore.doc('careers/$id').get();
    if (doc.exists) {
      return Job.fromData(doc.data()!);
    }
    return null;
  }

  Stream<List<Job>> getCareersStream() async* {
    yield await loadJobs();
  }
}
