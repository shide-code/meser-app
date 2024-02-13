import { Column } from "../..";
import { Image } from "../Image";
import { createImageSizeStyle } from "../Image/Image.styles";
import { IllustrationProps, illustrationRegistry } from "./Illustration.types";

export function Illustration(props: IllustrationProps) {
  const {
    size = 246,
    name,
    illustration = "meser-logo",
    imageStyle: $imageStyleOverride,
    containerProps,
    imageProps,
    children,
  } = props;

  const ImageSizeStyle = createImageSizeStyle(size);

  const hasSize = typeof ImageSizeStyle === "object" && ImageSizeStyle?.size;
  const height = hasSize ? ImageSizeStyle?.size?.height : undefined;
  const width = hasSize ? ImageSizeStyle?.size?.width : undefined;

  return (
    <Column
      contentStyle="fitContent"
      width={width}
      height={height}
      {...containerProps}
    >
      <Image
        resizeMode="contain"
        size={size}
        style={[$imageStyleOverride]}
        source={illustrationRegistry[name ?? illustration]}
        priority="high"
        {...imageProps}
      />
      {children}
    </Column>
  );
}
