import 'package:cloud_firestore/cloud_firestore.dart';

import '../models/employee.dart';

class EmployeeService {
  static final FirebaseFirestore _firestore = FirebaseFirestore.instance;
  static const String _collection = 'employees';

  // Lấy danh sách tất cả employees
  static Stream<List<Employee>> getEmployeesStream() {
    return _firestore
        .collection(_collection)
        .snapshots()
        .map(
          (snapshot) => snapshot.docs
              .map((doc) => Employee.fromMap(doc.data(), doc.id))
              .toList(),
        );
  }

  // Lấy danh sách employees một lần
  static Future<List<Employee>> getEmployees() async {
    try {
      final snapshot = await _firestore.collection(_collection).get();
      return snapshot.docs
          .map((doc) => Employee.fromMap(doc.data(), doc.id))
          .toList();
    } catch (e) {
      throw Exception('Failed to fetch employees: $e');
    }
  }

  // Thêm employee mới
  static Future<void> addEmployee(Employee employee) async {
    try {
      await _firestore.collection(_collection).add(employee.toMap());
    } catch (e) {
      throw Exception('Failed to add employee: $e');
    }
  }

  // Cập nhật employee
  static Future<void> updateEmployee(Employee employee) async {
    try {
      await _firestore
          .collection(_collection)
          .doc(employee.id)
          .update(employee.toMap());
    } catch (e) {
      throw Exception('Failed to update employee: $e');
    }
  }

  // Xóa employee
  static Future<void> deleteEmployee(String employeeId) async {
    try {
      await _firestore.collection(_collection).doc(employeeId).delete();
    } catch (e) {
      throw Exception('Failed to delete employee: $e');
    }
  }

  // Lấy employee theo ID
  static Future<Employee?> getEmployee(String employeeId) async {
    try {
      final doc = await _firestore
          .collection(_collection)
          .doc(employeeId)
          .get();
      if (doc.exists) {
        return Employee.fromMap(doc.data()!, doc.id);
      }
      return null;
    } catch (e) {
      throw Exception('Failed to get employee: $e');
    }
  }
}
