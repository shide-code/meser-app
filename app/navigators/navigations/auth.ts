import { AppNavScreen, AppStackParamList } from "../AppNavigator";

export const goToAuth = (
  navigation: AppNavScreen,
  type: "replace" | "push" | "navigate" = "navigate",
  params?: AppStackParamList["Main"],
) => {
  // return navigation[type as keyof AppStackParamList]("Main", params);
  return navigation[type]("Main", params);
};
