import { View, Text, Button, StyleSheet } from "react-native";
import React, { useState, useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import CricketMatchInfo from "../tabs/cricketMatchScreenTabs/CricketMatchInfo";
import CricketMatchDetails from "../tabs/cricketMatchScreenTabs/CricketMatchDetails";
import CricketMatchScoreCard from "../tabs/cricketMatchScreenTabs/CricketMatchScoreCard";
//const initMatch = require('../../completedMatch.json');
const Tab = createMaterialTopTabNavigator();
const CricketMatch = ({route}:any) => {

  const [matchData, setMatchData] = useState(route.params.matchData);

  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: styles.tabBarStyles,
        tabBarActiveTintColor: "white",
        tabBarInactiveTintColor: "white",
        tabBarLabelStyle: styles.labelStyles,
        tabBarIndicatorStyle: { backgroundColor: "white" },
      }}
      initialRouteName="Details"
    >
      <Tab.Screen
        name="Info"
        component={CricketMatchInfo}
        initialParams={{ matchData }}
      />
      <Tab.Screen
        name="Details"
        component={CricketMatchDetails}
        initialParams={{ matchData }}
      />
      <Tab.Screen
        name="Scorecard"
        component={CricketMatchScoreCard}
        initialParams={{ matchData }}
      />
    </Tab.Navigator>
  );
};

export default CricketMatch;

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
