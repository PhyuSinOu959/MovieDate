import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { SCREENS } from "./ScreenRouter";

const Stack = createNativeStackNavigator();

const RootNavigation = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name={SCREENS.HOME.name} component={SCREENS.HOME.component} />
                <Stack.Screen name={SCREENS.MOVIE_DETAILS.name} component={SCREENS.MOVIE_DETAILS.component} />
                <Stack.Screen name={SCREENS.PROFILE.name} component={SCREENS.PROFILE.component} />
                <Stack.Screen name={SCREENS.FAV_LIST.name} component={SCREENS.FAV_LIST.component} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default RootNavigation;