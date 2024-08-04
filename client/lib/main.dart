import 'package:flutter/material.dart';
import 'package:heron_app/screens/map.dart';
import 'package:heron_app/constants/theme/colors.dart';
import 'package:heron_app/constants/theme/typography.dart';

void main() {
  runApp(const MainApp());
}

class MainApp extends StatefulWidget {
  const MainApp({super.key});

  @override
  State<MainApp> createState() => _MainAppState();
}

class _MainAppState extends State<MainApp> {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
        theme: ThemeData(
            fontFamily: "Manrope",
            extensions: const <ThemeExtension<dynamic>>[
              HeronColors(),
              HeronTypography(),
            ]),
        home: const Scaffold(body: MapScreen()));
  }
}
