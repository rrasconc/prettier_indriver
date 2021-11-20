import * as React from "react";
import MapView from "react-native-maps";
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  SafeAreaView,
  FlatList,
  Image,
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
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: 29.11065,
          longitude: -111.03402,
          latitudeDelta: 0.0088,
          longitudeDelta: 0.0,
        }}
      >
        <MapView.Marker
          coordinate={{ latitude: 29.1106641, longitude: -111.034012 }}
        >
          <Image
            source={{ uri: "https://i.ibb.co/J54Ym33/marker.png" }}
            style={{ width: 43, height: 41 }}
          />
        </MapView.Marker>
      </MapView>
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
          <Text style={common.info}>Precio recomendado: $67 MXN</Text>
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
  },
});
