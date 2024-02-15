import {
  Button,
  Column,
  IModalBottomSheet,
  ModalBottomSheet,
  Spacer,
  Typography,
} from "@/components";
import { colorsTheme, spacing } from "@/themes";

interface Props extends IModalBottomSheet {
  onSubmit: () => void;
}

export const ModalConfirmation = (_props: Props) => {
  const { onSubmit, ...props } = _props;
  return (
    <ModalBottomSheet {...props} type="bottom">
      <Column alignment="center" contentStyle="fitContent">
        <Typography variant="heading4" weight="bold">
          Kode akan dikirim ke WhatsApp
        </Typography>
        <Spacer length={spacing.small} />
        <Typography variant="body1" textAlign="center">
          Pastiin nomor kamu{" "}
          <Typography variant="body1" weight="bold">
            +6285156739506
          </Typography>{" "}
          udah terhubung dengan WhatsApp.
        </Typography>
      </Column>

      <Spacer length={spacing.huge} />
      <Button onPress={onSubmit}>Kirim Kode ke WhatsApp</Button>
      <Spacer length={spacing.small} />
      <Typography variant="body1" textAlign="center">
        Nomor gak terhubung WhatsApp?{" "}
        <Typography
          variant="body1"
          color={colorsTheme.accent.normal}
          weight="extraBold"
        >
          Kirim SMS
        </Typography>{" "}
      </Typography>
    </ModalBottomSheet>
  );
};
