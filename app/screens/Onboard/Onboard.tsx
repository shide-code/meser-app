import { FC } from "react";
import {
  AnimateableView,
  Button,
  Column,
  Illustration,
  Screen,
  Spacer,
  Typography,
} from "@/components";
import { AppScreenProps, goToAuth } from "@/navigators";
import { spacing } from "@/themes";

export const OnboardScreen: FC<AppScreenProps> = _props => {
  const { navigation } = _props;
  const Header = () => (
    <Column height={56} arrangement="center" alignment="center">
      <Illustration name="meser-logo" size={88} />
    </Column>
  );

  const Footer = () => (
    <Column padding={spacing.large} contentStyle="fillContainer">
      <Column alignment="center">
        <AnimateableView config={{ animation: "fadeIn", duration: 2000 }}>
          <Illustration name="onboarding" size={320} />
        </AnimateableView>

        <AnimateableView config={{ animation: "fadeIn", duration: 4000 }}>
          <Typography variant="heading2" weight="bold">
            Selamat datang di Meser!
          </Typography>
        </AnimateableView>

        <Spacer length={spacing.small} />
        <AnimateableView config={{ animation: "fadeIn", duration: 5000 }}>
          <Typography variant="body1" textAlign="center">
            Nikmati berbagai kemudahan dalam aplikasi untuk kebutuhan hidupmu
          </Typography>
        </AnimateableView>
      </Column>

      <Spacer length={spacing.huge} />
      <AnimateableView config={{ animation: "bounce", duration: 2000 }}>
        <Button
          typeButton="filled"
          theme="accent"
          onPress={() => goToAuth(navigation)}
        >
          Lanjutkan
        </Button>
      </AnimateableView>
      <Spacer length={spacing.medium} />
    </Column>
  );
  return <Screen preset="fixed" Header={<Header />} Footer={<Footer />} />;
};
