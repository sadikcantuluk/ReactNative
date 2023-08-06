import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.box1}>
      <Text style={styles.font}>Flutter</Text>
      </View>
      <View style={styles.box2}>
        <Text style={styles.font}>ReactNative</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'yellow',
  },
  box1:{
    flex:1,
    backgroundColor:"white",
    justifyContent:"center",
    alignItems:"center"
  },
  box2:{
    flex:1,
    backgroundColor:"red",
    flexDirection:"row",
    justifyContent:"center",
    alignItems:"center"
  },
  font:{
    fontSize:25
  }
  // child1:{
  //   flex:1,
  //   backgroundColor:"yellow"
  // },
  // child2:{
  //   flex:1,
  //   backgroundColor:"grey"
  // },
  // child3:{
  //   flex:1,
  //   backgroundColor:"green"
  // },
  // child4:{
  //   flex:1,
  //   backgroundColor:"red"
  // },
  // child5:{
  //   flex:1,
  //   backgroundColor:"blue"
  // },
  // child6:{
  //   flex:1,
  //   backgroundColor:"white"
  // }
});
