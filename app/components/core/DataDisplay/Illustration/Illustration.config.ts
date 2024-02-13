import { IllustrationPropsType } from "./Illustration.types";

export const createIllustrationProps = (
  illustration: IllustrationPropsType,
) => {
  if (typeof illustration === "undefined") {
    return undefined;
  }

  if (typeof illustration === "string") {
    return { name: illustration };
  }

  return illustration;
};
