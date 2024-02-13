import FastImage, { FastImageProps } from "react-native-fast-image";
import { ImageProps } from "../Image.types";
import { createImageSizeStyle } from "../Image.styles";
import SkeletonPlaceholder from "react-native-skeleton-placeholder";
import { useState } from "react";
import { Column } from "@/components";

export function Image(props: ImageProps) {
  const {
    size,
    style: $styleOverride,
    source: sourceOverride,
    priority = "normal",
    loading: loadingOverride,
    ...rest
  } = props;

  const [loading, setLoading] = useState(false);

  const ImageSizeStyle = createImageSizeStyle(size);
  const $styles = [ImageSizeStyle?.size, $styleOverride];

  if (loadingOverride) {
    return (
      <Column>
        <SkeletonPlaceholder>
          <SkeletonPlaceholder.Item
            width={ImageSizeStyle?.size.width}
            height={ImageSizeStyle?.size.height}
          />
        </SkeletonPlaceholder>
      </Column>
    );
  }

  const hasUri = typeof sourceOverride === "object" && sourceOverride?.uri;
  const source: FastImageProps["source"] = hasUri
    ? { uri: sourceOverride.uri, priority }
    : sourceOverride;

  return (
    <FastImage
      source={source}
      style={$styles}
      {...rest}
      onLoadStart={() => setLoading(true)}
      onLoadEnd={() => setLoading(false)}
    >
      {loading && (
        <Column>
          <SkeletonPlaceholder>
            <SkeletonPlaceholder.Item
              width={ImageSizeStyle?.size.width}
              height={ImageSizeStyle?.size.height}
            />
          </SkeletonPlaceholder>
        </Column>
      )}
    </FastImage>
  );
}

export default Image;
