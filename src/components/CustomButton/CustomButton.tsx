import React from 'react'
import { Pressable, Text, StyleSheet, ActivityIndicator } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import { useTheme } from '@/contexts/ThemeContext'
import { useColors } from '@/hooks/useColors'

type ButtonProps = {
  title: string
  onPress: () => void
  startColor?: string
  endColor?: string
  loading?: boolean
  disabled?: boolean
  style?: object
  textStyle?: object
}

const CustomButton = ({
  title,
  onPress,
  startColor = '#239BBC',
  endColor = '#45B4D3',
  loading = false,
  disabled = false,
  style = {},
  textStyle = {},
}: ButtonProps) => {
  const { theme } = useTheme()
  const colors = useColors()

  const styles = StyleSheet.create({
    button: {
      width: 216,
      height: 37,
      justifyContent: 'center',
      alignItems: 'center',
      marginVertical: 5,
    },
    buttonText: {
      color: colors.white,
      fontSize: theme.font.size.large,
      fontWeight: '700',
    },
    disabled: {
      opacity: 0.5,
    },
    gradientContainer: {
      width: '100%',
      height: '100%',
      borderRadius: 50,
      justifyContent: 'center',
      alignItems: 'center',
    },
  })

  return (
    <Pressable
      style={[styles.button, disabled && styles.disabled, style]}
      onPress={onPress}
      disabled={disabled || loading}
    >
      <LinearGradient
        colors={[startColor, endColor]}
        style={styles.gradientContainer}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
      >
        {loading ? (
          <ActivityIndicator color="white" />
        ) : (
          <Text style={[styles.buttonText, textStyle]}>{title}</Text>
        )}
      </LinearGradient>
    </Pressable>
  )
}

export default CustomButton
