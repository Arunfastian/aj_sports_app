import { View, Text, StyleSheet, ScrollView } from "react-native";
import React, { useState, useEffect } from "react";

const TennisMatchDetails = ({ route }: any) => {
  const { item, tournament } = route.params;
  const [winner, setWinner] = useState("");
  useEffect(() => {}, []);
  return (
    <View style={{ backgroundColor: "snow" }}>
      <View style={styles.summaryContainer}>
        <Text style={styles.summaryTitle}>Match Summary</Text>
        <View style={{ ...styles.summarySubContainer, height: 150 }}>
          <Text style={styles.tossStyles}>
            {tournament.name} {item.round_name}
          </Text>
          <View style={styles.scoresStyles}>
            <Text style={styles.scoreTeam}>{item.home.full_name}</Text>
            <Text style={styles.scoreText}>
              {item?.result?.home_sets ? item.result.home_sets : 0} Sets
            </Text>
          </View>
          <View style={styles.scoresStyles}>
            <Text style={styles.scoreTeam}>{item.away.full_name}</Text>
            <Text style={styles.scoreText}>
              {item?.result?.away_sets ? item.result.away_sets : 0} Sets
            </Text>
          </View>
          <Text style={styles.status}>
            {!item.result && new Date(item.date) < new Date()
              ? "Not Finished!"
              : !item.result && new Date(item.date) > new Date()
              ? "Not Started"
              : item.result.winner_id === item.home_id
              ? `${item.home_player} won the match!`
              : `${item.away_player} won the match!`}
          </Text>
        </View>
      </View>

      {item.result ? (
        <View style={{ ...styles.summaryContainer, height: 300 }}>
          <Text style={styles.summaryTitle}>Sets Details</Text>
          <View style={{ ...styles.summarySubContainer }}>
            <View style={{ flexDirection: "row" }}>
              <Text style={{ flex: 2, textAlign: "center",color: 'red',fontWeight: 'bold'}}></Text>
              <Text style={{ flex: 4, textAlign: "center",fontWeight: 'bold',color: 'red' }}>
                {item.home.full_name}
              </Text>
              <Text style={{ flex: 4, textAlign: "center",fontWeight: 'bold',color: 'red' }}>
                {item.away.full_name}
              </Text>
            </View>
            {item.result.home_set1 && (
              <View style={{ flexDirection: "row" }}>
                <Text style={{ flex: 2, textAlign: "center",color: 'red',fontWeight: 'bold'}}>Set 1</Text>
                <Text style={{ flex: 4, textAlign: "center",color: 'green',fontWeight: 'bold' }}>
                  {item.result.home_set1}
                </Text>
                <Text style={{ flex: 4, textAlign: "center",color: 'green',fontWeight: 'bold' }}>
                  {item.result.away_set1}
                </Text>
              </View>
            )}
            {item.result.home_tb1 && (
              <View style={{ flexDirection: "row" }}>
                <Text style={{ flex: 2, textAlign: "center",color: 'red',fontWeight: 'bold'}}>TB 1</Text>
                <Text style={{ flex: 4, textAlign: "center",color: 'green',fontWeight: 'bold' }}>
                  {item.result.home_tb1}
                </Text>
                <Text style={{ flex: 4, textAlign: "center",color: 'green',fontWeight: 'bold' }}>
                  {item.result.away_tb1}
                </Text>
              </View>
            )}
            {item.result.home_set2 && (
              <View style={{ flexDirection: "row" }}>
                <Text style={{ flex: 2, textAlign: "center",color: 'red',fontWeight: 'bold'}}>Set 2</Text>
                <Text style={{ flex: 4, textAlign: "center",color: 'green',fontWeight: 'bold' }}>
                  {item.result.home_set2}
                </Text>
                <Text style={{ flex: 4, textAlign: "center",color: 'green',fontWeight: 'bold' }}>
                  {item.result.away_set2}
                </Text>
              </View>
            )}
            {item.result.home_tb2 && (
              <View style={{ flexDirection: "row" }}>
                <Text style={{ flex: 2, textAlign: "center",color: 'red',fontWeight: 'bold'}}>TB 2</Text>
                <Text style={{ flex: 4, textAlign: "center",color: 'green',fontWeight: 'bold' }}>
                  {item.result.home_tb2}
                </Text>
                <Text style={{ flex: 4, textAlign: "center",color: 'green',fontWeight: 'bold' }}>
                  {item.result.away_tb2}
                </Text>
              </View>
            )}
            {item.result.home_set3 && (
              <View style={{ flexDirection: "row" }}>
                <Text style={{ flex: 2, textAlign: "center",color: 'red',fontWeight: 'bold'}}>Set 3</Text>
                <Text style={{ flex: 4, textAlign: "center",color: 'green',fontWeight: 'bold' }}>
                  {item.result.home_set3}
                </Text>
                <Text style={{ flex: 4, textAlign: "center",color: 'green',fontWeight: 'bold' }}>
                  {item.result.away_set3}
                </Text>
              </View>
            )}
            {item.result.home_tb3 && (
              <View style={{ flexDirection: "row" }}>
                <Text style={{ flex: 2, textAlign: "center",color: 'red',fontWeight: 'bold'}}>TB 3</Text>
                <Text style={{ flex: 4, textAlign: "center",color: 'green',fontWeight: 'bold' }}>
                  {item.result.home_tb3}
                </Text>
                <Text style={{ flex: 4, textAlign: "center",color: 'green',fontWeight: 'bold' }}>
                  {item.result.away_tb3}
                </Text>
              </View>
            )}
            {item.result.home_set4 && (
              <View style={{ flexDirection: "row" }}>
                <Text style={{ flex: 2, textAlign: "center",color: 'red',fontWeight: 'bold'}}>Set 4</Text>
                <Text style={{ flex: 4, textAlign: "center",color: 'green',fontWeight: 'bold' }}>
                  {item.result.home_set4}
                </Text>
                <Text style={{ flex: 4, textAlign: "center",color: 'green',fontWeight: 'bold' }}>
                  {item.result.away_set4}
                </Text>
              </View>
            )}
            {item.result.home_tb4 && (
              <View style={{ flexDirection: "row" }}>
                <Text style={{ flex: 2, textAlign: "center",color: 'red',fontWeight: 'bold'}}>TB 4</Text>
                <Text style={{ flex: 4, textAlign: "center",color: 'green',fontWeight: 'bold' }}>
                  {item.result.home_tb4}
                </Text>
                <Text style={{ flex: 4, textAlign: "center",color: 'green',fontWeight: 'bold' }}>
                  {item.result.home_tb4}
                </Text>
              </View>
            )}
            {item.result.home_set5 && (
              <View style={{ flexDirection: "row" }}>
                <Text style={{ flex: 2, textAlign: "center",color: 'red',fontWeight: 'bold'}}>Set 5</Text>
                <Text style={{ flex: 4, textAlign: "center",color: 'green',fontWeight: 'bold' }}>
                  {item.result.home_set5}
                </Text>
                <Text style={{ flex: 4, textAlign: "center",color: 'green',fontWeight: 'bold' }}>
                  {item.result.away_set5}
                </Text>
              </View>
            )}
            {item.result.home_tb5 && (
              <View style={{ flexDirection: "row" }}>
                <Text style={{ flex: 2, textAlign: "center",color: 'red',fontWeight: 'bold'}}>TB 5</Text>
                <Text style={{ flex: 4, textAlign: "center",color: 'green',fontWeight: 'bold' }}>
                  {item.result.home_tb5}
                </Text>
                <Text style={{ flex: 4, textAlign: "center",color: 'green',fontWeight: 'bold' }}>
                  {item.result.away_tb5}
                </Text>
              </View>
            )}
            {item.result.home_sets && (
              <View style={{ flexDirection: "row" }}>
                <Text style={{ flex: 2, textAlign: "center",color: 'red',fontWeight: 'bold'}}>Total</Text>
                <Text style={{ flex: 4, textAlign: "center",color: 'green',fontWeight: 'bold' }}>
                  {item.result.home_sets}
                </Text>
                <Text style={{ flex: 4, textAlign: "center",color: 'green',fontWeight: 'bold' }}>
                  {item.result.away_sets}
                </Text>
              </View>
            )}
          </View>
        </View>
      ) : (
        <View style={styles.summaryContainer}>
          <Text style={{ ...styles.summaryTitle, color: "red" }}>
            Score Card Not Available Yet!
          </Text>
        </View>
      )}
    </View>
  );
};

export default TennisMatchDetails;

const styles = StyleSheet.create({
  summaryContainer: {
    marginTop: 18,
    elevation: 3,
    height: 200,
  },
  summarySubContainer: {
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
    paddingRight: 24,
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
