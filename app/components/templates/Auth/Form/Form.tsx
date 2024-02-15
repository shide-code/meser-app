import { Column, PhoneNumberField, Spacer, Typography } from "@/components";
import { colorsTheme, spacing } from "@/themes";

interface Props {
  onPress?: () => void;
}
export const Form = (_props: Props) => {
  const { onPress } = _props;
  return (
    <Column padding={{ h: spacing.large }} margin={{ t: spacing.huge }}>
      <PhoneNumberField placeholder="12345678" />
      <Spacer length={spacing.small} />
      <Typography variant="body1">
        Nomor HP nggak aktif atau hilang?{" "}
        <Typography
          variant="body1"
          weight="extraBold"
          color={colorsTheme.accent.normal}
          onPress={onPress}
        >
          Atur Ulang
        </Typography>
      </Typography>
    </Column>
  );
};
