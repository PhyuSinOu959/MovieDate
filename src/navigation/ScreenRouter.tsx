import { ComponentType } from "react"
import { NativeStackNavigationOptions } from "@react-navigation/native-stack"
import MainScreen from "components/MainScreen"

interface Screen {
    name: string
    component: ComponentType<any>
    options?: NativeStackNavigationOptions
    initialParams?: Partial<object | undefined>
  }
  
  type Screens = {
    [key: string]: Screen
  }
export const SCREENS: Screens = {
  HOME: {
    name: 'Home',
    component: MainScreen,
    options: {
      title: 'Home',
    //   headerShown: false,
    },
  },
  MOVIE_DETAILS: {
    name: 'MovieDetails',
    component: MovieDetailsScreen,
    options: {
      title: 'Movie Details',
    },
  },
}