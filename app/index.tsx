import * as React from "react";
import { Text, View } from "react-native";
import { StyleSheet } from "react-native";
import MapView, { Marker } from "react-native-maps";
import { supabase } from "@/lib/supabase";

export default function Index() {
  const regionBCN = {
    latitude: 41.3851,
    longitude: 2.1734
  };

  const markers = [
    {
      latlng: {
        latitude: 41.3851,
        longitude: 2.1734
      },
      title: "BCN",
      description: "Barcelona North"
    },
    {
      latlng: {
        latitude: 41.3851,
        longitude: 2.1934
      },
      title: "BCN",
      description: "Barcelona North"
    },
    {
      latlng: {
        latitude: 41.3851,
        longitude: 2.1534
      },
      title: "BCN",
      description: "Barcelona North"
    }
  ];

  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: regionBCN.latitude,
          longitude: regionBCN.longitude,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421
        }}
      >
        {markers.map((marker: any, index: any) => (
          <Marker
            key={index}
            coordinate={marker.latlng}
            title={marker.title}
            description={marker.description}
          />
        ))}
      </MapView>
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
