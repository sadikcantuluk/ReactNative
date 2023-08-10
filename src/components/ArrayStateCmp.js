import {
  FlatList,
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Button,
} from "react-native";
import React, { useState } from "react";

const ArrayStateCmp = () => {
  const [users, setUsers] = useState([
    { id: 1, Name: "Şeyma" },
    { id: 2, Name: "Edanur" },
    { id: 3, Name: "Miray" },
  ]);

  const count = users.length;

  const handleAdd = () => {
    setUsers([
      ...users,
      {
        id: count + 1,
        Name: "Elif",
      },
    ]);
  };

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={users}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text style={styles.text}>{item.Name}</Text>
          </View>
        )}
      ></FlatList>

      <Button title="Add" onPress={handleAdd}></Button>
    </SafeAreaView>
  );
};

export default ArrayStateCmp;

const styles = StyleSheet.create({
  item: {
    backgroundColor: "#eee",
    padding: 20,
    borderBottomWidth: 1,
  },
  text: {
    fontSize: 20,
  },
  container: {
    flex: 1,
    // backgroundColor: "white",
    // justifyContent: "center",
    // alignItems: "center",
  },
});
