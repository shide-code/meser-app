import { Button, Column, Spacer, Typography } from "@/components";
import { colorsTheme, spacing } from "@/themes";

interface Props {
  onSubmit?: () => void;
}
export const Footer = (_props: Props) => {
  const { onSubmit } = _props;
  return (
    <Column padding={{ h: spacing.large, b: spacing.huge }}>
      <Typography variant="body1">
        Dengan masuk atau daftar, kamu udah setuju sama{" "}
        <Typography
          variant="body1"
          weight="extraBold"
          color={colorsTheme.accent.normal}
        >
          Ketentuan Layanan
        </Typography>{" "}
        dan{" "}
        <Typography
          variant="body1"
          weight="extraBold"
          color={colorsTheme.accent.normal}
        >
          Kebijakan Privasi
        </Typography>
        .
      </Typography>

      <Spacer length={spacing.small} />
      <Button onPress={onSubmit}>Lanjutkan</Button>
    </Column>
  );
};
