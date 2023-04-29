import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import TennisMatchInfo from "../tabs/tennisMatchScreenTabs/TennisMatchInfo";
import TennisMatchDetails from "../tabs/tennisMatchScreenTabs/TennisMatchDetails";

const Tab = createMaterialTopTabNavigator();
const TennisMatch = ({ route }: any) => {
  const { item, tournament } = route.params;
  return (
    <Tab.Navigator 
    screenOptions={{
      tabBarStyle: styles.tabBarStyles,
      tabBarActiveTintColor: "white",
      tabBarInactiveTintColor: "white",
      tabBarLabelStyle: styles.labelStyles,
      tabBarIndicatorStyle: { backgroundColor: "white" },
    }}
    initialRouteName="MatchDetails"
    >
      <Tab.Screen name="Info" component={TennisMatchInfo} initialParams={{item,tournament}}/>
      <Tab.Screen name="MatchDetails" component={TennisMatchDetails} initialParams={{item,tournament}}/>
    </Tab.Navigator>
  );
};

export default TennisMatch;
const styles = StyleSheet.create({
  tabBarStyles: {
    //backgroundColor: '#3B3B3B',
    backgroundColor: "#07da63",
    fontWeight: "bold",
  },
  labelStyles: {
    fontWeight: "bold",
    color: "white",
  },
});