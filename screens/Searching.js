import React from "react";
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  Image,
  ActivityIndicator,
  TouchableOpacity,
  Fragment,
} from "react-native";
import MapView from "react-native-maps";
import Menu from "../components/Menu";
import { FontAwesome } from "@expo/vector-icons";
import AmountPicker from "../components/AmountPicker";
import PrettierButton from "../components/PrettierButton";
const common = require("../assets/Styles");

const Searching = () => {
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
        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "row",
          }}
        >
          <ActivityIndicator size="small" color={common.primary.color} />
          <Text style={common.info}>Estamos buscando un conductor</Text>
        </View>
        <View style={{ padding: 5 }}>
          <View style={styles.label}>
            <FontAwesome
              name={"circle"}
              size={15}
              color={common.primary.color}
              style={styles.icon}
            />
            <Text>De: Israel 9</Text>
          </View>
          <View style={styles.label}>
            <FontAwesome
              name={"circle"}
              size={15}
              color={common.secondary.color}
              style={styles.icon}
            />
            <Text>A: San laurent 26</Text>
          </View>
        </View>
        <View style={styles.form}>
          <Text style={{ color: "#8D8787" }}>Precio actual:</Text>
          <AmountPicker
            color={common.primary.color}
            amount={"60"}
            increment={"5"}
          />
          <PrettierButton text={"Cambiar precio"} />
          <TouchableOpacity style={{ padding: 10 }}>
            <Text style={{ fontWeight: "bold", color: "#3C3C3C" }}>
              Cancelar solicitud
            </Text>
          </TouchableOpacity>
        </View>
      </Menu>
    </SafeAreaView>
  );
};

export default Searching;

const styles = StyleSheet.create({
  map: {
    flex: 3,
  },
  icon: {
    paddingHorizontal: 15,
  },
  label: {
    flexDirection: "row",
    alignItems: "center",
    padding: 5,
  },
  form: {
    flex: 2,
    paddingHorizontal: 5,
    paddingVertical: 15,
    margin: 5,
    borderRadius: 15,
    backgroundColor: "#ffff",
    alignItems: "center",
  },
});
