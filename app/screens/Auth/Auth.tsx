import { Auth, Screen, Typography } from "@/components";
import { useHeader } from "@/hooks";
import { AppScreenProps, goToVerication } from "@/navigators";
import { goBack } from "@/navigators/navigationUtilities";
import { colorsTheme } from "@/themes";
import { FC, useState } from "react";

export const AuthScreen: FC<AppScreenProps> = _props => {
  const { navigation } = _props;
  const [visible, setVisible] = useState(false);
  useHeader({
    leftIcon: {
      width: 24,
      height: 24,
      name: "NavArrowLeft",
      onPress: () => goBack(),
    },
  });

  return (
    <Screen
      preset="scroll"
      Footer={<Auth.Footer onSubmit={() => setVisible(true)} />}
    >
      <Auth.Header>
        <Typography variant="body1" color={colorsTheme.text.high}>
          Masuk atau daftar cuman butuh nomor HP aja.
        </Typography>
      </Auth.Header>
      <Auth.Form />
      <Auth.ModalConfirmation
        isVisible={visible}
        onBackButtonPress={() => setVisible(false)}
        onBackdropPress={() => setVisible(false)}
        onSwipeComplete={() => setVisible(false)}
        onSwipeStart={() => setVisible(false)}
        onSubmit={() => {
          setVisible(false);
          setTimeout(() => {
            goToVerication(navigation);
          }, 400);
        }}
      />
    </Screen>
  );
};
