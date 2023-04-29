import { View, Text, Image, StyleSheet } from "react-native";
import React from "react";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";

const ScoreIcon = require("../assets/img/score.png");
const WhiteScoreIcon = require("../assets/img/white_score.png");
const StackHeader = (props: any) => {
  const styles = StyleSheet.create({
    headerContainer: {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      paddingHorizontal: 8,
      //backgroundColor: "#3B3B3B",
      backgroundColor: "#07da63",
      height: 80,
    },
    iconStyles: {
      width: 60,
      height: 60,
    },
  });
  return (
    <View style={styles.headerContainer}>
      <Image source={WhiteScoreIcon} style={styles.iconStyles} />
      {/* <View>
        <MaterialIcons name="nightlight-round" size={25} color={"white"} />
      </View> */}
    </View>
  );
  //wb-sunny
  //nightlight-round
};

export default StackHeader;
