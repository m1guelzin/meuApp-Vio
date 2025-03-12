import {
  View,
  Text,
  StyleSheet,
  Button,
} from "react-native";

export default function Home({ navigation }) {

  return (
    <View style={styles.container}>
      <Text style={styles.tittle}>HOME</Text>
      <View style={styles.red} >
      <Button title="Cadastrar Organizador" onPress={()=> navigation.navigate("CadastroOrganizadorScreen")}/>
      </View>
      <View style={styles.red}>
      <Button title="Cadastrar Evento" onPress={()=> navigation.navigate("CadastroEventoScreen")}/>
      </View>
      <View style={styles.red}>
      <Button title="Cadastrar Ingresso" onPress={()=> navigation.navigate("CadastroIngressoScreen")}/>
      </View>
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
  red:{
    padding:10,
    borderRadius:5,
    margin:1,
  }
});
