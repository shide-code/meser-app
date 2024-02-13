import { colorsTheme, spacing } from "@/themes";
import { StyleProp, TextStyle, ViewStyle } from "react-native";

export const $baseStyle: StyleProp<ViewStyle> = {
  paddingVertical: 12,
  paddingRight: 12,
  paddingLeft: 60,
  height: 44,
  backgroundColor: colorsTheme.accent.surface,
  borderRadius: spacing.small,
};

export const $textStyle: StyleProp<TextStyle> = {
  fontSize: 14,
  fontWeight: "500",
};
