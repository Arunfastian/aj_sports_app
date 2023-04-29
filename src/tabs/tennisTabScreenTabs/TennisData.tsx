import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import React, { useEffect, useState } from "react";
import { FlatList } from "react-native-gesture-handler";
// const tennisToday = require("../../../tennisToday.json");
// const tennisYesterday = require("../../../tannisYesterday.json");
const TennisData = ({ route, navigation }: any) => {
  const { day } = route.params;
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const today = new Date();
      const tomorrow = new Date(today.getTime() + 24 * 60 * 60 * 1000);
      const yesterday = new Date(today.getTime() - 24 * 60 * 60 * 1000);

      const toPKT = (date: any) =>
        new Date(date.getTime() + 5 * 60 * 60 * 1000);

      const todayPKT = toPKT(today).toISOString().slice(0, 10);
      const tomorrowPKT = toPKT(tomorrow).toISOString().slice(0, 10);
      const yesterdayPKT = toPKT(yesterday).toISOString().slice(0, 10);
      const date = day === "today" ? todayPKT : yesterdayPKT;
      const options = {
        method: "GET",
        headers: {
          "content-type": "application/octet-stream",
          "X-RapidAPI-Key":
            "d761f8dffcmsh5f1792a854d26b3p1d15f8jsn1a41cb6e180a",
          "X-RapidAPI-Host": "tennis-live-data.p.rapidapi.com",
        },
      };
      fetch(
        `https://tennis-live-data.p.rapidapi.com/matches-by-date/${date}`,
        options
      )
        .then((response) => response.json())
        .then((result) => {
          setData(result.results);
        })
        .catch((error) => console.error(error))
        .finally(() => {
          setLoading(false);
        });
    };
    fetchData();
  }, []);

  const renderMatch = (ObjectItem: any, tournament: any) => {
    const { item, index } = ObjectItem;
    const styles = StyleSheet.create({
      matchContainer: {
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
      roundText: {
        color: "red",
        fontSize: 12,
      },
      playerStyles: {
        fontSize: 14,
        fontWeight: "bold",
      },
      statusStyles: {
        fontSize: 12,
        fontWeight: "700",
        color:
          item?.status === "finished"
            ? "green"
            : item?.status === "notstarted"
            ? "orange"
            : "red",
      },
    });

    return (
      <TouchableOpacity
        style={styles.matchContainer}
        onPress={() => navigation.navigate("TennisMatch", { item, tournament })}
      >
        <View
          style={{
            flexDirection: "row",
            justifyContent: "flex-start",
            columnGap: 12,
          }}
        >
          <Text style={styles.roundText}>{item?.round_name}</Text>
          <Text style={styles.roundText}>
            {`${new Date(item?.date).getUTCHours()}:${
              new Date(item?.date).getUTCMinutes() < 10
                ? "0" + new Date(item?.date).getUTCMinutes()
                : new Date(item?.date).getUTCMinutes()
            } PST`}
          </Text>
        </View>
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <Text style={styles.playerStyles}>{item?.home?.full_name}</Text>
          <Text style={styles.playerStyles}>{item?.home?.country}</Text>
        </View>
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <Text style={styles.playerStyles}>{item?.away?.full_name}</Text>
          <Text style={styles.playerStyles}>{item?.away?.country}</Text>
        </View>
        <Text style={styles.statusStyles}>{item?.status}</Text>
      </TouchableOpacity>
    );
  };

  const renderTournament = (ObjectItem: any) => {
    const { item, index } = ObjectItem;
    const styles = StyleSheet.create({
      tournamentContainer: {
        marginTop: 18,
        backgroundColor: "snow",
        elevation: 3,
        height: 200,
      },
      tournamentTitle: {
        marginTop: 12,
        textAlign: "left",
        fontSize: 16,
        fontWeight: "bold",
        paddingHorizontal: 14,
        color: "black",
      },
    });
    return (
      <View style={styles.tournamentContainer}>
        <Text style={styles.tournamentTitle}>{item?.tournament.name}</Text>
        <FlatList
          data={item?.matches}
          renderItem={(ObjectItem: any) =>
            renderMatch(ObjectItem, item?.tournament)
          }
          horizontal
        />
      </View>
    );
  };
  return (
    <View>
      {loading && <ActivityIndicator size={"large"} />}
      <FlatList data={data} renderItem={renderTournament} />
    </View>
  );
};

export default TennisData;
