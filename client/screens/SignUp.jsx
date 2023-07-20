import React from 'react'
import { View, StyleSheet, TouchableOpacity, fontFamily} from 'react-native'
import { useState  } from 'react'
import { useNavigation } from '@react-navigation/native'
import {TextInput,Text} from 'react-native-paper'

export default function SignUp() {
  const [ner, setNer] = useState('')
  const [isSelected, setSelection] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const icon = "<"
  const navigation = useNavigation();
  const OnPressBack=()=>{
    navigation.goBack();
  }
  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={OnPressBack}
        style={styles.roundButton1}>
        <Text>{icon}</Text>
      </TouchableOpacity>
       <View >
        <Text style={styles.GoyGarchig} >Аккаунт бүртгүүлэх</Text>
      </View>
      <TextInput
        style={styles.input}
        onChangeText={text => setNer(text)}
        value={ner}
        placeholder="Нэр"
      />
      <TextInput
        style={styles.input}
        onChangeText={text => setEmail(text)}
        value={email}
        placeholder="Email"
      />
      <TextInput
        style={styles.input}
        onChangeText={text => setPassword(text)}
        value={password}
        placeholder="Нууц үг"
        secureTextEntry={isSelected ? false : true}
      />
      <TouchableOpacity style={styles.signBtn} onPress={() => handleLogin()} >
        <Text style={styles.signText}>Бүртгүүлэх</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate("Login")}>
        <Text style={styles.have_account}>Хэрвээ аккаунт байгаа бол энд дарж Нэвтэнэ үү.</Text>
      </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
  head: {
    alignItems:'left',
    position: 'absolute',
    left:44,
    top:120,
  },
  bigTxt: {
    fontSize:28,
  },
  roundButton1: {
    width: 35,
    height: 35,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
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
    backgroundColor: '#FFF'
  },
  input: {
    width: '90%',
    height: 40,
    borderColor: 'gray',
    borderBottomWidth: 1,
    marginBottom: 16,
    paddingLeft: 8,
    backgroundColor: '#FFF'
  },

  check: {

  },
  checkboxContainer: {
    flexDirection: 'row',
    left: true,
    marginBottom: 20,
    alignItems: 'flex-start',
    justifyContent: 'left',
    position: 'absolute',
    left:50,
    top:330,
  },
  txt: {
    paddingLeft: 10,
  },
  have_account: {
    height: 30,
    marginBottom: 30,
    color: '#228694',
    marginTop: 30
  },
  signBtn: {
    width: "70%",
    borderRadius: 15,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
    backgroundColor: "#6358E1",
  },
  signText: {
    color: 'white',
    fontSize: 20,
  },
  GoyGarchig:{
    fontSize:28,
    paddingBottom:20

  }

});

