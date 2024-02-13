import { ReactNode } from "react";
import { Animated } from "react-native";

export interface AnimatedViewProps {
  children: ReactNode;

  style?: (typeof Animated.View)["prototype"]["props"]["style"];
}
