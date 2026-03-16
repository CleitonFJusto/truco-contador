import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { useState } from "react";
import { Image } from "react-native";
import unipar from "./assets/unipar.png";

export default function App() {

  const [numero, setNumero] = useState(0);

  function aumentar(){
    if(numero >=12){
      setNumero(0);
    }else{
      setNumero(numero + 1)
  }
}


  function diminuir() {
    if(numero > 0){
    setNumero(numero - 1);
  }
}

  return (
    <View style={styles.container}>
      <View>
      <Image source={unipar} style={{ 
         widht:60,
         height:40, 
         marginBottom:20,
         resizeMode:'contain'}}/>
      </View>
      <Text style={styles.titulo}>MARCADOR</Text>
      <Text style={styles.numero}>{numero}</Text>

      <View style={styles.botoes}>
        <TouchableOpacity style={styles.botaoMais} onPress={aumentar}>
          <Text style={styles.texto}>+</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.botaoMenos} onPress={diminuir}>
          <Text style={styles.texto}>-</Text>
        </TouchableOpacity>
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

  titulo: {
    fontSize: 10,
    marginBottom: 10,
  },

  numero: {
    fontSize: 40,
    marginBottom: 40,
  },

  botoes: {
    flexDirection: "row",
    gap: 20,
  },

  botaoMais: {
    width: 50,
    height: 30,
    backgroundColor: "green",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 8,
  },

  botaoMenos: {
    width: 50,
    height: 30,
    backgroundColor: "darkred",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 8,
  },

  texto: {
    color: "white",
    fontSize: 22,
  },
});