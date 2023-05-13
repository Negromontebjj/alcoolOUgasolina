import React, {useState} from 'react';
import { 
  View, 
  Text, 
  TouchableOpacity, 
  StyleSheet, 
  TextInput, 
  KeyboardAvoidingView, 
  Image, Modal, Alert } from 'react-native';

import Detalhes from './src/Detalhes';


export default function alcoolOUgasolina() {
  const [modal, setModal] = useState(false);
  const [precoAlcool, setPrecoAlcool] = useState('')
  const [precoGasolina, setPrecoGasolina] = useState('')
  const [resultadoF, setResultadoF] = useState('')

  const resultado = (precoAlcool / precoGasolina)

  function abrirModal() {
    setModal(true)
     if(resultado < 0.7){
        setResultadoF('Alcool')      
    }else {
        setResultadoF('Gasolina')
        
      }
       
  }
  

  function fecharModal(){
    setModal(false);
    setPrecoAlcool('')
    setPrecoGasolina('')
  }

  return(
    <KeyboardAvoidingView 
    behavior='position'
    style={styles.container}>
      <View style={styles.areaLogo}>
        <Image 
          style={styles.logo}
          source={require('./src/img/logo.png')}
        />
      </View>
      <View >
        <Text style={styles.text}>Qual Melhor Opção?</Text>
      </View>
      <View style={styles.textAlcool}>
        <Text style={styles.alcoolPrecoText}>Álcool (preço por litro)</Text>
        <TextInput 
        style={styles.input} 
        onChangeText={(textoAlcool) => setPrecoAlcool(textoAlcool)}
        keyboardType='numeric'
        placeholder='EX: 0.00'
        value= {precoAlcool.toString()}
        
        />

        <Text style={styles.gasolinaPrecoText}>Gasolina (preço por litro)</Text>
        <TextInput 
        style={styles.input}
        placeholder='EX: 0.00'
        onChangeText={(textoGasolina) => setPrecoGasolina(textoGasolina)}
        keyboardType='numeric'
        value={precoGasolina.toString()}
        />


        <TouchableOpacity style={styles.areaBTN} onPress={abrirModal}>
          <Text style={styles.textBTN}>Calcular</Text>
        </TouchableOpacity>


      </View>

      <Modal visible={modal} animationType='slide'>
        <Detalhes 
        fechar={fecharModal}
        escolha={resultadoF}
        precoAlcool={precoAlcool}
        precoGasolina={precoGasolina}
        />
        
        
      </Modal>
      
      <View style={styles.Areameunome}>
        <Text style={styles.Textmeunome}>By Carlos Negromonte</Text>
      </View>
      
    </KeyboardAvoidingView>
  )
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: '#121212',
    alignItems:'center'
  },
  text:{
    color: '#fff',
    fontSize: 30,
    marginTop: 20,
    fontWeight: 'bold'
  },
  areaLogo:{
    alignItems: 'center'
  },

  logo:{
    marginTop: 50
  },
  alcoolPrecoText:{
    color: '#fff',
    fontSize: 16
  }, 

  gasolinaPrecoText:{
    color: '#fff',
    
    marginTop: 15,
    fontSize: 16
  }, 

  textAlcool: {
    flex: 1,
    marginTop: 50,
  },
  input:{
    
    backgroundColor: '#fff',
    borderRadius: 10,
    marginTop: 3,
    padding: 10
  },
  areaBTN:{
    backgroundColor: '#ff0000',
    marginTop: 20,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10
  },

  textBTN:{
    color:'#fff',
    fontSize: 30,
  },

  Areameunome:{
    alignItems:'center'
  },
  Textmeunome:{
    color:'#ff0000'
  }

})
