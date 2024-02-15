import { spacing, typographySize } from "@/themes";
import { StyleProp, TextStyle, ViewStyle } from "react-native";

export const $baseStyleButton: StyleProp<ViewStyle> = {
  paddingVertical: spacing.small,
  paddingHorizontal: spacing.large,
  flexDirection: "row",
  justifyContent: "center",
  alignItems: "center",
};

export const $baseTextStyle: StyleProp<TextStyle> = {
  fontSize: typographySize.body1.fontSize,
  fontFamily: "Nunito-Bold",
};
