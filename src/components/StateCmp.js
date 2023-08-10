import { Button, StyleSheet, Text, View } from "react-native";
import { React, useState } from "react";

const StateCmp = () => {
  const [name, setName] = useState("mehmet");
  const [age, setAge] = useState(20);
  const [isVisible, setisVisible] = useState(true);

  const handleClickName = () => {
    setName("SADIK");
  };

  const handleClickAge = () => {
    setAge(21);
  };

  const handleClickVisible = () => {
    if (isVisible == true) {
      setisVisible(false);
    } else {
      setisVisible(true);
    }
  };

  return (
    <View>
      {isVisible ? (
        <>
          <Text style={styles.text}>
            {name} {age}
          </Text>
          <Button
            title="Name Change"
            onPress={handleClickName}
            style={styles.name}
          ></Button>
          <Button
            title="Age Change"
            onPress={handleClickAge}
            style={styles.age}
          ></Button>
        </>
      ) : (
        ""
      )}
      <Button
        title={isVisible ? "Gizle" : "Göster"}
        onPress={handleClickVisible}
      ></Button>
    </View>
  );
};

export default StateCmp;

const styles = StyleSheet.create({});
