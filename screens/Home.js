import * as React from "react";
import MapView from "react-native-maps";
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  SafeAreaView,
  FlatList,
} from "react-native";
import Menu from "../components/Menu";
import Card from "../components/Card";
import TextBox from "../components/TextBox";
import PrettierButton from "../components/PrettierButton";

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
    <SafeAreaView style={{ flex: 1 }}>
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
          showsHorizontalScrollIndicator={false}
        />
        <View style={styles.form}>
          <Text style={common.info}>Precio recomendado: $67MXN</Text>
          <TextBox
            icon={"circle"}
            color={common.secondary.color}
            placeholder={"Punto de partida"}
          />
          <TextBox
            icon={"circle"}
            color={common.primary.color}
            extra={"plus"}
            placeholder={"Destino"}
          />
          <TextBox
            icon={"dollar"}
            color={common.dark.color}
            placeholder={"Ofrece un precio MXN"}
          />
          <PrettierButton text={"Solicitar un auto"} />
        </View>
      </Menu>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  map: {
    flex: 2,
  },
  options: { paddingTop: 10, flex: 1 },
  form: {
    flex: 2,
    paddingHorizontal: 5,
    paddingVertical: 15,
    marginHorizontal: 5,
    borderRadius: 15,
    backgroundColor: "#ffff",
    alignItems: "center",
    justifyContent: "center",
    alignItems: "center",
  },
});
