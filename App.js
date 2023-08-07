import {  StyleSheet, Text, View } from "react-native";
import Title from "./src/components/Title";
import User from "./src/components/User";
import Porducts from "./src/components/Porducts";

export default function App() {
  return (
    <View style={styles.container}>
      <Title text="React Native" color="blue" number={1}/>
      <Title text="Flutter" color="red" number={2}/>
      <Title text="JavaScript" color="green" number={3}/>
      <User data={{id:1,name:"Sadık"}}></User>
      <Porducts data={["Cep Telefonu","Ütü","Ocak"]}/>
    </View>
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
