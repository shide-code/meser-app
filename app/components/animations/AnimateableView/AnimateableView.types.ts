import { ReactNode } from "react";
import * as Animatable from "react-native-animatable";

type DefaultAnimatableProps = (typeof Animatable.View)["prototype"]["props"];

export interface AnimateableViewProps {
  children: ReactNode;

  config?: DefaultAnimatableProps;
}
