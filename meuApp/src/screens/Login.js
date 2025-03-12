import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Alert,
  StyleSheet,
  Button,
} from "react-native";
import api from "../axios/axios";

export default function Login({ navigation }) {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  async function handleLogin() {
    await api.postLogin(user).then(
        (response)=>{
            console.log(response.data.message)
            Alert.alert('OK',response.data.message)
            navigation.navigate("Home");
        },(error)=>{
            console.log(error.response.data.error)
            Alert.alert('Erro', error.response.data.error)
        }
    )
  }



  return (
    <View style={styles.container}>
      <Text style={styles.tittle}>Faça Login</Text>
      <TextInput
      style={styles.input}
        placeholder="Email"
        value={user.email}
        onChangeText={(value) => {
          setUser({ ...user, email: value });
        }}
      ></TextInput>
      <TextInput
      style={styles.input}
        placeholder="Senha"
        value={user.password}
        onChangeText={(value) => {
          setUser({ ...user, password: value });
        }}
      ></TextInput>
      <TouchableOpacity onPress={handleLogin} style={styles.button} >
        <Text>Entrar</Text>
      </TouchableOpacity>
      <Button title="Cadastro" onPress={()=> navigation.navigate("Cadastro")}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  tittle: {
    fontSize: 28,
    fontWeight: "bold",
  },
  input:{
    width:"100%",
    height:40,
    borderBottomWidth:1,
    marginBottom:10,
    paddingHorizontal:10
  },
  button:{
    backgroundColor:"red",
    padding:10,
    borderRadius:5,
    margin:5,
  }
});
