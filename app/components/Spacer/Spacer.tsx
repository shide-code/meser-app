import { Column } from "@/components";
import { SpacerProps } from "./Spacer.types";
import { memo } from "react";

export function DefaultSpacer(props: SpacerProps) {
  const { length, minLength, horizontal } = props;

  if (horizontal) {
    return (
      <Column
        width={length}
        height="100%"
        // TODO(aqil): for long term use this
        // contentStyle="fitContent"
      />
    );
  }

  return <Column height={length} minHeight={minLength} />;
}

export const Spacer = memo(DefaultSpacer, (prev, next) => {
  return prev.length === next.length && prev?.horizontal === next?.horizontal;
});
