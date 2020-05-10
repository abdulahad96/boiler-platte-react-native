import { Dimensions, Platform, StyleSheet } from "react-native";

const { width, height } = Dimensions.get("window");
const screenWidth = width < height ? width : height;
const screenHeight = width < height ? height : width;

const guidelineBaseWidth = 375;
const guidelineBaseHeight = 667;

const scale = size => (screenWidth / guidelineBaseWidth) * +size;
const scaleVertical = size => (screenHeight / guidelineBaseHeight) * size;

const ratio = (iosSize: number, androidSize: ?number) =>
  Platform.select({
    ios: scaleVertical(iosSize),
    android: androidSize || iosSize
  });

const generatedFontSize = (iosFontSize: number, androidFontSize: ?number) =>
  Platform.select({
    ios: scale(iosFontSize),
    android: androidFontSize || iosFontSize
  });

const NAVBAR_HEIGHT = Platform.OS === "ios" ? 44 : 56;
const STATUSBAR_HEIGHT = Platform.OS === "ios" ? 20 : 0;

export default {
  ratio,
  screenWidth,
  screenHeight,
  generatedFontSize,
  oneThirdScreenWidth: ratio(screenWidth / 1.5),
  oneThirdScreenHeight: ratio(screenHeight / 1.5),
  nSmallMargin: ratio(8),
  nBaseMargin: ratio(16),
  nDoubleBaseMargin: ratio(32),
  smallMargin: ratio(15),
  baseMargin: ratio(50),
  doubleBaseMargin: ratio(100),
  dualBaseMargin: ratio(200),
  statusBarHeight: STATUSBAR_HEIGHT,
  horizontalLineHeight: 2,
  hairlineWidth: StyleSheet.hairlineWidth,
  navBarHeight: NAVBAR_HEIGHT + STATUSBAR_HEIGHT,
  tabBarHeight: 49, // Default tab bar height in iOS 10 (source react-navigation)
  borderRadius: ratio(0),
  defaultUIHeight: ratio(55),
  icon: {
    tiny: ratio(8),
    small: ratio(16),
    normal: ratio(24), // Default tab icon size (source react-navigation)
    medium: ratio(32),
    large: ratio(40),
    nauseous: ratio(45),
    xLarge: ratio(60),
    xxLarge: ratio(90),
    xxxLarge: ratio(100)
  },
  image: {
    thirteen: ratio(5),
    fourteen: ratio(5),
    five: ratio(5),
    sevenFour: ratio(74),
    twozero: ratio(25),
    oneeight: ratio(20),
    threethreefive: ratio(335),
    onezeronine: ratio(109),
    onesix: ratio(16),
    twoEight: ratio(28),
    twofour: ratio(24),
    oneonenine: ratio(119),
    onetwofive: ratio(125),
    onefourzero: ratio(140),
    onezeroeight: ratio(108),
    onesixzero: ratio(160),
    onesixone: ratio(161),
    onesevenzero: ratio(170),
    oneseventwo: ratio(172),
    threeonefive: ratio(315),
    onesevensix: ratio(176),
    mini: ratio(0.7),
    tiny: ratio(12),
    tiny3: ratio(14),
    tiny2: ratio(16),
    eighteen: ratio(18),
    small: ratio(20),
    xsmall: ratio(30),
    semiMedium: ratio(40),
    medium: ratio(52),
    large: ratio(65),
    semiLarge: ratio(80),
    xLarge: ratio(160),
    xlarge: ratio(180),
    xxLarge: ratio(250),
    xxxLarge: ratio(136),
    dialer: ratio(220),
    coverWidth: screenWidth,
    coverHeight: screenWidth / 2
  }
};
