import { DefaultTheme } from "styled-components";

const fixedColors = {
  CRIMSON: "#DC143C",
  BLURPLE: "#5865F2",
  FULL_WHITE: "#FFFFFF",
  BLACK: "#202225",
  BLACK_DARK: "#2C2F33",
  BLACK_LIGHT: "#2F3136",
  BLACK_PRIMARY: "#36393f",
  DARK_SALMON: "#E9967A",
  DANGER: "#db662e",
  LIGHTGREEN: "#90EE90",
  SEAGREEN: "#3BA55D",
  ORANGE: "#FAA81A",
  SILVER: "#B9BBBE",
  PRIMARY: "#4D4D4D",
  TEXT_DANGER: "hsl(359,calc(var(--saturation-factor, 1)*82%),73.9%)",
};

export const darkTheme: DefaultTheme = {
  ...fixedColors,
  BLACK_SECONDARY: "#23272A",
  SILVER_DARK: "#4D4D4D",
  NODE_KEY: "#FAA81A",

  INTERACTIVE_NORMAL: "#b9bbbe",
  INTERACTIVE_HOVER: "#dcddde",
  INTERACTIVE_ACTIVE: "#fff",
  BACKGROUND_NODE: "#2B2C3E",
  BACKGROUND_TERTIARY: "#202225",
  BACKGROUND_SECONDARY: "#2f3136",
  BACKGROUND_PRIMARY: "#36393f",
  BACKGROUND_MODIFIER_ACCENT: "rgba(79,84,92,0.48)",
  TEXT_NORMAL: "#dcddde",
  TEXT_POSITIVE: "hsl(139,calc(var(--saturation-factor, 1)*51.6%),52.2%)",
} as const;

export const lightTheme: DefaultTheme = {
  ...fixedColors,
  BLACK_SECONDARY: "#F2F2F2",
  SILVER_DARK: "#CCCCCC",
  NODE_KEY: "#DC3790",

  INTERACTIVE_NORMAL: "#4f5660",
  INTERACTIVE_HOVER: "#2e3338",
  INTERACTIVE_ACTIVE: "#060607",
  BACKGROUND_NODE: "#FFFFFF",
  BACKGROUND_TERTIARY: "#e3e5e8",
  BACKGROUND_SECONDARY: "#f2f3f5",
  BACKGROUND_PRIMARY: "#FFFFFF",
  BACKGROUND_MODIFIER_ACCENT: "rgba(106,116,128,0.24)",
  TEXT_NORMAL: "#2e3338",
  TEXT_POSITIVE: "#008736",
} as const;
