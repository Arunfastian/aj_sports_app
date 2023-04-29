import { View, Text } from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import MaterialIcon from "react-native-vector-icons/MaterialIcons";
import TennisData from "../tennisTabScreenTabs/TennisData";

const Tab = createBottomTabNavigator();
const TennisTab = ({ navigation }: any) => {
  return (
    <Tab.Navigator
      initialRouteName="Today"
      screenOptions={{
        headerShown: false,
        tabBarLabelStyle: { fontWeight: "bold", fontSize: 14 },
        tabBarStyle: {
          backgroundColor: "#07da63",
          alignItems: "center",
          justifyContent: "center",
        },
        tabBarActiveTintColor: "white",
        tabBarInactiveTintColor: "white",
        tabBarActiveBackgroundColor: "lightgreen",
      }}
    >
      <Tab.Screen
        name="Today"
        component={TennisData}
        initialParams={{ day: "today" }}
        options={{
          tabBarIcon(props) {
            return (
              <MaterialIcon
                name={"calendar-today"}
                size={24}
                color={props.focused ? "white" : "white"}
              />
            );
          },
        }}
      />
      <Tab.Screen
        name="Yesterday"
        component={TennisData}
        initialParams={{ day: "Yesterday" }}
        options={{
          tabBarIcon(props) {
            return (
              <MaterialIcon
                name={"today"}
                size={24}
                color={props.focused ? "white" : "white"}
              />
            );
          },
        }}
      />
    </Tab.Navigator>
  );
};

export default TennisTab;
