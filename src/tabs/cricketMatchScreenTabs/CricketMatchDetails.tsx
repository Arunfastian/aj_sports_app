import { View, Text, StyleSheet, ScrollView } from "react-native";
import React, { useEffect } from "react";
import { FlatList } from "react-native-gesture-handler";

const CricketMatchDetails = ({ route }: any) => {
  const { matchData } = route.params;

  return (
    <View style={{ backgroundColor: "snow" }}>
      <View style={styles.summaryContainer}>
        <Text style={styles.summaryTitle}>Match Summary</Text>
        <View style={styles.summarySubContainer}>
          <Text style={styles.tossStyles}>
            {matchData?.live_details?.match_summary?.toss}
          </Text>
          <View style={styles.scoresStyles}>
            <Text style={styles.scoreTeam}>{matchData.fixture?.home.name}</Text>
            <Text style={styles.scoreText}>
              {matchData?.live_details?.match_summary?.home_scores !== ""
                ? matchData?.live_details?.match_summary?.home_scores
                : matchData.live_details.match_summary.result === "Yes"
                ? "Did Not Bat"
                : "Yet to bat"}
            </Text>
          </View>
          <View style={styles.scoresStyles}>
            <Text style={styles.scoreTeam}>{matchData.fixture?.away.name}</Text>
            <Text style={styles.scoreText}>
              {matchData?.live_details?.match_summary?.away_scores !== ""
                ? matchData?.live_details?.match_summary?.away_scores
                : "Yet to bat"}
            </Text>
          </View>
          <Text style={styles.status}>
            {matchData?.live_details?.match_summary?.status}
          </Text>
        </View>
      </View>
    </View>
  );
};

export default CricketMatchDetails;

const styles = StyleSheet.create({
  summaryContainer: {
    marginTop: 18,
    elevation: 3,
    height: "100%",
  },
  summarySubContainer: {
    height: 150,
    width: "100%",
    paddingHorizontal: 8,
    paddingVertical: 8,
    marginTop: 4,
    backgroundColor: "#F8F2ED",
    rowGap: 2,
    justifyContent: "space-around",
    elevation: 3,
    borderRadius: 12,
  },
  scoreCardContaner: {
    marginTop: 18,
    backgroundColor: "snow",
    elevation: 3,
    height: "120%",
  },
  scoresStyles: {
    flexDirection: "row",
    justifyContent: "space-between",
    columnGap: 24,
  },
  tossStyles: {
    color: "red",
    fontSize: 14,
    fontWeight: "700",
  },
  scoreTeam: {
    fontSize: 16,
    fontWeight: "bold",
  },
  scoreText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "orange",
  },
  status: {
    fontSize: 14,
    fontWeight: "700",
    color: "green",
  },
  summaryTitle: {
    textAlign: "left",
    fontSize: 20,
    fontWeight: "bold",
    paddingHorizontal: 14,
    color: "black",
  },
  headerRow: {
    flexDirection: "row",
    width: "100%",
    height: 40,
    backgroundColor: "lightgreen",
    justifyContent: "flex-start",
    alignItems: "center",
    columnGap: 10,
    borderBottomColor: "black",
    borderBottomWidth: 1,
    color: "white",
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
  inningTitle: {
    backgroundColor: "lightgreen",
    height: 40,
    fontSize: 18,
    textAlign: "center",
    color: "white",
    fontWeight: "bold",
  },
});
