import { View, Text, StyleSheet,FlatList } from 'react-native'
import React from 'react'

const CricketMatchScoreCard = ({route}:any) => {
    const {matchData} = route.params;
    const renderBatting = (ObjectItem: any) => {
        const { item, index } = ObjectItem;
        return (
          <View style={styles.row}>
            <View style={{ flex: 6 }}>
              <Text style={{ textAlign: "center",color: 'blue' }}>{item?.player_name}</Text>
              <Text style={{ textAlign: "center" }}>
                {item?.how_out
                  ? item?.how_out
                  : matchData?.live_details?.result === "No"
                  ? "Still to bat"
                  : "Did not bat"}
              </Text>
            </View>
            <Text style={{ flex: 1, textAlign: "center" }}>
              {item?.runs ? item?.runs : 0}
            </Text>
            <Text style={{ flex: 1, textAlign: "center" }}>
              {item?.balls ? item?.balls : 0}
            </Text>
            <Text style={{ flex: 2, textAlign: "center" }}>
              {item?.strike_rate ? item?.strike_rate : 0}
            </Text>
          </View>
        );
      };
    
      const renderBowling = (ObjectItem: any) => {
        const { item, index } = ObjectItem;
        return (
          <View style={styles.row}>
            <Text style={{ flex: 4, textAlign: "center",color: 'blue' }}>
              {item?.player_name}
            </Text>
            <Text style={{ flex: 1, textAlign: "center" }}>
              {item?.overs ? item?.overs : 0}
            </Text>
            <Text style={{ flex: 1, textAlign: "center" }}>
              {item?.maidens ? item?.maidens : 0}
            </Text>
            <Text style={{ flex: 1, textAlign: "center" }}>
              {item?.runs_conceded ? item?.runs_conceded : 0}
            </Text>
            <Text style={{ flex: 1, textAlign: "center" }}>
              {item?.wickets ? item?.wickets : 0}
            </Text>
            <Text style={{ flex: 2, textAlign: "center" }}>
              {item?.economy ? item?.economy : 0}
            </Text>
          </View>
        );
      };
    
      const renderScorecard = (ObjectItem: any) => {
        const { item, index } = ObjectItem;
    
        return (
          <View>
            <Text style={styles.inningTitle}>{item.title}</Text>
            <View style={styles.headerRow}>
              <Text
                style={{
                  flex: 6,
                  textAlign: "center",
                  fontWeight: "bold",
                  color: "white",
                }}
              >
                Batter
              </Text>
              <Text
                style={{
                  flex: 1,
                  textAlign: "center",
                  fontWeight: "bold",
                  color: "white",
                }}
              >
                R
              </Text>
              <Text
                style={{
                  flex: 1,
                  textAlign: "center",
                  fontWeight: "bold",
                  color: "white",
                }}
              >
                B
              </Text>
              <Text
                style={{
                  flex: 2,
                  textAlign: "center",
                  fontWeight: "bold",
                  color: "white",
                }}
              >
                SR
              </Text>
            </View>
            <FlatList data={item.batting} renderItem={renderBatting} />
            <FlatList data={item.still_to_bat} renderItem={renderBatting} />
            <View style={{ rowGap: 12 }}>
              <View>
                <Text>Fall Of Wickets:</Text>
                <Text>{ item.fow}</Text>
              </View>
              <View>
                <Text>
                  Extras:
                </Text>
                <Text>
                  {item.extras_detail +"   " +  " Total: " +  item.extras}
                </Text>
              </View>
            </View>
            <View style={styles.headerRow}>
              <Text
                style={{
                  flex: 4,
                  textAlign: "center",
                  color: "white",
                  fontWeight: "bold",
                }}
              >
                Bowler
              </Text>
              <Text
                style={{
                  flex: 1,
                  textAlign: "center",
                  color: "white",
                  fontWeight: "bold",
                }}
              >
                O
              </Text>
              <Text
                style={{
                  flex: 1,
                  textAlign: "center",
                  color: "white",
                  fontWeight: "bold",
                }}
              >
                M
              </Text>
              <Text
                style={{
                  flex: 1,
                  textAlign: "center",
                  color: "white",
                  fontWeight: "bold",
                }}
              >
                R
              </Text>
              <Text
                style={{
                  flex: 1,
                  textAlign: "center",
                  color: "white",
                  fontWeight: "bold",
                }}
              >
                W
              </Text>
              <Text
                style={{
                  flex: 2,
                  textAlign: "center",
                  color: "white",
                  fontWeight: "bold",
                }}
              >
                ER
              </Text>
            </View>
            <FlatList data={item.bowling} renderItem={renderBowling} />
          </View>
        );
      };
    
  return (
    <View>
      <View style={styles.scoreCardContaner}>
        <Text style={styles.summaryTitle}>Scorecards</Text>
        <FlatList
          data={matchData?.live_details?.scorecard}
          renderItem={renderScorecard}
        />
      </View>
    </View>
  )
}

export default CricketMatchScoreCard

const styles = StyleSheet.create({
    summaryContainer: {
      marginTop: 18,
      backgroundColor: "snow",
      elevation: 3,
      height: 200,
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
      height: "100%",
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
  