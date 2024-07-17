import { Text, View } from "react-native";
import { StyleSheet } from "react-native";
import MapView from "react-native-maps";

export default function Index() {
  return (
    <View style={styles.container}>
      <MapView style={styles.map} />
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
