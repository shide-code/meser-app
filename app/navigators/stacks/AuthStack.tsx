import { AuthScreen } from "@/screens";
import { AppStack } from "../AppNavigator";

export type AuthStackParamList = {
  Main: undefined;
};

interface Props {
  Stack: AppStack;
}

export const AuthStack = ({ Stack }: Props) => {
  return (
    <Stack.Group
      screenOptions={{
        headerShown: false,
        animation: "ios",
        animationDuration: 150,
      }}
    >
      <Stack.Screen name="Main" component={AuthScreen} />
    </Stack.Group>
  );
};
