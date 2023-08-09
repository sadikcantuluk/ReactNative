import { FlatList,  SafeAreaView, StyleSheet, Text, View } from "react-native";
import React from "react";

const Data = [
  {
    id: "1",
    title: "React",
  },
  {
    id: "2",
    title: "React Native",
  },
  {
    id: "3",
    title: "Flutter",
  },
  {
    id: "4",
    title: "Java",
  },
];

const FlatListCmp = () => {
  const renderItem = ({ item }) => {
    <View style={styles.item}>
      <Text style={styles.title}>{item.title}</Text>
    </View>;
  };

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={Data}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      ></FlatList>
    </SafeAreaView>
  );
};

export default FlatListCmp;

const styles = StyleSheet.create({
    container:{
        flex:1
    },
    item:{
        backgroundColor:"#f9c2ff",
        padding:20,
        marginVertical:8,
        marginHorizontal:16,
    },
    title:{
        fontSize:32,
    }
});
