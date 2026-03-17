import { View, Text, TouchableOpacity, StyleSheet, Image, SafeAreaView } from "react-native";
import { useState } from "react";
import unipar from "./assets/unipar.png";

export default function App() {
  // Criamos dois estados independentes
  const [nos, setNos] = useState(10);
  const [eles, setEles] = useState(10);

  // Funções genéricas para facilitar
  const ajustarPlacar = (time, operacao) => {
    if (time === 'nos') {
      if (operacao === '+' && nos < 12) setNos(nos + 1);
      if (operacao === '-' && nos > 0) setNos(nos - 1);
    } else {
      if (operacao === '+' && eles < 12) setEles(eles + 1);
      if (operacao === '-' && eles > 0) setEles(eles - 1);
    }
  };

  return (
    <SafeAreaView style={styles.container}>

      <View style={styles.header}>
        <Image source={unipar} style={styles.logo} />
      </View>

      
      <View style={styles.placarContainer}>
        
        
        <View style={styles.coluna}>
          <Text style={styles.titulo}>NÓS</Text>
          <Text style={styles.numero}>{nos}</Text>
          <View style={styles.botoesContainer}>
            <TouchableOpacity 
              style={[styles.botao, styles.botaoMais]} 
              onPress={() => ajustarPlacar('nos', '+')}
            >
              <Text style={styles.textoBotao}>+</Text>
            </TouchableOpacity>
            <TouchableOpacity 
              style={[styles.botao, styles.botaoMenos]} 
              onPress={() => ajustarPlacar('nos', '-')}
            >
              <Text style={styles.textoBotao}>-</Text>
            </TouchableOpacity>
          </View>
        </View>

        
        <View style={styles.coluna}>
          <Text style={styles.titulo}>ELES</Text>
          <Text style={styles.numero}>{eles}</Text>
          <View style={styles.botoesContainer}>
            <TouchableOpacity 
              style={[styles.botao, styles.botaoMais]} 
              onPress={() => ajustarPlacar('eles', '+')}
            >
              <Text style={styles.textoBotao}>+</Text>
            </TouchableOpacity>
            <TouchableOpacity 
              style={[styles.botao, styles.botaoMenos]} 
              onPress={() => ajustarPlacar('eles', '-')}
            >
              <Text style={styles.textoBotao}>-</Text>
            </TouchableOpacity>
          </View>
        </View>

      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    alignItems: 'center',
    marginTop: 40,
    marginBottom: 50,
  },
  logo: {
    width: 150,
    height: 60,
    resizeMode: 'contain',
  },
  placarContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
  },
  coluna: {
    alignItems: 'center',
    flex: 1,
  },
  titulo: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#555',
    marginBottom: 20,
  },
  numero: {
    fontSize: 80,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 30,
  },
  botoesContainer: {
    flexDirection: 'row',
    gap: 10,
  },
  botao: {
    width: 65,
    height: 45,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
  },
  botaoMais: {
    backgroundColor: '#006437',
  },
  botaoMenos: {
    backgroundColor: '#800020',
  },
  textoBotao: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
  },
});