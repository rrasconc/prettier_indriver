import React from "react";
import { Text, TouchableOpacity, StyleSheet, View } from "react-native";

const PrettierButton = (props) => {
  const common = require("../assets/Styles");

  return (
    <TouchableOpacity
      style={[styles.container, { backgroundColor: common.primary.color }]}
    >
      <View style={styles.button}>
        <Text style={{ color: "#ffff", fontWeight: "bold" }}>{props.text}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default PrettierButton;
const styles = StyleSheet.create({
  container: {
    padding: 15,
    marginVertical: 5,
    borderRadius: 15,
    flexDirection: "row",
  },
  button: { flex: 1, justifyContent: "center", alignItems: "center" },
});
