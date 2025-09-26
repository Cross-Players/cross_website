import 'package:cloud_firestore/cloud_firestore.dart';
import '../models/job.dart';

class JobService {
  static final FirebaseFirestore _firestore = FirebaseFirestore.instance;
  static const String _collection = 'careers';

  // Lấy danh sách tất cả jobs
  static Stream<List<Job>> getJobsStream() {
    return _firestore
        .collection(_collection)
        .snapshots()
        .map(
          (snapshot) => snapshot.docs
              .map((doc) => Job.fromMap(doc.data(), doc.id))
              .toList(),
        );
  }

  // Lấy danh sách jobs một lần
  static Future<List<Job>> getJobs() async {
    try {
      final snapshot = await _firestore.collection(_collection).get();
      return snapshot.docs
          .map((doc) => Job.fromMap(doc.data(), doc.id))
          .toList();
    } catch (e) {
      throw Exception('Failed to fetch jobs: $e');
    }
  }

  // Thêm job mới
  static Future<void> addJob(Job job) async {
    try {
      await _firestore.collection(_collection).add(job.toMap());
    } catch (e) {
      throw Exception('Failed to add job: $e');
    }
  }

  // Cập nhật job
  static Future<void> updateJob(Job job) async {
    try {
      await _firestore.collection(_collection).doc(job.id).update(job.toMap());
    } catch (e) {
      throw Exception('Failed to update job: $e');
    }
  }

  // Xóa job
  static Future<void> deleteJob(String jobId) async {
    try {
      await _firestore.collection(_collection).doc(jobId).delete();
    } catch (e) {
      throw Exception('Failed to delete job: $e');
    }
  }

  // Lấy job theo ID
  static Future<Job?> getJob(String jobId) async {
    try {
      final doc = await _firestore.collection(_collection).doc(jobId).get();
      if (doc.exists) {
        return Job.fromMap(doc.data()!, doc.id);
      }
      return null;
    } catch (e) {
      throw Exception('Failed to get job: $e');
    }
  }
}
