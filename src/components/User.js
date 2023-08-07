import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import PropTypes from "prop-types"

const User = (props) => {
  return (
    <View>
      <Text>{JSON.stringify(props.data)}</Text>
    </View>
  )
}

export default User

const styles = StyleSheet.create({})

User.propTypes={
    data:PropTypes.exact({
        id:PropTypes.number,
        name:PropTypes.string
    }),
    data:PropTypes.shape({
        id:PropTypes.number,
        name:PropTypes.string
    })
}