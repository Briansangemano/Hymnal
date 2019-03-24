import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Button, TextInput, TouchableOpacity, ImageBackground, ScrollView} from 'react-native';

export default class Himno29 extends Component {

    constructor(props) {
      super(props);
      this.state = { Text: "" };
    }
  
    render() {
      return (
            <View style={styles.container}> 
                <ScrollView>
                    <Text style={styles.text}>
                        1	Amor de Dios, Gracia de Cristo 
                        {'\n'}
                        Y comunión del espíritu,
                        {'\n'}
                        Sean con todos, sean con todos 
                        {'\n'}
                        Sean con todos, sean con todos
                        {'\n'}
                        {'\n'}
                        2	Desde el trono de Dios{'\n'}
                        Y del Cordero fluye el rio de agua de vida{'\n'}
                        Resplandeciente como el cristal{'\n'}
                        Alcanzando al hombre.{'\n'}
                        {'\n'}
                        3	Y a uno y otro lado{'\n'}
                        Del río estaba el árbol,{'\n'}
                        De la vida, de la vida{'\n'}
                        Que produce doce frutos.{'\n'}
                        {'\n'}
                        4	Cada mes da su fruto y las hojas del {'\n'}
                        Árbol son para sanar,{'\n'}
                        Para sanar a las naciones.{'\n'}
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