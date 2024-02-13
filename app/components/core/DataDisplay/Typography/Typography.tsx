import { forwardRef } from "react";
import { StyleProp, Text, TextStyle } from "react-native";
import { ITypographyProps } from "./Typography.interface";
import { typographySize } from "@/themes";

export const Typography = forwardRef((_props: ITypographyProps, _) => {
  const { variant, weight = "normal", ...props } = _props;

  const $baseStyle = typographySize[variant];

  const $style: StyleProp<TextStyle> = [$baseStyle, { fontWeight: weight }];
  return (
    <Text {...props} style={[props.style, $style]}>
      {props.children}
    </Text>
  );
});
