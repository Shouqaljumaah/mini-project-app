import { createStackNavigator } from "@react-navigation/stack";
import LoginScreen from "../src/screens/LoginScreen";
import HomeScreen from "../src/screens/HomeScreen";
import DetailsScreen from "../src/screens/DetailsScreen";

const Stack = createStackNavigator();

export function AppNavigator() {
  return (
    <Stack.Navigator initialRouteName="Login">
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Details" component={DetailsScreen} />
    </Stack.Navigator>
  );
}
