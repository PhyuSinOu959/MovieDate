import React from 'react'
import {
  TouchableOpacity,
  Text,
  StyleSheet,
  ViewStyle,
  TextStyle,
} from 'react-native'
import { Colors } from '../../constants/Colors'

interface ButtonProps {
  title: string
  onPress: () => void
  variant?: 'primary' | 'secondary'
  style?: ViewStyle
  textStyle?: TextStyle
}

export const Button: React.FC<ButtonProps> = ({
  title,
  onPress,
  variant = 'primary',
  style,
  textStyle,
}) => {
  return (
    <TouchableOpacity
      style={[
        styles.button,
        variant === 'secondary' ? styles.secondaryButton : styles.primaryButton,
        style,
      ]}
      onPress={onPress}
    >
      <Text
        style={[
          styles.buttonText,
          variant === 'secondary'
            ? styles.secondaryButtonText
            : styles.primaryButtonText,
          textStyle,
        ]}
      >
        {title}
      </Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  button: {
    padding: 16,
    borderRadius: 4,
    alignItems: 'center',
    justifyContent: 'center',
  },
  primaryButton: {
    backgroundColor: Colors.light.black,
  },
  secondaryButton: {
    backgroundColor: Colors.light.grey1,
  },
  buttonText: {
    fontSize: 16,
  },
  primaryButtonText: {
    color: Colors.light.white,
  },
  secondaryButtonText: {
    color: Colors.light.white,
  },
})
