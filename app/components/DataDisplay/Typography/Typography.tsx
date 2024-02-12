import { forwardRef } from "react";
import { Text } from "react-native";
import { ITypographyProps } from "./Typography.interface";
import { typographySize } from "@/themes";

export const Typography = forwardRef((_props: ITypographyProps, _) => {
  const { variant, ...props } = _props;

  const $style = typographySize[variant];

  return (
    <Text {...props} style={[props.style, $style]}>
      {props.children}
    </Text>
  );
});
