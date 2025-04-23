import { useEffect, useState } from "react";
import api from "../axios/axios";
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  Modal,
  StyleSheet,
  ActivityIndicator,
} from "react-native";

export default function EventosScreen() {
  const [eventos, setEventos] = useState([]);
  const [ingressos, setIngressos] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [loading, setLoading] = useState(true);
  const [eventoSelecionado, setEventoSelecionado] = useState('');

  useEffect(() => {
    getEventos();
  });

  async function getEventos() {
    try {
      const response = await api.getEventos();
      setEventos(response.data.events);
      setLoading(false);
    } catch (error) {
      console.log(error.response.data.error);
    }
  }

  async function abrirModalComIngressos(evento){
    setEventoSelecionado(evento);
    setModalVisible(true);

    try {
        const response = await api.getIngressosPorEvento(evento.id_evento);
        setIngressos(response.data.ingressos)
    } catch (error) {
      console.log("Erro ao buscar Ingressos", error.response) 
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Eventos Disponíveis</Text>
      {loading ? (
        <ActivityIndicator size="large" color="blue" />
      ) : (
        <FlatList
          data={eventos}
          keyExtractor={(item) => item.id_evento.toString()}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={styles.eventCard}
              onPress={() => abrirModalComIngressos(item)}
            >
              <Text style={styles.eventName}>{item.nome}</Text>
              <Text>{item.local}</Text>
              <Text>{new Date(item.data_hora).toLocaleString}</Text>
            </TouchableOpacity>
          )}
        />
      )}
      <Modal
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
        animationType="slide"
      >
        <View style={styles.modalContainer}>
          <Text>
            Ingressos para: {eventoSelecionado.nome}
          </Text>
          {ingressos.length === 0 ? (<Text>Nenhum ingresso Encontrado</Text>
          ):(
          <FlatList
          data={ingressos}
          keyExtractor={(item)=>item.id_ingresso.toString()}
          renderItem={({item}) => (
            <View style={styles.ingressoItem}>
              <Text>Tipo: {item.tipo}</Text>
              <Text>Preço: R${item.preco}</Text>
            </View>
          )}
          />
        )}
        <TouchableOpacity style={styles.closeButton}
        onPress={()=>setModalVisible(false)}
        >
          <Text style={{color: "white"}}>Fechar</Text>
        </TouchableOpacity>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    paddingTop: 50,
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 20,
  },
  eventCard: {
    padding: 15,
    backgroundColor: "#f1f1f1",
    marginBottom: 10,
    borderRadius: 8,
  },
  eventName: {
    fontSize: 18,
    fontWeight: "bold",
  },
  modalContainer: {
    flex: 1,
    padding: 20,
    paddingTop: 50,
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 15,
  },
  ingressoItem: {
    padding: 10,
    backgroundColor: "#e6e6e6",
    marginBottom: 10,
    borderRadius: 6,
  },
  closeButton: {
    marginTop: 20,
    backgroundColor: "blue",
    padding: 10,
    alignItems: "center",
    borderRadius: 6,
  },
});
