import {
  View,
  Text,
  Button,
  StyleSheet,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import React from "react";
import { useState, useEffect } from "react";
import { FlatList, ScrollView } from "react-native-gesture-handler";
const initFixtures = require("../../../cricketFixtures.json");
const initResults = require("../../../cricketResults.json");
const CricketTab = ({ navigation }: any) => {
  const initLiveFixtures: any[] = [];
  const initFixtures: any[] = [];
  const initResults: any[] = [];

  const [fixtures, setFixtures] = useState(initFixtures);
  const [liveFixtures, setLiveFixtures] = useState(initLiveFixtures);
  const [results, setResults] = useState(initResults);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const options = {
          method: "GET",
          headers: {
            "content-type": "application/octet-stream",
            "X-RapidAPI-Key":
              "d761f8dffcmsh5f1792a854d26b3p1d15f8jsn1a41cb6e180a",
            "X-RapidAPI-Host": "cricket-live-data.p.rapidapi.com",
          },
        };
        const today = new Date();
        const tomorrow = new Date(today.getTime() + 24 * 60 * 60 * 1000);
        const yesterday = new Date(today.getTime() - 24 * 60 * 60 * 1000);

        const toPKT = (date: any) =>
          new Date(date.getTime() + 5 * 60 * 60 * 1000);

        const todayFormatted = toPKT(today).toISOString().slice(0, 10);
        const tomorrowFormatted = toPKT(tomorrow).toISOString().slice(0, 10);
        const yesterdayFormatted = toPKT(yesterday).toISOString().slice(0, 10);

        const [yesterdayResponse, todayResponse, tomorrowResponse] =
          await Promise.all([
            fetch(
              `https://cricket-live-data.p.rapidapi.com/results-by-date/${yesterdayFormatted}`,
              options
            ),
            fetch(
              `https://cricket-live-data.p.rapidapi.com/fixtures-by-date/${todayFormatted}`,
              options
            ),
            fetch(
              `https://cricket-live-data.p.rapidapi.com/fixtures-by-date/${tomorrowFormatted}`,
              options
            ),
          ]);

        if (
          !yesterdayResponse.ok ||
          !todayResponse.ok ||
          !tomorrowResponse.ok
        ) {
          throw new Error("Fetch Request Error");
        }

        const [yesterdayData, todayData, tomorrowData] = await Promise.all([
          yesterdayResponse.json(),
          todayResponse.json(),
          tomorrowResponse.json(),
        ]);
        // console.log("Yesteday Data: ",yesterdayData.results[0]);
        // console.log("Today Data: ",todayData.results[0]);
        // console.log("Tomorrow Data: ",tomorrowData.results[0]);
        setResults(yesterdayData.results);
        setFixtures([...todayData.results, tomorrowData.results]);
        setLoading(false);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);

  const MatchItem = (ObjectItem: any) => {
    const { item, index } = ObjectItem;
    item.status =
      item.status === "Fixture" && new Date(item.date) < new Date()
        ? "Live"
        : item.status;
    const styles = StyleSheet.create({
      container: {
        flex: 1,
        height: 120,
        width: 300,
        marginHorizontal: 12,
        paddingHorizontal: 8,
        paddingVertical: 8,
        marginTop: 4,
        backgroundColor: "#F8F2ED",
        rowGap: 4,
        justifyContent: "space-around",
        elevation: 3,
        borderRadius: 12,
      },
      textStyles: {
        color: "black",
      },
      dateStyles: {
        color: "red",
        fontSize: 12,
      },
      teamStyles: {
        fontSize: 16,
        fontWeight: "bold",
      },
      statusStyles: {
        fontSize: 12,
        fontWeight: "700",
        color:
          item.status === "Complete"
            ? "green"
            : item.status === "Fixture"
            ? "orange"
            : "red",
      },
      resultStyles: {
        color: "#FF8A8A",
      },
    });
    const date = new Date(item.date);
    const handlePress = () => {
      const options = {
        method: "GET",
        headers: {
          "content-type": "application/octet-stream",
          "X-RapidAPI-Key":
            "d761f8dffcmsh5f1792a854d26b3p1d15f8jsn1a41cb6e180a",
          "X-RapidAPI-Host": "cricket-live-data.p.rapidapi.com",
        },
      };
      setLoading(true);
      fetch(
        `https://cricket-live-data.p.rapidapi.com/match/${item.id}`,
        options
      )
        .then((response) => response.json())
        .then((result) =>
          navigation.navigate("CricketMatch", { matchData: result.results })
        )
        .catch((error) => console.error(error))
        .finally(() => {
          setLoading(false);
        });
    };
    return (
      <TouchableOpacity style={styles.container} onPress={handlePress}>
        <Text style={styles.dateStyles}>
          {"" +
            date.getDate() +
            "-" +
            (date.getMonth() + 1) +
            "-" +
            date.getFullYear() +
            " " +
            (date.getUTCHours() + 5) +
            ":" +
            (date.getUTCMinutes() < 10
              ? "0" + date.getUTCMinutes()
              : date.getUTCMinutes()) +
            " " +
            "PST"}
        </Text>
        <View>
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <Text style={styles.teamStyles}>{item?.home?.name}</Text>
            <Text style={styles.teamStyles}>{item?.home?.code}</Text>
          </View>
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <Text style={styles.teamStyles}>{item?.away?.name}</Text>
            <Text style={styles.teamStyles}>{item?.away?.code}</Text>
          </View>
        </View>
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <Text style={styles.statusStyles}>{item?.status}</Text>
          <Text style={styles.resultStyles}>{item?.result?.slice(0, 27)}</Text>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View>
      {loading && <ActivityIndicator size={"large"} color={"lightgreen"} />}
      <ScrollView style={styles.mainContainer}>
        <View style={styles.resultContainer}>
          <Text style={styles.title}>Fixtures</Text>
          <FlatList data={fixtures} renderItem={MatchItem} horizontal />
        </View>
        <View style={styles.resultContainer}>
          <Text style={styles.title}>Results</Text>
          <FlatList data={results} renderItem={MatchItem} horizontal />
        </View>
      </ScrollView>
    </View>
  );
};

export default CricketTab;
const styles = StyleSheet.create({
  mainContainer: {},
  headerStyles: {},
  resultContainer: {
    marginTop: 18,
    backgroundColor: "snow",
    elevation: 3,
    height: 200,
  },
  title: {
    marginTop: 12,
    textAlign: "left",
    fontSize: 16,
    fontWeight: "bold",
    paddingHorizontal: 14,
    color: "black",
  },
});
