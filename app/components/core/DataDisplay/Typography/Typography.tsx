import { forwardRef, useMemo } from "react";
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

  const mappingFontWeight = useMemo(() => {
    switch (weight) {
      case "medium":
        return "Nunito-Medium";
      case "semibold":
        return "Nunito-SemiBold";
      case "bold":
        return "Nunito-Bold";
      case "extraBold":
        return "Nunito-ExtraBold";
      case "black":
        return "Nunito-Black";
      case "light":
        return "Nunito-Light";
      default:
        return "Nunito-Regular";
    }
  }, [weight]);

  const $style: StyleProp<TextStyle> = [
    $baseStyle,
    { fontFamily: mappingFontWeight, textAlign: textAlign, color: color },
  ];
  return (
    <Text {...props} style={[props.style, $style]}>
      {props.children}
    </Text>
  );
});
