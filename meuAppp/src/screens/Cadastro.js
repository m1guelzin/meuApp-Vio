import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Alert,
  StyleSheet,
} from "react-native";
import api from "../axios/axios";

export default function Cadastro() {
  const [user, setUser] = useState({
    name: "",
    cpf: "",
    email: "",
    password: "",
    data_nascimento: "",
  });

  async function handleCadastro() {
    await api.postCadastro(user).then(
      (response) => {
        console.log(response.data.message);
        Alert.alert("OK", response.data.message);
      },
      (error) => {
        console.log(error.response.data.error);
        Alert.alert("Erro", error.response.data.error);
      }
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.tittle}>Faça Cadastro</Text>
      <TextInput
        style={styles.input}
        placeholder="Nome"
        value={user.name}
        onChangeText={(value) => {
          setUser({ ...user, name: value });
        }}
      ></TextInput>
      
      <TextInput
      style={styles.input}
        placeholder="Cpf"
        value={user.cpf}
        onChangeText={(value) => {
          setUser({ ...user, cpf: value });
        }}
      ></TextInput>

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
            <TextInput
      style={styles.input}
        placeholder="Data de nascimento"
        value={user.data_nascimento}
        onChangeText={(value) => {
          setUser({ ...user, data_nascimento: value });
        }}
      ></TextInput>
      <TouchableOpacity onPress={handleCadastro} style={styles.button}>
        <Text>Entrar</Text>
      </TouchableOpacity>
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
  input: {
    width: "100%",
    height: 40,
    borderBottomWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  button: {
    backgroundColor: "red",
    padding: 10,
    borderRadius: 5,
  },
});
