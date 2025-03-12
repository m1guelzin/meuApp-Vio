import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Alert,
  StyleSheet,
  Button
} from "react-native";
import api from "../axios/axios";

export default function CadastroIngressoScreen({ navigation }) {
  const [ingresso, setIngresso] = useState({
    preco: "",
    tipo: "",
    fk_id_evento: ""
  });

  async function handleCadastro() {
    await api.postCadastroIngresso(ingresso).then(
      (response) => {
        console.log(response.data.message);
        Alert.alert("OK", response.data.message);
        navigation.navigate("Home");
      },
      (error) => {
        console.log(error.response.data.error);
        Alert.alert("Erro", error.response.data.error);
      }
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.tittle}>Cadastre um Ingresso</Text>
      <TextInput
        style={styles.input}
        placeholder="Preço do Ingresso"
        keyboardType="numeric"
        value={ingresso.preco}
        onChangeText={(value) => {
        setIngresso({ ...ingresso, preco: value });
        }}
      ></TextInput>
      
      <TextInput
      style={styles.input}
        placeholder="Tipo do Ingreso"
        value={ingresso.tipo}
        onChangeText={(value) => {
        setIngresso({ ...ingresso, tipo: value });
        }}
      ></TextInput>

      <TextInput
        style={styles.input}
        placeholder="ID do Evento deste Ingresso"
        keyboardType="numeric"
        value={ingresso.fk_id_evento}

        onChangeText={(value) => {
        setIngresso({ ...ingresso, fk_id_evento: value });
        }}
      ></TextInput>
      <TouchableOpacity onPress={handleCadastro} style={styles.button}>
        <Text>Cadastrar Ingresso</Text>
      </TouchableOpacity>

      <Button title="Voltar para Home" onPress={()=> navigation.navigate("Home")}/>
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
    margin: 5
  },
});
