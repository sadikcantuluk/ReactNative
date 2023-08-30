import { Button, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";

const EffectCmp = () => {
  const [counter, setCounter] = useState(0);
  const [amount, setAmount] = useState(1);
  const [IsValid, setIsValid] = useState(true);

  const handleClickCounter = () => {
    setCounter(counter + amount);
  };

  // useEffect(() => {
  //   console.log("State Değişti.");
  // })

  useEffect(() => {
    let interval = setInterval(() => {
      console.log("setInterval");
      setCounter((prev) => prev + 1);
    }, 1000);

    return () => 
      clearInterval(interval);
    ;
  }, []);

  // useEffect(() => {
  //   console.log("Counter State Değişti.");
  // },[counter]);

  // useEffect(() => {
  //   console.log("Amount State Değişti.");
  // },[amount]);

  return (
    <View style={styles.container}>
      {IsValid ? (
        <>
          <Text style={styles.text}>{counter}</Text>
          <Button title="Arttır" onPress={handleClickCounter}></Button>
          <Text style={styles.text}>{amount}</Text>
          <Button title="5" onPress={() => setAmount(5)}></Button>
          <Button title="1" onPress={() => setAmount(1)}></Button>
        </>
      ) : (
        ""
      )}

      <Button
        title="Gizle/Gsöter"
        onPress={() => setIsValid(!IsValid)}
      ></Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 25,
  },
});

export default EffectCmp;
