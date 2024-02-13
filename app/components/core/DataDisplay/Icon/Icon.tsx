import * as DefaultIcon from "iconoir-react-native";
import { IIconProps } from "./Icon.interface";
import { colorsTheme } from "@/themes";
import { Pressable } from "react-native";

export const Icon = (_props: IIconProps) => {
  const {
    name,
    color = colorsTheme.text.high,
    width = 24,
    height = 24,
    onPress,
    ...props
  } = _props;
  const Component = DefaultIcon[name];
  return (
    <Pressable onPress={onPress}>
      <Component {...props} color={color} width={width} height={height} />
    </Pressable>
  );
};
