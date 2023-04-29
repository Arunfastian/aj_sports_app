import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import CricketTab from "../tabs/mainScreenTabs/CricketTab";
import TennisTab from "../tabs/mainScreenTabs/TennisTab";
import { TabBarIndicator } from "react-native-tab-view";

const TopTab = createMaterialTopTabNavigator();

const MainScreen = ({ navigation }: any) => {
  return (
    <TopTab.Navigator
      screenOptions={{
        tabBarStyle: styles.tabBarStyles,
        tabBarActiveTintColor: "white",
        tabBarInactiveTintColor: "white",
        tabBarLabelStyle: styles.labelStyles,
        tabBarIndicatorStyle: { backgroundColor: "white" },
      }}
    >
      <TopTab.Screen name="Cricket" component={CricketTab} />
      <TopTab.Screen name="Tennis" component={TennisTab} />
    </TopTab.Navigator>
  );
};

export default MainScreen;

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
