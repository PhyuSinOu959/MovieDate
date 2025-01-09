import { Platform } from 'react-native'
import { Colors } from './Colors'

export const T = (isDarkMode: boolean) => {
  const themeColors = isDarkMode ? Colors.dark : Colors.light

  return {
    color: {
      primary: themeColors.primary,
      primaryGradient: {
        start: themeColors.primary,
        end: themeColors.primary1,
      },
      secondary: themeColors.secondary,
      secondary2: themeColors.secondary2,
      text: themeColors.text,
      subText: themeColors.subText,
      background: themeColors.background,
      background2: themeColors.background2,
      border: themeColors.border,
      point: themeColors.point,
      black: themeColors.black,
      white: themeColors.white,
      lightGrey: themeColors.lightGrey,
      lightGrey2: themeColors.lightGrey2,
      orange: themeColors.orange,
      orange1: themeColors.orange1,
    },
    font: {
      size: {
        tiny: 10,
        small: 12,
        regular: 14,
        smallRegular: 15,
        medium: 16,
        large: 18,
        xLarge: 24,
      },
      weight: {
        regular: '400' as const,
        medium: '500' as const,
        bold: '600' as const,
      },
      family: {
        primary: Platform.select({
          ios: 'Noto Sans JP',
          android: 'NotoSansJP-Regular',
          default: 'Noto Sans JP',
        }),
      },
    },
    spacing: {
      xs: 4,
      sm: 8,
      smRegular: 10,
      md: 16,
      lg: 24,
      xl: 32,
    },
    border: {
      radius: {
        sm: 4,
        md: 8,
        lg: 12,
        xl: 16,
        full: 999,
      },
      width: {
        thin: 1,
        regular: 2,
        thick: 3,
      },
    },
    button: {
      height: 48,
      borderRadius: 24,
    },
    input: {
      height: 40,
      borderRadius: 20,
    },
  }
}
