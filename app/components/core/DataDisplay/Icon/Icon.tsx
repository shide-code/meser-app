import * as DefaultIcon from "iconoir-react-native";
import { IIconProps } from "./Icon.interface";

export const Icon = (_props: IIconProps) => {
  const { name, ...props } = _props;
  const Component = DefaultIcon[name];
  return <Component {...props} />;
};
