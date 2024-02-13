import { forwardRef } from "react";
import { StyleProp, Text, TextStyle } from "react-native";
import { ITypographyProps } from "./Typography.interface";
import { colorsTheme, typographySize } from "@/themes";

export const Typography = forwardRef((_props: ITypographyProps, _) => {
  const {
    variant,
    weight = "normal",
    textAlign,
    color = colorsTheme.text.high,
    ...props
  } = _props;

  const $baseStyle = typographySize[variant];

  const $style: StyleProp<TextStyle> = [
    $baseStyle,
    { fontWeight: weight, textAlign: textAlign, color: color },
  ];
  return (
    <Text {...props} style={[props.style, $style]}>
      {props.children}
    </Text>
  );
});
