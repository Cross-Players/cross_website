class Job {
  final String title;
  final String salary;
  final String deadlineTime;
  final String link;

  Job({
    required this.title,
    required this.salary,
    required this.deadlineTime,
    required this.link,
  });

  factory Job.fromData(Map<String, dynamic> data) {
    return Job(
      title: data['title'] ?? '',
      salary: data['salary'] ?? '',
      deadlineTime: data['deadlineTime'] ?? '',
      link: data['link'] ?? '',
    );
  }
}
