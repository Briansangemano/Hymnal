import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Button, TextInput, TouchableOpacity, ImageBackground, ScrollView} from 'react-native';

export default class Himno30 extends Component {

    constructor(props) {
      super(props);
      this.state = { Text: "" };
    }
  
    render() {
      return (
            <View style={styles.container}> 
                <ScrollView>
                    <Text style={styles.text}>
                        1	Cristo vida vino a ser, la Trinidad procesada.
                        {'\n'}
                        El Padre origen es, Fuente que brota para ser
                        {'\n'}
                        Dios el Hijo como el manantial
                        {'\n'}
                        En el Espíritu, un río que vida da
                        {'\n'}
                        ¡Cómo este milagro entender!
                        {'\n'}
                        El Triuno Dios fluye en mi ser.
                        {'\n'}
                        <Text style={{fontWeight: 'bold'}}>{'\n'}
                        ¡Oh! Ríos de vida están fluyendo desde mi interior.
                        {'\n'}
                        Ríos de vida están fluyendo desde mi interior.
                        {'\n'}
                        Esta vida al fluir
                        {'\n'}
                        Se da en abundancia a mí
                        {'\n'}
                        Al pecado da fin, Fluye poder de mí
                        {'\n'}
                        Libre soy, espontáneamente vence en mí.</Text>
                        {'\n'}
                        {'\n'}
                        2	Tal vida no sólo es para vencer y libertar{'\n'}
                        Dios tiene una intención, fluye para cumplir Su plan{'\n'}
                        Esta vida me incluye así en Su consumación,    {'\n'}
                        En Su  totalidad{'\n'}
                        Al fluir crecimiento me da{'\n'}
                        Y me lleva a Su destinación.{'\n'}
                        {'\n'}
                        <Text style={{fontWeight: 'bold'}}>
                        ¡Oh! Ríos de vida están fluyendo desde mi interior.{'\n'}
                        Ríos de vida están fluyendo desde mi interior.{'\n'}
                        Y seremos con Dios{'\n'}
                        Una mutua habitación{'\n'}
                        Bebed del río pues,{'\n'}
                        Del árbol hoy comed,{'\n'}
                        Que serán estos nuestro disfrute eternal.</Text>{'\n'}
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