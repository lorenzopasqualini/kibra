import * as React from "react";
import { Text, View } from "react-native";
import { StyleSheet } from "react-native";
import MapView from "react-native-maps";

export default function Index() {
  const [region, setRegion] = React.useState({
    latitude: 41.3851,
    longitude: 2.1734
  });

  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: region.latitude,
          longitude: region.longitude,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  map:{
    width: '100%',
    height: '100%'
  }
});
