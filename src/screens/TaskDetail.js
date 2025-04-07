import React from "react";
import {View, Text, StyleSheet} from "react-native";

export default function TaskDetail({route}){
    const {task} = route.params;
    return(
    <View style={styles.container}>
        <View style={styles.itemCard}>
            <Text style={styles.string}>Detalhes da tarefa: {task.title}</Text>
            <Text style={styles.string}>Data: {task.date}</Text>
            <Text style={styles.string}>Hora: {task.time}</Text>
            <Text style={styles.string}>Local: {task.address}</Text>
        </View>
    </View>
    )
}

const styles= StyleSheet.create({
    container:{
        flex:1,
        padding:20,
        paddingTop:50
    },
    itemCard:{
        padding:15,
        height:200,
        borderRadius:8,
        backgroundColor: "blue",
        justifyContent:"space-between",
        fontSize:32
    },
    string:{
        fontSize:25
    }
})