import { StyleProp, ViewStyle } from "react-native";
import { IIconProps, ITypographyProps } from "../..";

export interface IHeaderProps {
  leftIcon?: IIconProps;
  rightIcon?: IIconProps;
  text?: ITypographyProps;
  style?: StyleProp<ViewStyle>;
}
