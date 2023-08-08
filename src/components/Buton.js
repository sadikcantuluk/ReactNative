import { StyleSheet, 
  Text, 
  View, 
  Button,
  TouchableOpacity,
  TouchableHighlight,
  TouchableWithoutFeedback
 } from "react-native";
import React from "react";

const Buton = () => {
  
  const handleClick = () => {
    alert("Merhaba");
  };
  
  return (
    <View>
      <Button title="Click" onPress={handleClick} />
      
      {/* Touchable Componenti hem Android hem de İOS da aynı tip Butonları yapmamızı sağlar.
      Ayrıca standart Buton dışında istediğimiz Butonları tasarlamamızı sağlar. */}

      {/* TouchableOpacity Componenti Touchable Componentlerinin en basic yapısıdır. */}
      
      <TouchableOpacity onPress={handleClick}>
        <Text>Click</Text>
      </TouchableOpacity>

      {/* TouchableHighlight Componenti butona tıklandığında bir backround verir. */}

      <TouchableHighlight 
      onPress={handleClick}
      activeOpacity={0.6}
      underlayColor="red"
      >
        <Text>Click</Text>
      </TouchableHighlight>

      {/* TouchableWithoutFeedback Componenti butona tıklandığında herhangi bir reaksiyon vermez. */}

      <TouchableWithoutFeedback
      onPress={handleClick}
      >
        <Text>Click</Text>
      </TouchableWithoutFeedback>
    </View>
  );
};

export default Buton;

const styles = StyleSheet.create({});
