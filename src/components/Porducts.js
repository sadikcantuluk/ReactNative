import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Porducts = (props) => {
  return (
    <View>
      <Text>{JSON.stringify(props.data)}</Text>
    </View>
  )
}

export default Porducts

const styles = StyleSheet.create({})