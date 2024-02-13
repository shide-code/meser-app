// animated view component

import { FC } from "react";

import { Animated } from "react-native";
import { AnimatedViewProps } from "./AnimatedView.types";

export const AnimatedView: FC<AnimatedViewProps> = props => {
  const { children, style } = props;

  return <Animated.View style={style}>{children}</Animated.View>;
};
