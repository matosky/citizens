import Home from "./pages/home";
import ReportForm from "./components/form";
import IncidentsList from "./components/list";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Report" component={ReportForm} />
        <Stack.Screen name="Incidents" component={IncidentsList} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
