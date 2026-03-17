import { View, Text, TouchableOpacity, StyleSheet, Image, SafeAreaView } from "react-native";
import { useState } from "react";
import unipar from "./assets/unipar.png";

export default function App() {
  const [nos, setNos] = useState(0);
  const [eles, setEles] = useState(0);
  const [vitoriasNos, setVitoriasNos] = useState(0);
  const [vitoriasEles, setVitoriasEles] = useState(0);

  const adicionarPontos = (time, pontos) => {
    if (time === 'nos') {
      const novoValor = nos + pontos;
      if (novoValor >= 12) {
        setNos(0);
        setEles(0);
        setVitoriasNos(vitoriasNos + 1);
      } else {
        setNos(novoValor);
      }
    } else {
      const novoValor = eles + pontos;
      if (novoValor >= 12) {
        setNos(0);
        setEles(0);
        setVitoriasEles(vitoriasEles + 1);
      } else {
        setEles(novoValor);
      }
    }
  };

  const removerPonto = (time) => {
    if (time === 'nos' && nos > 0) setNos(nos - 1);
    if (time === 'eles' && eles > 0) setEles(eles - 1);
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
          <Text style={styles.vitorias}>Ganhou {vitoriasNos}</Text>
          
          <View style={styles.gradeBotoes}>
            <View style={styles.linhaHorizontal}>
              <TouchableOpacity style={[styles.botaoQuadrado, styles.corMais]} onPress={() => adicionarPontos('nos', 1)}>
                <Text style={styles.textoBotao}>+</Text>
              </TouchableOpacity>
              <TouchableOpacity style={[styles.botaoQuadrado, styles.corMenos]} onPress={() => removerPonto('nos')}>
                <Text style={styles.textoBotao}>-</Text>
              </TouchableOpacity>
            </View>

            <TouchableOpacity style={[styles.botaoLongo, styles.corTruco]} onPress={() => adicionarPontos('nos', 3)}>
              <Text style={styles.textoAposta}>TRUCO</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.botaoLongo, styles.corSeis]} onPress={() => adicionarPontos('nos', 6)}>
              <Text style={styles.textoAposta}>SEISSS</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.botaoLongo, styles.corNove]} onPress={() => adicionarPontos('nos', 9)}>
              <Text style={styles.textoAposta}>NOVEEE</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.botaoLongo, styles.corDoze]} onPress={() => adicionarPontos('nos', 12)}>
              <Text style={styles.textoAposta}>DOZI</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.coluna}>
          <Text style={styles.titulo}>ELES</Text>
          <Text style={styles.numero}>{eles}</Text>
          <Text style={styles.vitorias}>Ganhou {vitoriasEles}</Text>
          
          <View style={styles.gradeBotoes}>
            <View style={styles.linhaHorizontal}>
              <TouchableOpacity style={[styles.botaoQuadrado, styles.corMais]} onPress={() => adicionarPontos('eles', 1)}>
                <Text style={styles.textoBotao}>+</Text>
              </TouchableOpacity>
              <TouchableOpacity style={[styles.botaoQuadrado, styles.corMenos]} onPress={() => removerPonto('eles')}>
                <Text style={styles.textoBotao}>-</Text>
              </TouchableOpacity>
            </View>

            <TouchableOpacity style={[styles.botaoLongo, styles.corTruco]} onPress={() => adicionarPontos('eles', 3)}>
              <Text style={styles.textoAposta}>TRUCO</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.botaoLongo, styles.corSeis]} onPress={() => adicionarPontos('eles', 6)}>
              <Text style={styles.textoAposta}>SEISSS</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.botaoLongo, styles.corNove]} onPress={() => adicionarPontos('eles', 9)}>
              <Text style={styles.textoAposta}>NOVEEE</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.botaoLongo, styles.corDoze]} onPress={() => adicionarPontos('eles', 12)}>
              <Text style={styles.textoAposta}>DOZI</Text>
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
    alignItems: 'center',
  },
  header: {
    marginTop: 30,
    marginBottom: 40,
  },
  logo: {
    width: 130,
    height: 60,
    resizeMode: 'contain',
  },
  placarContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 20, 
  },
  coluna: {
    alignItems: 'center',
    width: 140, 
  },
  titulo: {
    fontSize: 14,
    fontWeight: '700',
    color: '#666',
    letterSpacing: 1,
  },
  numero: {
    fontSize: 60,
    fontWeight: 'bold',
    color: '#333',
    marginTop: 15,
  },
  vitorias: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#444',
    marginBottom: 15,
  },
  gradeBotoes: {
    width: '100%',
    gap: 8,
  },
  linhaHorizontal: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 2,
  },
  botaoQuadrado: {
    width: 65,
    height: 45,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  botaoLongo: {
    width: 138, 
    height: 45,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  corMais: { backgroundColor: '#005D3B' },
  corMenos: { backgroundColor: '#800A26' },
  corTruco: { backgroundColor: '#005A66' },
  corSeis: { backgroundColor: '#002C61' },
  corNove: { backgroundColor: '#450061' },
  corDoze: { backgroundColor: '#610000' },
  textoBotao: {
    color: 'white',
    fontSize: 22,
    fontWeight: 'bold',
  },
  textoAposta: {
    color: 'white',
    fontSize: 15,
    fontWeight: 'bold',
  },
});