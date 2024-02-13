import { useScrollToTop } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { useMemo, useRef, useState } from "react";
import {
  KeyboardAvoidingView,
  LayoutChangeEvent,
  Platform,
  ScrollView,
  View,
  ViewStyle,
} from "react-native";
import {
  $containerStyle,
  $innerStyle,
  $keyboardAvoidingViewStyle,
  $outerStyle,
} from "./Screen.style";
import {
  AutoScreenProps,
  ScreenProps,
  ScrollScreenProps,
} from "./Screen.types";
import { Footer as DefaultFooter } from "../Footer/Footer";
import { Edge, useSafeAreaInsets } from "react-native-safe-area-context";
import { ReanimatedScrollView } from "@/components/animations";
import { useOnLayout } from "@/utils/hooks/useOnLayout";
import { Column } from "../Column";
import { Spacer } from "@/components/Spacer";
import { colorsTheme } from "@/themes";

const isIos = Platform.OS === "ios";

function isNonScrolling(preset?: ScreenProps["preset"]) {
  return !preset || preset === "fixed";
}

function useAutoPreset(props: AutoScreenProps) {
  const { preset, scrollEnabledToggleThreshold } = props;
  const { percent = 0.92, point = 0 } = scrollEnabledToggleThreshold || {};

  const scrollViewHeight = useRef(null);
  const scrollViewContentHeight = useRef(null);
  const [scrollEnabled, setScrollEnabled] = useState(true);

  function updateScrollState() {
    if (
      scrollViewHeight.current === null ||
      scrollViewContentHeight.current === null
    ) {
      return;
    }

    // check whether content fits the screen then toggle scroll state according to it
    const contentFitsScreen = (function () {
      if (point) {
        return (
          scrollViewContentHeight.current < scrollViewHeight.current - point
        );
      } else {
        return (
          scrollViewContentHeight.current < scrollViewHeight.current * percent
        );
      }
    })();

    // content is less than the size of the screen, so we can disable scrolling
    if (scrollEnabled && contentFitsScreen) {
      setScrollEnabled(false);
    }

    // content is greater than the size of the screen, so let's enable scrolling
    if (!scrollEnabled && !contentFitsScreen) {
      setScrollEnabled(true);
    }
  }

  function onContentSizeChange(w: number, h: number) {
    // update scroll-view content height
    scrollViewContentHeight.current = h;
    updateScrollState();
  }

  function onLayout(e: LayoutChangeEvent) {
    const { height } = e.nativeEvent.layout;
    // update scroll-view  height
    scrollViewHeight.current = height;
    updateScrollState();
  }

  // update scroll state on every render
  if (preset === "auto") {
    updateScrollState();
  }

  return {
    scrollEnabled: preset === "auto" ? scrollEnabled : true,
    onContentSizeChange,
    onLayout,
  };
}

export function useSafeAreaInsetPadding(safeAreaEdges?: Edge[]) {
  const insets = useSafeAreaInsets();

  const insetStyles: ViewStyle = {};
  safeAreaEdges?.forEach((edge: Edge) => {
    const paddingProp = `padding${edge.charAt(0).toUpperCase()}${edge.slice(
      1,
    )}`;
    insetStyles[paddingProp] = insets[edge];
  });

  return insetStyles;
}

function ScreenWithoutScrolling(props: ScreenProps) {
  const { style, contentContainerStyle, children } = props;
  return (
    <View style={[$outerStyle, style]}>
      <View style={[$innerStyle, contentContainerStyle]}>{children}</View>
    </View>
  );
}

function ScreenWithScrolling(props: ScreenProps) {
  const {
    children,
    keyboardShouldPersistTaps = "handled",
    contentContainerStyle,
    ScrollViewProps,
    style,
    animate,
    space = 0,
    onTranslate,
  } = props as ScrollScreenProps;

  const ref = useRef<ScrollView>();

  const { scrollEnabled, onContentSizeChange, onLayout } = useAutoPreset(
    props as AutoScreenProps,
  );

  // Add native behavior of pressing the active tab to scroll to the top of the content
  // More info at: https://reactnavigation.org/docs/use-scroll-to-top/
  useScrollToTop(ref);

  const Component = animate ? ReanimatedScrollView : ScrollView;

  return (
    <Component
      {...{ keyboardShouldPersistTaps, scrollEnabled, ref }}
      {...ScrollViewProps}
      onLayout={e => {
        onLayout(e);
        ScrollViewProps?.onLayout?.(e);
      }}
      onContentSizeChange={(w: number, h: number) => {
        onContentSizeChange(w, h);
        ScrollViewProps?.onContentSizeChange?.(w, h);
      }}
      showsVerticalScrollIndicator={false}
      style={[$outerStyle, ScrollViewProps?.style, style]}
      contentContainerStyle={[
        $innerStyle,
        ScrollViewProps?.contentContainerStyle,
        contentContainerStyle,
      ]}
      nestedScrollEnabled={true}
      onTranslate={onTranslate}
    >
      {children}
      <Spacer length={space} />
    </Component>
  );
}

export function Screen(props: ScreenProps) {
  const {
    backgroundColor = colorsTheme.surface[1],
    KeyboardAvoidingViewProps,
    keyboardOffset = 0,
    safeAreaEdges,
    StatusBarProps,
    statusBarStyle = "dark",
    Footer,
    Header,
    FooterProps,
    keyboardFooterOffset = false,
    space = 0,
  } = props;

  const insetPadding = useSafeAreaInsetPadding(safeAreaEdges);
  const { bottom } = useSafeAreaInsets();

  const footerLayout = useOnLayout();
  const keyboardOffsetValue = useMemo(
    () =>
      keyboardFooterOffset
        ? keyboardOffset + footerLayout.height + +bottom
        : keyboardOffset,
    [footerLayout.height, keyboardFooterOffset, keyboardOffset, bottom],
  );

  return (
    <View style={[$containerStyle, { backgroundColor }, insetPadding]}>
      <StatusBar animated {...StatusBarProps} style={statusBarStyle} />

      <Column contentStyle="fitContent">{Header ?? Header}</Column>

      <KeyboardAvoidingView
        behavior={isIos ? "padding" : undefined}
        keyboardVerticalOffset={keyboardOffsetValue}
        {...KeyboardAvoidingViewProps}
        style={[$keyboardAvoidingViewStyle, KeyboardAvoidingViewProps?.style]}
      >
        {isNonScrolling(props.preset) ? (
          <ScreenWithoutScrolling {...props} />
        ) : (
          <ScreenWithScrolling {...props} space={space + footerLayout.height} />
        )}
      </KeyboardAvoidingView>

      <DefaultFooter {...FooterProps} onLayout={footerLayout.onLayout}>
        {Footer ?? Footer}
      </DefaultFooter>
    </View>
  );
}
