import { Column, Spacer, Typography } from "@/components";
import { colorsTheme, spacing } from "@/themes";

interface Props {
  children?: React.ReactNode;
  title?: string;
}
export const Header = (_props: Props) => {
  const { children, title = "Masuk atau Daftar" } = _props;
  return (
    <Column padding={{ h: spacing.large, t: spacing.large }}>
      <Typography
        variant="heading2"
        weight="bold"
        color={colorsTheme.text.high}
      >
        {title}
      </Typography>
      <Spacer length={spacing.small} />
      {children}
    </Column>
  );
};
