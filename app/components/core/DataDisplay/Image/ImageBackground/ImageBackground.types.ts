import { ContainerConfigProps } from "../../Container"
import { ImageProps } from "../Image.types"

export interface ImageBackgroundProps extends ImageProps {
  containerProps?: ContainerConfigProps
  backgroundColor?: string
}
