import { forwardRef, useMemo } from "react";
import { IPhoneNumberFieldProps } from "./PhoneNumberField.interface";
import { TouchableOpacity } from "react-native";
import { $baseStyle, $textStyle } from "./PhoneNumberField.style";
import { colorsTheme } from "@/themes";
import { Box, Column, Typography } from "../../";
import TextInputMask from "react-native-text-input-mask";

export const PhoneNumberField = forwardRef(
  (_props: IPhoneNumberFieldProps, _) => {
    const { ...props } = _props;
    const $styleInput = useMemo(() => {
      if (props.value || props.value !== "") {
        return [
          $baseStyle,
          $textStyle,
          {
            backgroundColor: colorsTheme.surface[2],
            color: colorsTheme.form.text,
          },
        ];
      }

      return [$baseStyle, $textStyle];
    }, [props.value]);

    const $leftStyleInput = useMemo(() => {
      if (props.value || props.value !== "") {
        return {
          backgroundColor: colorsTheme.surface[3],
        };
      }

      return {
        backgroundColor: colorsTheme.accent.border,
      };
    }, [props.value]);
    return (
      <TouchableOpacity>
        <TextInputMask
          {...props}
          style={$styleInput}
          placeholderTextColor={colorsTheme.form.placeholder}
          mask={"[000]-[00009]-[00000]"}
          keyboardType="number-pad"
          returnKeyType="done"
        />
        <Box>
          <Column
            alignment="center"
            padding={12}
            borderRadius={{ tl: 12, bl: 12 }}
            backgroundColor={$leftStyleInput.backgroundColor}
            contentStyle="fitContent"
          >
            <Typography variant="body1" weight="bold">
              +62
            </Typography>
          </Column>
        </Box>
      </TouchableOpacity>
    );
  },
);
