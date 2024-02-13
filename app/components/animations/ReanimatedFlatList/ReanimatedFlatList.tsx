import { FC, forwardRef } from "react";
import Reanimated, {
  runOnJS,
  useAnimatedScrollHandler,
} from "react-native-reanimated";
import { ReanimatedFlatlistProps } from "./ReanimatedFlatList.types";
import { useCombinedRefs } from "@/utils/hooks/useCombinedRefs";

export const ReanimatedFlatList: FC<ReanimatedFlatlistProps> = forwardRef(
  (props, ref) => {
    const { onTranslate, style, ...rest } = props;

    const combinedRef = useCombinedRefs(ref);

    const onScroll = useAnimatedScrollHandler(event => {
      const { x, y } = event.contentOffset;
      runOnJS(onTranslate)?.(x, y);
    });

    return (
      <Reanimated.FlatList
        {...rest}
        ref={combinedRef}
        onScroll={onScroll}
        style={style}
        scrollEventThrottle={16}
        showsVerticalScrollIndicator={false}
      />
    );
  },
);
