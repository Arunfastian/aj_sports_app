import { View, Text, ScrollView, StyleSheet } from "react-native";
import React from "react";

const TennisMatchInfo = ({ route }: any) => {
  const { item, tournament } = route.params;
  return (
    <ScrollView>
      {/* Tournament Container */}
      <View style={styles.infoContainer}>
        <Text style={styles.summaryTitle}>Tournament Info</Text>
        <View style={{ marginTop: 8 }}>
          {/* Info Row */}
          <View style={styles.row}>
            <Text style={styles.rowTagStyles}>Name:</Text>
            <Text>{tournament.name}</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.rowTagStyles}>Season:</Text>
            <Text>{tournament.season}</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.rowTagStyles}>Country:</Text>
            <Text>{tournament.country}</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.rowTagStyles}>Surface:</Text>
            <Text>{tournament.surface}</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.rowTagStyles}>Start Date:</Text>
            <Text>{tournament.start_date}</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.rowTagStyles}>End Date:</Text>
            <Text>{tournament.end_date}</Text>
          </View>
        </View>
      </View>
      <View style={styles.infoContainer}>
        <Text style={styles.summaryTitle}>Match Info</Text>
        <View style={{ marginTop: 8 }}>
          {/* Info Row */}
          <View style={styles.row}>
            <Text style={styles.rowTagStyles}>Title:</Text>
            <Text>{item.title}</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.rowTagStyles}>Round Name:</Text>
            <Text>{item.round_name}</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.rowTagStyles}>Court:</Text>
            <Text>{item.court}</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.rowTagStyles}>Home Player:</Text>
            <Text>
              {item.home.full_name} ({item.home.country})
            </Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.rowTagStyles}>Away Player:</Text>
            <Text>
              {item.away.full_name} ({item.away.country})
            </Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.rowTagStyles}>Date:</Text>
            <Text>
              {`${new Date(item.date).getFullYear()}-${
                new Date(item.date).getMonth() + 1
              }-${new Date(item.date).getDate()}   ${new Date(
                item.date
              ).getUTCHours()}:${
                new Date(item.date).getUTCMinutes() < 10
                  ? "0" + new Date(item.date).getUTCMinutes()
                  : new Date(item.date).getUTCMinutes()
              } PST`}
            </Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default TennisMatchInfo;

const styles = StyleSheet.create({
  infoContainer: {
    marginTop: 18,
    backgroundColor: "snow",
    elevation: 3,
    height: 430,
    paddingBottom: 16,
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
    marginTop: 12,
    textAlign: "left",
    fontSize: 20,
    fontWeight: "bold",
    paddingHorizontal: 0,
    color: "black",
  },
  rowTagStyles: {
    color: "red",
  },
});
