import { useTheme } from '@/contexts/ThemeContext'
import { useColors } from '@/hooks/useColors'
import { StyleSheet } from 'react-native'

export const createStyles = () => {
  const { theme } = useTheme()
  const colors = useColors()

  return StyleSheet.create({
    container: {
      flexDirection: 'row',
      alignItems: 'center',
      marginVertical: 6,
    },
    circle: {
      borderWidth: 2,
      justifyContent: 'center',
      alignItems: 'center',
    },
    innerCircle: {
      backgroundColor: colors.black,
    },
    labelContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      marginLeft: theme.spacing.sm,
      flex: 1,
    },
    label: {
      fontSize: theme.font.size.medium,
      color: colors.black,
    },
    disabledLabel: {
      color: colors.grey1,
    },
    errorLabel: {
      color: colors.error,
    },
    required: {
      color: colors.error,
      marginLeft: theme.spacing.xs,
      fontSize: theme.font.size.medium,
    },
  })
}
