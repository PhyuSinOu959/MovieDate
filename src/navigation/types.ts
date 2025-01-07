import React from 'react'
import {
  NavigationProp,
  ParamListBase,
  RouteProp,
} from '@react-navigation/native'
import { NativeStackNavigationOptions } from '@react-navigation/native-stack'
import { SCREENS } from './ScreenRouter'

export interface IRouting {
  name: string
  component:
    | React.ComponentType<{}>
    | React.ComponentType<{
        route: RouteProp<ParamListBase, string>
        navigation: any
      }>
  options?:
    | NativeStackNavigationOptions
    | ((props: {
        route: RouteProp<ParamListBase, string>
        navigation: any
      }) => NativeStackNavigationOptions)
  initialParams?: Partial<object | undefined>
}

export type RootStackParamList = {
  [K in keyof typeof SCREENS]: undefined
}

// Then use it in your components:
type HeaderBarProps = {
  navigation: NavigationProp<RootStackParamList>
  title?: string
  showBackButton?: boolean
}
