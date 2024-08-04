import 'package:flutter/material.dart';
import 'package:heron_app/constants/theme/colors.dart';
import 'package:heron_app/constants/theme/typography.dart';

class MapScreen extends StatelessWidget {
  const MapScreen({super.key});

  @override
  Widget build(BuildContext context) {
    final colors = getColors(context);
    final typography = getTypography(context);

    return Container(
      alignment: Alignment.center,
      child: Text("Filter",
          style: typography.h1.copyWith(color: colors.label.red)),
    );
  }
}
