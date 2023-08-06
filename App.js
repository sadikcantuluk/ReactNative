import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Hello React Native </Text>
      <StatusBar style="auto" />

    <View style={[styles.box,styles.box1]}>
      <Text style={styles.text}>ReactNative</Text>
    </View>

    <View style={[styles.box,styles.box2]}>
      <Text style={styles.text}>Flutter</Text>
    </View>

    <View style={styles.box}>
      <Text style={styles.text}>Kotlin</Text>
    </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  box: {
    width:300,
    height:200,
    backgroundColor:"red",
    marginBottom:10
  },
  box1:{
    backgroundColor:"blue"
  },
  box2:{
    backgroundColor:"bisque"
  },
  text: {
    fontSize:30,
    color:"black",
    textAlign:'center',
    backgroundColor:"grey"
  }
});
