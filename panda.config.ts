import { defineConfig } from "@pandacss/dev"

export default defineConfig({
  preflight: true,
  include: ["./src/**/*.{astro,tsx,ts,jsx,js}"],
  exclude: [],
  outdir: "styled-system",
  jsxFramework: "react",
  globalCss: {
    "html, body": {
      backgroundColor: "bg",
      color: "text.primary",
      fontFamily: "body",
      fontSize: "base",
      lineHeight: "body",
      WebkitFontSmoothing: "antialiased",
    },
    "*, *::before, *::after": {
      boxSizing: "border-box",
    },
    "a": {
      color: "text.primary",
      textDecoration: "none",
      transition: "color {durations.base} ease",
    },
    "a:hover": {
      color: "accent",
    },
    "::selection": {
      backgroundColor: "accent",
      color: "bg",
    },
    ":focus-visible": {
      outline: "2px solid {colors.accent}",
      outlineOffset: "2px",
      borderRadius: "sm",
    },
  },
  theme: {
    tokens: {
      colors: {
        bg: { value: "#121212" },
        accent: { value: "#00D59F" },
        purple: { value: "#30284F" },
        text: {
          primary: { value: "#EDEDED" },
          secondary: { value: "#8F8F8F" },
          tertiary: { value: "#5C5C5C" },
        },
        border: {
          subtle: { value: "rgba(255,255,255,0.08)" },
          emphasis: { value: "rgba(255,255,255,0.14)" },
        },
      },
      spacing: {
        "1": { value: "4px" },
        "2": { value: "8px" },
        "3": { value: "12px" },
        "4": { value: "16px" },
        "5": { value: "20px" },
        "6": { value: "24px" },
        "8": { value: "32px" },
        "10": { value: "40px" },
        "12": { value: "48px" },
        "16": { value: "64px" },
        "20": { value: "80px" },
        "24": { value: "96px" },
      },
      radii: {
        sm: { value: "4px" },
        md: { value: "8px" },
        lg: { value: "12px" },
        full: { value: "999px" },
      },
      fontSizes: {
        xs: { value: "12px" },
        sm: { value: "14px" },
        base: { value: "16px" },
        lg: { value: "18px" },
        xl: { value: "24px" },
        "2xl": { value: "32px" },
        "3xl": { value: "40px" },
        "4xl": { value: "48px" },
      },
      lineHeights: {
        body: { value: "1.6" },
        heading: { value: "1.2" },
        prose: { value: "1.75" },
      },
      fonts: {
        body: { value: "'Inter Variable', system-ui, sans-serif" },
        serif: { value: "'Instrument Serif', Georgia, serif" },
        mono: { value: "'JetBrains Mono', ui-monospace, monospace" },
      },
      fontWeights: {
        regular: { value: "400" },
        medium: { value: "500" },
      },
      letterSpacings: {
        wide: { value: "0.04em" },
      },
      durations: {
        fast: { value: "150ms" },
        base: { value: "200ms" },
        slow: { value: "300ms" },
      },
      sizes: {
        prose: { value: "680px" },
        page: { value: "1080px" },
        narrow: { value: "560px" },
      },
    },
  },
})
