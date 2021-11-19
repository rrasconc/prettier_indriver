"use strict";
import { StyleSheet } from "react-native";
module.exports = StyleSheet.create({
  primary: { color: "#24AF34" },
  secondary: { color: "#008AFD" },
  dark: { color: "#5b5b5b" },
  text: { color: "#5B5B5B" },
  info: { color: "#306636", padding: 10 },
  container: {
    flex: 1,
    backgroundColor: "#f8f8fa",
    alignItems: "center",
    justifyContent: "center",
  },
  shadow: {
    shadowColor: "#BCBCBC",
    shadowOffset: { width: 0, height: 0 },
    elevation: 24,
  },
});
