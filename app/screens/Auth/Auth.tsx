import { Screen, Typography } from "@/components";
import { useHeader } from "@/hooks";
import { goBack } from "@/navigators/navigationUtilities";

export const AuthScreen = () => {
  useHeader({
    leftIcon: {
      width: 24,
      height: 24,
      name: "NavArrowLeft",
      onPress: () => goBack(),
    },
  });
  return (
    <Screen preset="scroll">
      <Typography variant="heading1">Auth</Typography>
    </Screen>
  );
};
