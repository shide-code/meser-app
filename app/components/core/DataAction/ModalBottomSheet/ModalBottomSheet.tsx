import { forwardRef, useMemo } from "react";
import Modal from "react-native-modal";
import { IModalBottomSheet } from "./ModalBottomSheet.interface";
import { Column } from "../../Container";
import { colorsTheme, spacing } from "@/themes";
import { StyleProp, ViewStyle } from "react-native";

export const ModalBottomSheet = forwardRef((_props: IModalBottomSheet, _) => {
  const {
    children,
    isVisible,
    container,
    type = "center",
    onBackdropPress,
    onBackButtonPress,
    onSwipeComplete,
    onSwipeStart,
  } = _props;

  const $typeStyleModal = useMemo(() => {
    if (type === "bottom") {
      return {
        justifyContent: "space-between",
        flexDirection: "column-reverse",
      };
    }

    return {
      justifyContent: "center",
      flexDirection: "column",
    };
  }, [type]);
  return (
    <Modal
      isVisible={isVisible}
      backdropOpacity={0.2}
      style={$typeStyleModal as StyleProp<ViewStyle>}
      onBackdropPress={onBackdropPress}
      onBackButtonPress={onBackButtonPress}
      onSwipeComplete={onSwipeComplete}
      onSwipeStart={onSwipeStart}
    >
      <Column
        borderRadius={spacing.medium}
        backgroundColor={colorsTheme.surface[1]}
        contentStyle="fixed"
        {...container}
      >
        <Column padding={spacing.small} alignment="center" contentStyle="fixed">
          <Column
            backgroundColor={colorsTheme.surface[3]}
            width={spacing.huge}
            height={spacing.tiny + spacing.micro}
            borderRadius={100}
          />
        </Column>
        <Column contentStyle="fixed" padding={spacing.large}>
          {children}
        </Column>
      </Column>
    </Modal>
  );
});
