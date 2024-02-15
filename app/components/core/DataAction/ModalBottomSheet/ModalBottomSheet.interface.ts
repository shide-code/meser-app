import { ContainerConfigProps } from "../..";

export interface IModalBottomSheet {
  isVisible: boolean;
  children?: React.ReactNode;
  container?: ContainerConfigProps;
  type?: "center" | "bottom";
  onBackdropPress?: () => void;
  onBackButtonPress?: () => void;
  onSwipeComplete?: () => void;
  onSwipeStart?: () => void;
}
