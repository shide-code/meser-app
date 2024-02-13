import { forwardRef } from "react";
import { ITextFieldProps } from "./TextField.interface";
import { TextInput, TouchableOpacity } from "react-native";
import { colorsTheme } from "@/themes";
import { $baseStyle } from "./TextField.style";

export const TextField = forwardRef((_props: ITextFieldProps, _) => {
  const {
    placeholder = "Input Field",
    disabled: inputDisabled = false,
    readOnly,
    ...TextInputProps
  } = _props;

  const disabled =
    TextInputProps.editable === false ||
    inputDisabled === true ||
    readOnly === true;
  return (
    <TouchableOpacity activeOpacity={1} accessibilityState={{ disabled }}>
      <TextInput
        style={$baseStyle}
        placeholderTextColor={colorsTheme.form.placeholder}
        placeholder={placeholder}
        {...TextInputProps}
      />
    </TouchableOpacity>
  );
});
