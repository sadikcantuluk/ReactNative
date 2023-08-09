import { StyleSheet, Text, View,Image } from 'react-native'
import React from 'react'

const Resim = () => {
  return (
    <View style={styles.container}>
      
      {/* <Image style={styles.image} source={{uri:"https://ankara.tfo.k12.tr/wp-content/uploads/2022/06/Ataturk.jpg"}} /> */}

      {/* resizeMode resmin bulunduğu çerçeveye nasıl konumlandırılacağını belirler.
      resizeMode='contain' resmin kırpılmamasını sağlar. */}
      
      <Image 
      resizeMode='contain'
      source={require("../../assets/resim.jpg")}/>

    </View>
  )
}

export default Resim

const styles = StyleSheet.create({
    container:{
        paddingTop:50
    },
    image:{
        width:"100%",
        height:180
    }
})