import Reanimated from "react-native-reanimated";

type FlatListProps = (typeof Reanimated.FlatList)["prototype"]["props"];
// omit props that we don't need
type OmitFlatlistProps = Omit<
  FlatListProps,
  "onScroll" | "scrollEventThrottle"
>;

export interface ReanimatedFlatlistProps extends OmitFlatlistProps {
  onTranslate?: (x: number, y: number) => void;
}
