import { colorsTheme, spacing } from "@/themes";
import { StyleProp, ViewStyle } from "react-native";

export const $baseStyle: StyleProp<ViewStyle> = {
  padding: 12,
  backgroundColor: colorsTheme.surface[2],
  borderRadius: spacing.small,
};
