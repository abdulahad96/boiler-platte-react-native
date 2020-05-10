// ============ Define Colors Variables here ========== //

import { Platform } from "react-native";

const white = "#FFFFFF";
const black = "#000000";
const grey = Platform.select({
  ios: "#F4F4F4",
  android: "#FAFAFA"
});

// app generic colors

const primary = "#4d4d4d";
const secondary = "#e89225";
const tertiary = "#44517c";
const quaternary = "#ecedf2";
const punch = "#999ca1";
const placeholder = "#D5C6B3";

const semiTransparent = "rgba(0,0,0,0.7)";
const border = "#f2f2f2";
const separator = tertiary;
const indicator = "#6ed7d0";
const windowTint = "rgba(0, 0, 0, 0.4)";
const windowTintWhite = "rgba(255, 255, 255, 0.1)";
const transparent = "rgba(0,0,0,0)";

// app theme colors
const platinum = "#e5eced";
const segment_bg = "#E5ECED";
const segment_txt = "#FBFCFE";
const HanBlue = "#436fcc";
const darkStaleBlue = "#e89225";
const darkStaleBlueWithOutOpacity = "#475768";
const charcoal = "rgba(39, 61, 82, 1)";
const homeHeading = "#363C57";
const paraHead = "#657685";
const segmentBorderColor = "#BBBFCF";
const rowColor = "#dbdbdb";
// ====================================================

const oldGold = "#d7b837";
const carrotOrange = "#f89422";
const carrotOrange1 = "rgba(232, 157, 48, 40)";
const carrotOrange2 = "rgba(219, 143, 34, 40)";
const maroon = "#e94335";
const violetBlue = "#3555a9";
const dimGray = "#6f6f6f";
const smokeWhite = "#f5f5f5";
const musell = "#f0f0f0";
const ghostWhite = "#f9f9f9";
const isabelline = "#eeeeee";
const portLandOrange = "#ff5722";
const portLandOrangeBackground = "rgba(255, 87, 34, 0.5)";
// const deepSkyBlue1 = "rgba(5, 163, 245, 1)";
const deepSkyBlue = "rgba(0, 194, 246, 40)";
const richElectricBlue = "rgba(5, 163, 245, 40)";
const moonStoneBlue = "#6cb1bf";
const tealBlue = "rgba(39, 129, 119, 40)";
const pinegreen = "rgba(29, 116, 106, 40)";
const fieldBgColors = "rgba(19, 82, 87, 0.22)";
const davygrey = "#555657";
const lightGray = "#d2d2d2";
const taupeGrey = "#8b8c8e";
const deep_Saffron = "#eda235";
const ash_grey = "rgba(177, 177, 177, 0.9)";
const glu = "#c5328b";
const ins = "#038fd8";
const med = "#eda235";
const exe = "#1b9684";
const jade = "#00b088";
const vermillion = "#ee412f";
const lightgray = "#e5eced";
const gainsboro = "#dfdfdf";
const Glitter = "rgba(229, 237, 238, 1)";
const Midnight_green = "rgba(19, 82, 87, 1)";
const indicatorColor = "rgba(40,42,49,0.5)";
const salmon = "rgba(255, 145, 121, 1)";
const checkoutDetailArea = "#d9d9d9";
const badgeCart = "#00c61e";

// app generic components colors

const background = {
  primary,
  secondary,
  actionItem: secondary,
  tertiary: "#00000057"
};

const text = {
  darkStaleBlueWithOutOpacity: darkStaleBlueWithOutOpacity,
  servTitle: "#939EA8",
  tutorialText: "rgba(255,255,255,0.8)",
  tutorialButtonText: "rgba(255,255,255,0.9)",
  sec: "#c5c5c5",
  sec2: "#4f4f4f",
  sec3: "#c3c8cc",
  dis: "#949494",
  phonesubtitle: "#acacac",
  org: "#273D52",
  HanBlue: HanBlue,
  primary: primary,
  secondary: secondary,
  tertiary: tertiary,
  quaternary: quaternary,
  charcoal: charcoal,
  punch: punch,
  carrot: carrotOrange,
  taupe: taupeGrey,
  darkGray: "#aeaeae",
  darkStaleBlue: darkStaleBlue,
  greyPara: "#7A84A2",
  homeHeading: homeHeading,
  paraHead: paraHead,
  white: "rgba(255, 255, 255, 1)",
  exploreBox: "#585479",
  //  charcoallight : "#5e6e7e",
  charcoallight: "#949494",
  chestnut: "#b94545",
  platinum: "#e5eced",
  white: white,
  checkoutDetailArea: checkoutDetailArea,
  salmon: salmon
};

const navbar = {
  background: background.primary,
  text: text.secondary
};

export default {
  darkStaleBlueWithOutOpacity,
  segmentBorderColor,
  charcoal,
  HanBlue,
  segment_bg,
  segment_txt,
  platinum,
  punch,
  darkStaleBlue,
  homeHeading,
  paraHead,
  // ===============
  isabelline,
  ghostWhite,
  musell,
  oldGold,
  carrotOrange,
  carrotOrange1,
  carrotOrange2,
  violetBlue,
  smokeWhite,
  maroon,
  moonStoneBlue,
  tealBlue,
  pinegreen,
  vermillion,
  dimGray,
  portLandOrange,
  portLandOrangeBackground,
  richElectricBlue,
  deepSkyBlue,
  fieldBgColors,
  davygrey,
  taupeGrey,
  deep_Saffron,
  ash_grey,
  glu,
  ins,
  med,
  exe,
  jade,
  Midnight_green,
  Glitter,
  gainsboro,
  lightgray,
  lightGray,
  primary,
  secondary,
  tertiary,
  quaternary,

  text,
  background,
  navbar,
  tabInactive: "#a3aab4",

  white,
  black,
  grey,
  transparent,
  semiTransparent,

  border,
  separator,
  windowTint,
  windowTintWhite,
  indicator,

  warning: "#feb401",
  danger: "#ed1c4d",
  success: "#b76c94",
  indicatorColor,
  salmon,
  rowColor,
  checkoutDetailArea,
  badgeCart,
  placeholder
};
