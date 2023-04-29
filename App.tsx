import React, { useEffect } from "react";
import { Image, Text, View } from "react-native";
import SplashScreen from "react-native-splash-screen";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import StackHeader from "./src/components/StackHeader";
import MainScreen from "./src/screens/MainScreen";
import CricketMatch from "./src/screens/CricketMatch";
import TennisMatch from "./src/screens/TennisMatch";
import CricketTab from "./src/tabs/mainScreenTabs/CricketTab";
import TennisTab from "./src/tabs/mainScreenTabs/TennisTab";
import TennisData from "./src/tabs/tennisTabScreenTabs/TennisData";

const Stack = createStackNavigator();

const App = () => { 
  useEffect(() => {
    SplashScreen.hide();
  }, []);
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          header: StackHeader,
        }}
      >
        <Stack.Screen name="MainScreen" component={MainScreen} />
        <Stack.Screen name="CricketMathes" component={CricketTab} />
        <Stack.Screen name="TennisTab" component={TennisTab} />
        <Stack.Screen name="TannisDayTab" component={TennisData} />
        <Stack.Screen name="CricketMatch" component={CricketMatch} />
        <Stack.Screen name="TennisMatch" component={TennisMatch} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
