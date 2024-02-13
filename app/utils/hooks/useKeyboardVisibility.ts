import { useEffect, useState } from "react";
import { Keyboard } from "react-native";

export function useKeyboardVisibility() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const keyboardShowListener = Keyboard.addListener("keyboardWillShow", () =>
      setVisible(true),
    );
    const keyboardHideListener = Keyboard.addListener("keyboardWillHide", () =>
      setVisible(false),
    );

    return () => {
      keyboardShowListener.remove();
      keyboardHideListener.remove();
    };
  }, []);

  return {
    visible,
  };
}
