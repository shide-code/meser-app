import { Box, BoxProps } from "../Box";

export interface FooterProps extends BoxProps {}

export const Footer = (_props: FooterProps) => {
  const { children, bottom = 0, withSafeArea = "bottomOnly", ...rest } = _props;

  return (
    <Box
      bottom={bottom}
      left={0}
      right={0}
      {...rest}
      withSafeArea={withSafeArea}
    >
      {children}
    </Box>
  );
};
