import { TextProps } from "react-native";
import { TypesFontSize } from "./Typography.types";

export interface ITypographyProps extends TextProps {
  variant: TypesFontSize;
}
