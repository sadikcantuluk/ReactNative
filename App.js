import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import Title from "./src/components/Title";
import User from "./src/components/User";
import Porducts from "./src/components/Porducts";
import Resim from "./src/components/Resim";
import Buton from "./src/components/Buton";
import FlatListCmp from "./src/components/FlatListCmp";
import ItemList from "./src/components/ItemList";
import StateCmp from "./src/components/StateCmp";
import { React, useState } from "react";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      {/* <Text >React Native</Text> */}
      {/* <Resim/> */}
      {/* <FlatListCmp/> */}
      {/* <ItemList/> */}
      {/* <ScrollViewCmp/> */}
      <StateCmp/>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
  },
});
