import { FastImageProps } from "react-native-fast-image";
import { ImageProps, ImageSizeType } from "../Image";
import { ContainerConfigProps } from "../..";

export type IllustrationTypes = keyof typeof illustrationRegistry;
export type IllustrationPropsType =
  | IllustrationProps
  | IllustrationProps["name"];

export interface IllustrationProps {
  size?: ImageSizeType;

  /**
   * The name of the illustration
   */
  name?: IllustrationTypes;
  /**
   * The name of the illustration
   */
  illustration?: IllustrationTypes; //FIXME(aqil): temporary just for legacy
  /**
   * Style overrides for the illustration
   */
  imageStyle?: FastImageProps["style"]; //FIXME(aqil): temporary just for legacy
  /**
   * Style overrides for the icon container
   */
  containerProps?: ContainerConfigProps;
  /**
   * image props
   */
  imageProps?: ImageProps;
  /**
   * children
   */
  children?: React.ReactNode;
}

export const illustrationRegistry = {
  onboarding: require("../../../../../assets/illustrations/onboarding.png"),
  "meser-logo": require("../../../../../assets/illustrations/meser.png"),
};
