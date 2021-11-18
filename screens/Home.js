import * as React from "react";
import MapView from "react-native-maps";
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  ScrollView,
  FlatList,
} from "react-native";
import Menu from "../components/Menu";
import Card from "../components/Card";

const common = require("../assets/Styles");
const { width } = Dimensions.get("window");

const options = [
  { option: "Viaje", icon: "https://i.ibb.co/5Gj3Gxm/car.png" },
  { option: "Confort", icon: "https://i.ibb.co/qmXgGk3/vip.png" },
  { option: "Flete", icon: "https://i.ibb.co/YNN8mZh/truck.png" },
  { option: "Entregas", icon: "https://i.ibb.co/fCX27fW/bag.png" },
];

export default function Home() {
  return (
    <>
      <MapView style={styles.map} />
      <Menu>
        <FlatList
          data={options}
          keyExtractor={(item) => item.option}
          renderItem={({ item }) => (
            <Card title={item.option} icon={item.icon} />
          )}
          style={styles.options}
          horizontal={true}
        />
      </Menu>
    </>
  );
}

const styles = StyleSheet.create({
  map: {
    flex: 2,
  },
  options: { paddingVertical: 10 },
});
