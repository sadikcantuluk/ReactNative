import { StyleSheet, Text, View } from "react-native";
import React from "react";

function Deneme() {
  return (
    <View>
      <Text style={styles.deneme}>Deneme</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  deneme: {
    fontSize: 32,
    color: "blue",
  },
});

export default Deneme;
