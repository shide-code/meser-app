import { PressableProps } from "react-native";
import { TypeButton, TypeButtonRounded, TypeButtonTheme } from "./Button.type";

export interface IButtonProps extends PressableProps {
  theme?: TypeButtonTheme;
  typeButton?: TypeButton;
  rounded?: TypeButtonRounded;
  children?: React.ReactNode;
}
