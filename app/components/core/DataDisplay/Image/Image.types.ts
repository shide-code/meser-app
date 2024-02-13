import { ViewStyle } from "react-native";
import { FastImageProps, Priority } from "react-native-fast-image";

export type ImageSizeType =
  | {
      h?: ViewStyle["height"];
      w?: ViewStyle["width"];
    }
  | number
  | string;

export interface ImageProps extends FastImageProps {
  size?: ImageSizeType;
  priority?: Priority;

  loading?: boolean;
}
