import { colorsTheme } from "./colors.theme";

// Fonts
const nunitoLight = require("../../assets/fonts/Nunito-Light.ttf");
const nunitoRegular = require("../../assets/fonts/Nunito-Regular.ttf");
const nunitoMedium = require("../../assets/fonts/Nunito-Medium.ttf");
const nunitoSemiBold = require("../../assets/fonts/Nunito-SemiBold.ttf");
const nunitoBold = require("../../assets/fonts/Nunito-Bold.ttf");
const nunitoExtraBold = require("../../assets/fonts/Nunito-ExtraBold.ttf");
const nunitoBlack = require("../../assets/fonts/Nunito-Black.ttf");

export const customFontsToLoad = {
  nunitoLight,
  nunitoRegular,
  nunitoMedium,
  nunitoSemiBold,
  nunitoBold,
  nunitoExtraBold,
  nunitoBlack,
};
// Font Size Configuration
export const typographySize = {
  heading1: {
    fontSize: 30,
    lineHeight: 36,
    color: colorsTheme.text.high,
    fontFamily: "Nunito-Regular",
  },
  heading2: {
    fontSize: 24,
    lineHeight: 32,
    color: colorsTheme.text.high,
    fontFamily: "Nunito-Regular",
  },
  heading3: {
    fontSize: 20,
    lineHeight: 28,
    color: colorsTheme.text.high,
    fontFamily: "Nunito-Regular",
  },
  heading4: {
    fontSize: 18,
    lineHeight: 28,
    color: colorsTheme.text.high,
    fontFamily: "Nunito-Regular",
  },
  heading5: {
    fontSize: 16,
    lineHeight: 24,
    color: colorsTheme.text.high,
    fontFamily: "Nunito-Regular",
  },
  body1: {
    fontSize: 14,
    lineHeight: 20,
    color: colorsTheme.text.high,
    fontFamily: "Nunito-Regular",
  },
  body2: {
    fontSize: 12,
    lineHeight: 16,
    color: colorsTheme.text.high,
    fontFamily: "Nunito-Regular",
  },
};
