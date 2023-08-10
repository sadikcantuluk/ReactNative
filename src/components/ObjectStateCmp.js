import { Button, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";

const ObjectStateCmp = () => {
  const [user, setUser] = useState({ Id: 1, Name: "Yusuf" });

  const handlePress = () => {
    setUser({ ...user, Name: "SADIK" });
  };

  return (
    <View>
      <Text style={styles.text}>Id : {user.Id}</Text>
      <Text style={styles.text}>Name : {user.Name}</Text>

      <Button title="Click" onPress={handlePress}></Button>
    </View>
  );
};

export default ObjectStateCmp;

const styles = StyleSheet.create({
  text: {
    fontSize: 20,
  },
});
