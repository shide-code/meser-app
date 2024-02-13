import { OnboardScreen } from "@/screens";
import {
  EventListenerCallback,
  NavigationContainer,
  NavigationContainerEventMap,
} from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useEffect, useMemo } from "react";
import { useBackButtonHandler, navigationRef } from "./navigationUtilities";
import { onlineManager } from "@tanstack/react-query";
import { useBottomSheetModal } from "@gorhom/bottom-sheet";
import NetInfo from "@react-native-community/netinfo";
import BaseConfig from "@/configs/config.base";

export type AppStackParamList = {
  Onboard: undefined;
};
const Stack = createNativeStackNavigator<AppStackParamList>();
export const AppStack = () => {
  const navigator = useMemo(() => {
    return (
      <Stack.Group
        screenOptions={{
          animation: "fade_from_bottom",
          animationDuration: 150,
        }}
      >
        <Stack.Screen name="Onboard" component={OnboardScreen} />
      </Stack.Group>
    );
  }, []);
  return (
    <Stack.Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName="Onboard"
    >
      {navigator}
    </Stack.Navigator>
  );
};

export interface NavigationProps
  extends Partial<React.ComponentProps<typeof NavigationContainer>> {}

const exitRoutes = BaseConfig.exitRoutes;
export const AppNavigator = (props: NavigationProps) => {
  useBackButtonHandler(routeName => exitRoutes.includes(routeName));

  onlineManager.setEventListener(setOnline => {
    return NetInfo.addEventListener((state: any) => {
      if (state.isConnected === false) {
        console.log("No Connection");
      }
      setOnline(!!state.isConnected);
    });
  });

  const { dismissAll: dismissAllModals } = useBottomSheetModal();
  // // use effect event listener change navigator
  useEffect(() => {
    const handleStateChange: EventListenerCallback<
      NavigationContainerEventMap,
      "state"
    > = () => {
      // do stuff with state
      dismissAllModals();
    };

    // Add listener on mount
    navigationRef.addListener("state", handleStateChange);

    // Remove listener on unmount
    return () => navigationRef.removeListener("state", handleStateChange);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <NavigationContainer ref={navigationRef} {...props}>
      <AppStack />
    </NavigationContainer>
  );
};
