// animated view component

import { forwardRef } from "react";

import * as Animatable from "react-native-animatable";
import { AnimateableViewProps } from "./AnimateableView.types";
import { useCombinedRefs } from "@/utils/hooks/useCombinedRefs";

export const AnimateableView = forwardRef(
  (props: AnimateableViewProps, ref) => {
    const { children, config } = props;
    const combinedRef = useCombinedRefs(ref);
    return (
      <Animatable.View useNativeDriver {...config} ref={combinedRef}>
        {children}
      </Animatable.View>
    );
  },
);
