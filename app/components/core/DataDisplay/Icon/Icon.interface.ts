import { TypeIcons } from "./Icon.types";

export interface IIconProps {
  name: TypeIcons;
  className?: string;
  width?: string | number;
  height?: string | number;
  color?: string;
  onPress?: () => void;
}
