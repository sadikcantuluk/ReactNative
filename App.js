import {  StyleSheet, Text, View } from "react-native";
import Title from "./src/components/Title";
import User from "./src/components/User";
import Porducts from "./src/components/Porducts";
import Resim from "./src/components/Resim";
import Buton from "./src/components/Buton";
import FlatListCmp from "./src/components/FlatListCmp";
import ItemList from "./src/components/ItemList";

export default function App() {
  return (
    <View style={styles.container}>
     {/* <Text >React Native</Text> */}
    {/* <Resim/> */}
    {/* <FlatListCmp/> */}
    <ItemList/>

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
