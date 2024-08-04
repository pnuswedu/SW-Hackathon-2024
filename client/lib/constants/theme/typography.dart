import "package:flutter/material.dart";

class HeronFontWeight {
  static const FontWeight regular = FontWeight.w400;
  static const FontWeight medium = FontWeight.w500;
  static const FontWeight semibold = FontWeight.w600;
  static const FontWeight bold = FontWeight.w700;
  static const FontWeight extrabold = FontWeight.w800;
}

HeronTypography getTypography(BuildContext context) {
  final typography = Theme.of(context).extension<HeronTypography>();

  if (typography == null) {
    throw FlutterError(
      "HeronTypography is not found in the current theme. Make sure to add it to the theme extensions.",
    );
  }

  return typography;
}

class HeronTypography extends ThemeExtension<HeronTypography> {
  const HeronTypography();

  TextStyle get h1 => const _HeronTextStyle(
      fontSize: 32, height: 40, fontWeight: HeronFontWeight.bold);
  TextStyle get h2 => const _HeronTextStyle(
      fontSize: 26, height: 32, fontWeight: HeronFontWeight.bold);
  TextStyle get h3 => const _HeronTextStyle(
      fontSize: 20, height: 26, fontWeight: HeronFontWeight.bold);
  TextStyle get h4 => const _HeronTextStyle(
      fontSize: 18, height: 22, fontWeight: HeronFontWeight.bold);

  TextStyle get body1 => const _HeronTextStyle(fontSize: 16, height: 24);
  TextStyle get body2 => const _HeronTextStyle(fontSize: 14, height: 20);

  TextStyle get label => const _HeronTextStyle(fontSize: 12, height: 16);
  TextStyle get button => const _HeronTextStyle(fontSize: 14, height: 20);

  @override
  HeronTypography copyWith() {
    return const HeronTypography();
  }

  @override
  HeronTypography lerp(HeronTypography? other, double t) {
    if (other is! HeronTypography) {
      return this;
    }
    return const HeronTypography();
  }
}

class _HeronTextStyle extends TextStyle {
  const _HeronTextStyle(
      {required double fontSize, required double height, super.fontWeight})
      : super(
          fontSize: fontSize,
          height: height / fontSize,
        );
}
