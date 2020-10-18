import React from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'

const ImageDetail = ({ imageSource, title, stars }) => {
  return (
    <View>
      <Image source={imageSource} />
      <Text>{title}</Text>
      <Text>{stars}</Text>
    </View>
  )
}

const styles = StyleSheet.create({})

export default ImageDetail
