class Job {
  final String id;
  final String title;
  final String salary;
  final String deadlineTime;
  final String link;

  Job({
    required this.id,
    required this.title,
    required this.salary,
    required this.deadlineTime,
    required this.link,
  });

  factory Job.fromMap(Map<String, dynamic> map, String id) {
    return Job(
      id: id,
      title: map['title'] ?? '',
      salary: map['salary'] ?? '',
      deadlineTime: map['deadlineTime'] ?? '',
      link: map['link'] ?? '',
    );
  }

  Map<String, dynamic> toMap() {
    return {
      'title': title,
      'salary': salary,
      'deadlineTime': deadlineTime,
      'link': link,
    };
  }

  Job copyWith({
    String? id,
    String? title,
    String? salary,
    String? deadlineTime,
    String? link,
  }) {
    return Job(
      id: id ?? this.id,
      title: title ?? this.title,
      salary: salary ?? this.salary,
      deadlineTime: deadlineTime ?? this.deadlineTime,
      link: link ?? this.link,
    );
  }
}
