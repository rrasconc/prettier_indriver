import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  Dimensions,
} from "react-native";
const common = require("../assets/Styles");

const Menu = (props) => {
  return (
    <View style={styles.container}>
      <View style={[styles.banner, { backgroundColor: common.primary.color }]}>
        <Image
          source={{
            uri: "https://play-lh.googleusercontent.com/Cj7enUX5HYiljGLfCTJqY0X4Noq_P-9vdTUKDVWIbjJUWqkac07qUnv6KTb4HF0cbjLw",
          }}
          style={{ height: 30, width: 30 }}
        />
      </View>
      {props.children}
    </View>
  );
};

export default Menu;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#f8f8fa",
    flex: 3,
  },
  banner: {
    borderTopRightRadius: 15,
    borderTopLeftRadius: 15,
    alignItems: "center",
  },
});
