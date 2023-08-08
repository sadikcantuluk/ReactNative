import {  StyleSheet, Text, View } from "react-native";
import Title from "./src/components/Title";
import User from "./src/components/User";
import Porducts from "./src/components/Porducts";
import Resim from "./src/components/Resim";
import Buton from "./src/components/Buton";

export default function App() {
  return (
    <View style={styles.container}>
     <Text >React Native</Text>
     <Buton />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
  }
});
