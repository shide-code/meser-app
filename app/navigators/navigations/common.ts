import { AppNavScreen } from "../AppNavigator";

export const goBack = (navigation: AppNavScreen, times?: number) => {
  const count = times || 1;

  Array.from(Array(count)).forEach(() => {
    if (navigation.canGoBack()) {
      return navigation.goBack();
    }
  });
};
