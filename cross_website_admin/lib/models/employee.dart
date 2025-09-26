class Employee {
  String id;
  String name;
  String position;
  String description;
  String email;
  String phone;
  String status;
  String experience;
  String avatarUrl;
  String? cvUrl;

  Employee({
    required this.id,
    required this.name,
    required this.position,
    required this.description,
    required this.email,
    required this.phone,
    required this.status,
    required this.experience,
    required this.avatarUrl,
    this.cvUrl,
  });

  factory Employee.fromMap(Map<String, dynamic> map, String id) {
    return Employee(
      id: id,
      name: map['name'] ?? '',
      position: map['position'] ?? '',
      description: map['description'] ?? '',
      email: map['email'] ?? '',
      phone: map['phone'] ?? '',
      status: map['status'] ?? '',
      experience: map['experience'] ?? '',
      avatarUrl: map['avatarUrl'] ?? '',
      cvUrl: map['cvUrl'],
    );
  }

  Map<String, dynamic> toMap() {
    return {
      'name': name,
      'position': position,
      'description': description,
      'email': email,
      'phone': phone,
      'status': status,
      'experience': experience,
      'avatarUrl': avatarUrl,
      'cvUrl': cvUrl,
    };
  }
}
