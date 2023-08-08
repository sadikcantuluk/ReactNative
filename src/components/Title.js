import React from "react";
import { View, StyleSheet, Text } from "react-native";
import PropTypes from "prop-types"

const Title = (props) => {
  return (
    <>
      <View>
        {
          props.isVisible && (<Text style={[styles.title, {color:props.color}]}>{props.number + 1} - {props.text}</Text>)
        }
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

Title.propTypes={
  text:PropTypes.string.isRequired,
  color:PropTypes.string,
  number:PropTypes.number,
  isVisible:PropTypes.bool
}

Title.defaultProps={
  text:"Varsayilan Değer",
  isVisible:true
}

export default Title;
