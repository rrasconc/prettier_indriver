import React, { useState, setState } from "react";
import { StyleSheet, TextInput, View } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

const TextBox = (props) => {
  const common = require("../assets/Styles");

  return (
    <View style={styles.container}>
      <FontAwesome
        name={props.icon}
        size={15}
        color={props.color}
        style={styles.icon}
      />
      <TextInput
        style={[styles.textBox, common.text]}
        onChangeText={props.onChangeText}
        selectionColor={common.primary.color}
        value={props.value}
        autoFocus={true}
        placeholder={props.placeholder}
      />
      <FontAwesome
        name={props.extra}
        size={15}
        color={common.dark.color}
        style={styles.icon}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f8f8fa",
    borderRadius: 15,
    marginVertical: 5,
  },
  textBox: {
    flex: 1,
    backgroundColor: "#f8f8fa",
    padding: 10,
  },
  icon: {
    padding: 10,
  },
});

export default TextBox;
