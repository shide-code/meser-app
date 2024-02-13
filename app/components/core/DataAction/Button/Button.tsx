import { forwardRef } from "react";
import { IButtonProps } from "./Button.interface";
import {
  Pressable,
  PressableStateCallbackType,
  StyleProp,
  Text,
  TextStyle,
  ViewStyle,
} from "react-native";
import { $baseStyleButton, $baseTextStyle } from "./Button.style";
import { useButtonStyle } from "./hooks";
import { colorsTheme } from "@/themes";

export const Button = forwardRef((_props: IButtonProps, _) => {
  const {
    theme = "accent",
    typeButton = "filled",
    rounded = "full",
    children,
    disabled,
    ...props
  } = _props;

  const { $styleBorderRadius } = useButtonStyle(rounded);
  function $viewStyle({ pressed }: PressableStateCallbackType) {
    return [
      $baseStyleButton,
      {
        backgroundColor:
          typeButton === "filled"
            ? disabled
              ? colorsTheme.button.disable
              : colorsTheme[theme].normal
            : "transparent",
      },
      pressed &&
        !disabled && {
          backgroundColor:
            typeButton === "filled" ? colorsTheme[theme].hover : "transparent",
        },
      $styleBorderRadius,
      {
        borderWidth: typeButton === "outlined" ? 2 : 0,
        borderColor:
          typeButton === "outlined"
            ? disabled
              ? colorsTheme.button.disable
              : colorsTheme[theme].normal
            : "transparent",
      },
      pressed &&
        !disabled && {
          borderColor:
            typeButton === "outlined"
              ? colorsTheme[theme].hover
              : "transparent",
        },
    ];
  }

  function $textStyle({ pressed }: PressableStateCallbackType) {
    return [
      $baseTextStyle,
      {
        color:
          typeButton !== "filled"
            ? disabled
              ? colorsTheme.button.disable
              : colorsTheme[theme].normal
            : colorsTheme.surface[1],
      },

      pressed &&
        !disabled && {
          color:
            typeButton === "filled"
              ? colorsTheme.surface[2]
              : colorsTheme[theme].hover,
        },
    ];
  }

  return (
    <Pressable
      style={$viewStyle as StyleProp<ViewStyle>}
      accessibilityRole="button"
      {...props}
    >
      {state => (
        <Text style={$textStyle(state) as StyleProp<TextStyle>}>
          {children}
        </Text>
      )}
    </Pressable>
  );
});
