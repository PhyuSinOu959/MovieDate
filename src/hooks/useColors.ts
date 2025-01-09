import { useTheme } from '@contexts/ThemeContext'
import { Colors } from '@constants/Colors'

export const useColors = () => {
  const { isDarkMode } = useTheme()
  return isDarkMode ? Colors.dark : Colors.light
}
