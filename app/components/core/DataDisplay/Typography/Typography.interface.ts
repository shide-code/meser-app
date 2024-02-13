import { TextProps } from "react-native";
import { TypeWeightFonts, TypesFontSize } from "./Typography.types";

export interface ITypographyProps extends TextProps {
  variant: TypesFontSize;
  weight?: TypeWeightFonts;
  textAlign?: "auto" | "left" | "right" | "center" | "justify" | undefined;
  color?: string;
}
