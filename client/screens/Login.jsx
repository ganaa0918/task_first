import React from 'react'
import { View, StyleSheet, TouchableOpacity, } from 'react-native'
import { useState , useContext} from 'react'
import { useNavigation } from '@react-navigation/native'
import { Text,TextInput } from 'react-native-paper'
import { transparent } from 'react-native-paper/lib/typescript/src/styles/themes/v2/colors'

const Login = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [isSelected, setSelection] = useState('')
  const icon = "<"

  const handleLogin = () =>{
    navigation.navigate('Post')
  }
  const onPressback =()=>{
    navigation.goBack()
  }
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onPressback}
        style={styles.roundButton1}>
        <Text>{icon}</Text>
      </TouchableOpacity>
       <View >
       <Text  style={{marginBottom:20, fontSize:25}}>Нэвтрэх</Text>
      </View>
      <TextInput
        style={styles.input}
        mode='flat'
        onChangeText={text => setEmail(text)}
        value={email}
        placeholder="Цахим шуудан"
      />
      <TextInput
        style={styles.input}
        onChangeText={text => setPassword(text)}
        value={password}
        placeholder="Нууц үг"
        secureTextEntry={isSelected ? false : true}
      />
        <TouchableOpacity onPress={() => setSelection(!isSelected)}><Text style={styles.see}>Нууц үг харах</Text></TouchableOpacity>
      <TouchableOpacity style={styles.loginBtn} onPress={() => handleLogin()} >
        <Text style={styles.loginText}>Нэвтрэх</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate("Restore")}>
        <Text style={styles.forgot_button}>Нууц үгээ мартсан уу?</Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Text style={styles.signin_button} onPress={() => navigation.navigate("SignUp")}>Хэрэв аккаунт байхгүй бол бүртгүүлэх</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  roundButton1: {
    width: 35,
    height: 35,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 100,
    borderColor: '#CFCFCF',
    borderWidth: 0.5,
    position: 'absolute',
    left: 44,
    top: 48
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    backgroundColor: 'white'
  },
  input: {
    width: '90%',
    height: 40,
    borderColor: 'gray',
    borderBottomWidth: 1,
    marginBottom: 16,
    paddingLeft: 8,
    backgroundColor: 'none'
  },
  forgot_button: {
    height: 30,
    marginBottom: 30,
    color: '#228694',
    marginTop: 30
  },
  loginBtn: {
    width: "70%",
    borderRadius: 15,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
    backgroundColor: "#6358E1",
  },
  loginText: {
    color: 'white',
    fontSize: 20,
  },
  signin_button: {
    color: 'grey',
    fontSize: 11,
    position: 'relative',
    top:150,
  }
})

export default Login