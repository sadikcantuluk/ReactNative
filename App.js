import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.box1}>
      <View style={styles.child4}></View>
        <View style={styles.child5}></View>
        <View style={styles.child6}></View>
      </View>
      <View style={styles.box2}>
        <View style={styles.child1}></View>
        <View style={styles.child2}></View>
        <View style={styles.child3}></View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'yellow',
    flexDirection:"row"
  },
  box1:{
    flex:1,
    backgroundColor:"white",
  },
  box2:{
    flex:1,
    backgroundColor:"red",
    flexDirection:"row"
  },
  child1:{
    flex:1,
    backgroundColor:"yellow"
  },
  child2:{
    flex:1,
    backgroundColor:"grey"
  },
  child3:{
    flex:1,
    backgroundColor:"green"
  },
  child4:{
    flex:1,
    backgroundColor:"red"
  },
  child5:{
    flex:1,
    backgroundColor:"blue"
  },
  child6:{
    flex:1,
    backgroundColor:"white"
  }
});
