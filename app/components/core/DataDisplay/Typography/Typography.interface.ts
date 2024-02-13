import { TextProps } from "react-native";
import { TypeWeightFonts, TypesFontSize } from "./Typography.types";

export interface ITypographyProps extends TextProps {
  variant: TypesFontSize;
  weight?: TypeWeightFonts;
}
