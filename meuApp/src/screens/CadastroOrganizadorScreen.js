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

export default function CadastroOrganizadorScreen({ navigation }) {
  const [organizador, setOrganizador] = useState({
    nome: "",
    email: "",
    senha: "",
    telefone: ""
  });

  async function handleCadastro() {
    await api.postCadastroOrganizador(organizador).then(
      (response) => {
        console.log(response.data.message);
        Alert.alert("OK", response.data.message);
        navigation.navigate("Home")
      },
      (error) => {
        console.log(error.response.data.error);
        Alert.alert("Erro", error.response.data.error);
      }
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.tittle}>Cadastre um Organizador</Text>
      <TextInput
        style={styles.input}
        placeholder="Nome"
        value={organizador.nome}
        onChangeText={(value) => {
        setOrganizador({ ...organizador, nome: value });
        }}
      ></TextInput>

      <TextInput
        style={styles.input}
        placeholder="Email"
        value={organizador.email}
        onChangeText={(value) => {
          setOrganizador({ ...organizador, email: value });
        }}
      ></TextInput>

      <TextInput
        style={styles.input}
        placeholder="Telefone"
        value={organizador.telefone}
        onChangeText={(value) => {
          setOrganizador({ ...organizador, telefone: value });
        }}
      ></TextInput>
      <TextInput
        style={styles.input}
        placeholder="Senha"
        value={organizador.senha}
        onChangeText={(value) => {
          setOrganizador({ ...organizador, senha: value });
        }}
      ></TextInput>
      <TouchableOpacity onPress={handleCadastro} style={styles.button}>
        <Text>Cadastrar Organizador</Text>
      </TouchableOpacity>

      <Button
        title="Voltar para Home"
        onPress={() => navigation.navigate("Home")}
      />
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
    margin: 5,
  },
});
