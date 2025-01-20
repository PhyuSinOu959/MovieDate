import { ComponentType } from "react"
import { NativeStackNavigationOptions } from "@react-navigation/native-stack"
import MainScreen from "components/MainScreen"
import MovieDetailScreen from "@/screens/Home/featureComponent/MovieDetail/MovieDetail"
import ProfileScreen from "@/screens/Profile/Profile"
import FavListScreen from "@/screens/Fav/FavList"

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
    component: MovieDetailScreen,
    options: {
      title: 'Movie Details',
    },
  },
  PROFILE: {
    name: 'Profile',
    component: ProfileScreen,
    options: {
      title: 'Profile',
    },
  },
  FAV_LIST: {
    name: 'FavList',
    component: FavListScreen,
    options: {
      title: 'Fav List',
    },
  },
}