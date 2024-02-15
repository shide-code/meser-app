import { Auth, Screen, Typography } from "@/components";
import { useHeader } from "@/hooks";
import { goBack } from "@/navigators/navigationUtilities";
import { colorsTheme } from "@/themes";

export const VerificationScreen = () => {
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
      <Auth.Header title="Verifikasi lewat WhatsApp">
        <Typography variant="body1" color={colorsTheme.text.high}>
          Masukkin kode verifikasi yang dikirim ke nomor WhatsApp +6285156739506
        </Typography>
      </Auth.Header>
      <Auth.Form />
    </Screen>
  );
};
