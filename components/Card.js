import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

const common = require("../assets/Styles");

const Card = (props) => {
  return (
    <View style={[styles.card, common.shadow]}>
      <View style={styles.container}>
        <Image source={{ uri: props.icon }} style={{ height: 45, width: 45 }} />
      </View>
      <View style={{ padding: 5 }}>
        <Text>{props.title}</Text>
      </View>
    </View>
  );
};

export default Card;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    padding: 3,
    backgroundColor: "#f8f8fa",
    borderRadius: 15,
  },
  card: {
    backgroundColor: "#ffff",
    width: 100,
    height: 100,
    borderRadius: 15,
    margin: 5,
    padding: 15,
  },
});
