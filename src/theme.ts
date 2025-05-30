import { createSystem, defaultConfig } from "@chakra-ui/react";

export const system = createSystem(defaultConfig, {
  theme: {
    tokens: {
      colors: {
        primary: {
          50: { value: "#e6f7ff" },
          100: { value: "#b3e5fc" },
          200: { value: "#81d4fa" },
          300: { value: "#4fc3f7" },
          400: { value: "#29b6f6" },
          500: { value: "#40BFFF" },
          600: { value: "#039be5" },
          700: { value: "#0288d1" },
          800: { value: "#0277bd" },
          900: { value: "#01579b" },
        },
      },
    },
    semanticTokens: {
      colors: {
        primary: {
          solid: { value: "{colors.primary.500}" },
          contrast: { value: "{colors.primary.50}" },
          fg: { value: "{colors.primary.700}" },
          muted: { value: "{colors.primary.100}" },
          subtle: { value: "{colors.primary.200}" },
          emphasized: { value: "{colors.primary.300}" },
          focusRing: { value: "{colors.primary.500}" },
        },
      },
    },
  },
});

export default system;
