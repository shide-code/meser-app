import { TypeButtonRounded } from "../Button.type";
import { useMemo } from "react";

export const useButtonStyle = (rounded: TypeButtonRounded) => {
  const $borderRadius = useMemo(() => {
    if (rounded === "full") {
      return 100;
    }

    if (rounded === "lg") {
      return 8;
    }

    if (rounded === "sm") {
      return 2;
    }

    if (rounded === "md") {
      return 6;
    }

    return 0;
  }, [rounded]);

  return {
    $styleBorderRadius: {
      borderRadius: $borderRadius,
    },
  };
};
