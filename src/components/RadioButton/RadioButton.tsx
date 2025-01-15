import React from 'react'
import {
  View,
  Text,
  Pressable,
  StyleSheet,
  StyleProp,
  ViewStyle,
  TextStyle,
} from 'react-native'
import { createStyles } from './styles'

interface RadioButtonProps {
  label: string
  selected?: boolean
  onPress?: () => void
  disabled?: boolean
  containerStyle?: StyleProp<ViewStyle>
  labelStyle?: StyleProp<TextStyle>
  size?: number
  color?: string
  error?: boolean
  required?: boolean
}

const RadioButton = ({
  label,
  selected = false,
  onPress,
  disabled = false,
  containerStyle,
  labelStyle,
  size = 20,
  color = '#000',
  error = false,
  required = false,
}: RadioButtonProps) => {
  const styles = createStyles()
  const circleSize = {
    width: size,
    height: size,
    borderRadius: size / 2,
  }

  const innerCircleSize = {
    width: size * 0.6,
    height: size * 0.6,
    borderRadius: (size * 0.6) / 2,
  }

  return (
    <Pressable
      style={[styles.container, containerStyle]}
      onPress={onPress}
      disabled={disabled}
    >
      <View
        style={[
          styles.circle,
          circleSize,
          {
            borderColor: error ? 'red' : disabled ? '#ccc' : color,
          },
        ]}
      >
        {selected && (
          <View
            style={[
              styles.innerCircle,
              innerCircleSize,
              {
                backgroundColor: error ? 'red' : disabled ? '#ccc' : color,
              },
            ]}
          />
        )}
      </View>
      <View style={styles.labelContainer}>
        <Text
          style={[
            styles.label,
            labelStyle,
            disabled && styles.disabledLabel,
            error && styles.errorLabel,
          ]}
        >
          {label}
        </Text>
        {required && <Text style={styles.required}>*</Text>}
      </View>
    </Pressable>
  )
}

export default RadioButton
