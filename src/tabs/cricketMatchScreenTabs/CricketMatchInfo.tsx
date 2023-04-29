import { View, Text, StyleSheet } from "react-native";
import React from "react";

const CricketMatchInfo = ({ route }: any) => {
  const { matchData } = route.params;
  return (
    <View style={styles.infoContainer}>
      <Text style={styles.summaryTitle}>Match Info</Text>
      <View style={{ marginTop: 8 }}>
        <View style={styles.row}>
          <Text style={styles.rowTagStyles}>Match Title: </Text>
          <Text>{matchData?.fixture?.dates[0].match_subtitle}</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.rowTagStyles}>Venue: </Text>
          <Text>{matchData?.fixture?.venue}</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.rowTagStyles}>Start Date: </Text>
          <Text>
            {"" +
              new Date(matchData?.fixture?.start_date).getUTCFullYear() +
              "-" +
              (new Date(matchData?.fixture?.start_date).getUTCMonth() + 1) +
              "-" +
              new Date(matchData?.fixture?.start_date).getUTCDate() +
              "   " +
              (new Date(matchData?.fixture?.start_date).getUTCHours() + 5) +
              ":" +
              (new Date(matchData?.fixture?.start_date).getUTCMinutes() < 10
                ? "0" + new Date(matchData?.fixture?.start_date).getUTCMinutes()
                : new Date(matchData?.fixture?.start_date).getUTCMinutes()) +
              " PST"}
          </Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.rowTagStyles}>End Date: </Text>
          <Text>
            {"" +
              new Date(matchData?.fixture?.end_date).getUTCFullYear() +
              "-" +
              (new Date(matchData?.fixture?.end_date).getUTCMonth() + 1) +
              "-" +
              new Date(matchData?.fixture?.end_date).getUTCDate() +
              "   " +
              (new Date(matchData?.fixture?.end_date).getUTCHours() + 5) +
              ":" +
              (new Date(matchData?.fixture?.end_date).getUTCMinutes() < 10
                ? "0" + new Date(matchData?.fixture?.end_date).getUTCMinutes()
                : new Date(matchData?.fixture?.end_date).getUTCMinutes()) +
              " PST"}
          </Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.rowTagStyles}>Home Team: </Text>
          <Text>{matchData?.fixture?.home.name}</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.rowTagStyles}>Away Team: </Text>
          <Text>{matchData?.fixture?.away.name}</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.rowTagStyles}>Series: </Text>
          <Text>{matchData?.fixture?.series.series_name}</Text>
        </View>
      </View>
    </View>
  );
};

export default CricketMatchInfo;
const styles = StyleSheet.create({
  infoContainer: {
    marginTop: 18,
    backgroundColor: "snow",
    elevation: 3,
    height: 500,
  },
  row: {
    flexDirection: "row",
    width: "100%",
    height: 60,
    backgroundColor: "#F8F2ED",
    justifyContent: "flex-start",
    alignItems: "center",
    columnGap: 10,
    borderBottomColor: "black",
    borderBottomWidth: 1,
  },
  summaryTitle: {
    textAlign: "left",
    fontSize: 20,
    fontWeight: "bold",
    paddingHorizontal: 14,
    color: "black",
  },
  rowTagStyles: {
    color: "red",
  },
});
