import { forwardRef } from "react";
import { colorsTheme, spacing } from "@/themes";
import { IHeaderProps } from "./Header.interface";
import { Icon, Typography } from "../../DataDisplay";
import { Row } from "../../Container";
import { Spacer } from "@/components";

export const Header = forwardRef((_props: IHeaderProps, _) => {
  const { leftIcon, rightIcon, text, style } = _props;

  return (
    <Row
      backgroundColor={colorsTheme.surface[1]}
      padding={spacing.medium}
      style={style}
      contentStyle="fitContent"
      arrangement="between"
    >
      {leftIcon && <Icon {...leftIcon} />}
      <Spacer length={spacing.medium} horizontal />
      <Typography variant="heading5" weight="600" {...text} />
      <Spacer length={spacing.medium} horizontal />
      {rightIcon ? (
        <Icon {...rightIcon} />
      ) : (
        <Icon name="MoreHoriz" color="white" />
      )}
    </Row>
  );
});
