import { useTheme } from '@/contexts/ThemeContext'
import { StyleSheet } from 'react-native'
import { useColors } from '@/hooks/useColors'

export const createStyles = () => {
  const { theme } = useTheme()
  const colors = useColors()

  return StyleSheet.create({
    container: {
      backgroundColor: colors.white,
      borderBottomWidth: 1,
      borderBottomColor: colors.border,
    },
    headerContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      height: 50,
      paddingHorizontal: theme.spacing.sm,
    },
    backButton: {
      padding: theme.spacing.sm,
    },
    menuButton: {
      padding: theme.spacing.sm,
    },
    centerContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      flex: 1,
    },
    headerCenterTitle: {
      fontSize: theme.font.size.regular,
      fontWeight: 'bold',
      color: colors.text,
      flex: 1,
    },
    headerIconContainer: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    iconButton: {
      padding: theme.spacing.sm,
      marginHorizontal: theme.spacing.xs,
    },
    logoContainer: {
      position: 'absolute',
      left: 0,
      right: 0,
      alignItems: 'center',
      zIndex: -1,
    },
    logoImage: {
      height: 30,
      width: 120,
    },
  })
}
