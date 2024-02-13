import { ImageBackgroundProps } from "./ImageBackground.types";
import { createImageSizeStyle } from "../Image.styles";
import { Image } from "../Image";
import { Column } from "@/components";

export function ImageBackground(props: ImageBackgroundProps) {
  const { containerProps, children, backgroundColor, size, ...imageProps } =
    props;

  const ImageSizeStyle = createImageSizeStyle(size);

  const hasSize = typeof ImageSizeStyle === "object" && ImageSizeStyle?.size;
  const height = hasSize ? ImageSizeStyle?.size?.height : undefined;
  const width = hasSize ? ImageSizeStyle?.size?.width : undefined;

  const alignment = containerProps?.alignment || "center";
  const arrangement = containerProps?.arrangement || "center";

  return (
    <Column
      height={height}
      width={width}
      alignment={alignment}
      arrangement={arrangement}
      {...containerProps}
      backgroundColor={backgroundColor}
      overflow="hidden"
    >
      <Image size={size} {...imageProps} />
      {children}
    </Column>
  );
}
