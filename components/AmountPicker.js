import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

const AmountPicker = (props) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={[styles.control, { borderColor: props.color }]}>
        <Text style={styles.text}>{"-" + props.increment}</Text>
      </TouchableOpacity>
      <Text style={styles.text}>{"$ " + props.amount + " MXN"}</Text>
      <TouchableOpacity style={[styles.control, { borderColor: props.color }]}>
        <Text style={styles.text}>{"+" + props.increment}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default AmountPicker;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    margin: 15,
  },
  text: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#3C3C3C",
    marginHorizontal: 15,
  },
  control: {
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "blue",
  },
});
