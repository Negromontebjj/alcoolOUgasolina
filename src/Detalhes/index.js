import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';

export default function Detalhes(props) {



  return (

    <View style={styles.container}>
      <View>
        <Image 
          style={styles.logo}
          source={require('../img/gas.png')}
        />
      </View>
      <Text style={styles.compensa}>Compensa usar : {props.escolha}</Text>
      <Text style={styles.precos}>Com os Preços:</Text>
      <Text style={styles.alcool}>Álcool : R$ {props.precoAlcool}</Text>
      <Text style={styles.gasolina}>Gasolina : R$ {props.precoGasolina}</Text>
      <TouchableOpacity style={styles.areaBTN} onPress={props.fechar}>
        <Text style={styles.textBTN}>Calcular Novamente</Text>
      </TouchableOpacity> 
    </View>

  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
    alignItems: 'center'
  },
  logo:{
    marginTop: 50
  },

  areaBTN:{
    backgroundColor: '#ff0000',
    marginTop: 40,
    height: 50,
    width: '70%',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    
  },

  textBTN:{
    color:'#fff',
    fontSize: 19,
    fontWeight: 'bold'

  },


  compensa:{
    color: '#32CD32',
    marginTop: 40,
    fontSize: 20
  },
  precos:{
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
    marginTop: 30
  },
  alcool:{
    color: '#fff',
    fontSize: 20,
    marginTop: 20
  },
  gasolina:{
    color: '#fff',
    fontSize: 20,
    marginTop: 10
  }

})