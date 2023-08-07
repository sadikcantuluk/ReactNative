import React from "react";
import { View, StyleSheet, Text } from "react-native";

const Title = (props) => {
  return (
    <>
      <View>
        <Text style={[styles.title, {color:props.color}]}>{props.number + 1} - {props.text}</Text>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 28,
    color: "black",
    fontWeight: "700",
  },
});

export default Title;
