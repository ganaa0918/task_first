import React from 'react'
import { View,StyleSheet, TouchableOpacity, Alert } from 'react-native'
import { TextInput, Button } from 'react-native-paper'
const Hi = () => {
  const Press = () => {
    Alert.alert('kkk','Амжилттай хадгалсан',)
  }
  return (
    <View style={styles.container}>
      <TextInput style={styles.text1} label={'Нэрээ оруулах'} mode='outlined' placeholder='Нэрээ оруулах'/>
      <TextInput label={'Title оруулах'} mode='outlined' placeholder='Title оруулах'/>
      <TouchableOpacity onPress={Press} style={styles.btn}>
            <Button mode="contained">Үүсгэх</Button>
          </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    padding:20
  },
  text1: {
    marginBottom: 20
  },
  btn: {
    marginTop:20,
    paddingHorizontal:40
  }
})
export default Hi