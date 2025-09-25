import 'package:flutter/material.dart';

class CustomSelectableText extends StatelessWidget {
  final String text;
  final TextStyle? style;
  const CustomSelectableText({super.key, required this.text, this.style});

  @override
  Widget build(BuildContext context) {
    return SelectableText(
      text,
      style: style ?? TextStyle(fontSize: 20),
      selectionColor: Colors.blue[300],
    );
  }
}
