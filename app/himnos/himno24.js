import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Button, TextInput, TouchableOpacity, ImageBackground, ScrollView} from 'react-native';

export default class Himno24 extends Component {

    constructor(props) {
      super(props);
      this.state = { Text: "" };
    }
  
    render() {
      return (
            <View style={styles.container}> 
                <ScrollView>
                    <Text style={styles.text}>
                        1	Noé llevo una vida que la era cambio.
                        {'\n'}
                        La gracia de Dios hallo
                        {'\n'}
                        Ante la corriente del mundo firme,
                        {'\n'}
                        El arca edifico.
                        {'\n'}
                        <Text style={{fontWeight: 'bold'}}>{'\n'}
                        ¿Cuál es tu elección: Serás un vencedor?
                        {'\n'}
                        Quien no se avergüence de amar al Señor
                        {'\n'}
                        Coma del Árbol de vida y beba de ese rio
                        {'\n'}
                        ¿Cuál es tu elección: Serás un vencedor?
                        {'\n'}
                        Dejar el mundo y consagrarte a cambiar la 
                        {'\n'}
                        Era Señor me doy a Ti, por tu venir.</Text>
                        {'\n'}
                        {'\n'}
                        2	Moisés fue una persona llamada por Dios,{'\n'}
                        Destinado a cambiar la era.{'\n'}
                        Compañero de Dios fue por su mover{'\n'}
                        Era sabio, manso y fiel.{'\n'}
                        {'\n'}
                        3	Samuel sacerdote agradable a Dios,{'\n'}
                        Absoluto para El.{'\n'}
                        Del pecado, muerte y mundo se libró,{'\n'}
                        Nazareo para Dios.{'\n'}
                        {'\n'}
                        4	Daniel con compañeros su palabra comió,{'\n'}
                        Y del mundo se apartó.{'\n'}
                        Orando en espíritu, alineados con Dios.{'\n'}
                        Por su pueblo, Su intención.{'\n'}
                        {'\n'}
                        <Text style={{fontWeight: 'bold'}}>
                        Esta es mi elección, seré un vencedor,{'\n'}
                        Quien no se avergüenza de amar al señor,{'\n'}
                        Come del Árbol de vida y bebe de ese rio.{'\n'}
                        Me consagro a ser un vencedor viviente.{'\n'}
                        Ver la celestial visión y arder fervientemente{'\n'}
                        Para la era cambiar, me doy a Ti.</Text>
                    </Text>
                </ScrollView>
            </View>
      );
  }
  
    }
  const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    text: {
        margin: 20,
        fontSize: 20,
        color: 'black',
    },
});

    {/* {'\n'}
    <Text style={{fontWeight: 'bold'}}>
    </Text> */}