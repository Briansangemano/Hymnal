import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Button, TextInput, TouchableOpacity, ImageBackground, ScrollView} from 'react-native';

export default class Himno10 extends Component {

    constructor(props) {
      super(props);
      this.state = { Text: "" };
    }
  
    render() {
      return (
            <View style={styles.container}> 
                <ScrollView>
                    <Text style={styles.text}>
                        1-	Muertos en pecado estábamos,
                        {'\n'}
                        Esclavos todos a un destino atroz,
                        {'\n'}
                        Como salvos, de este mundo hemos de ser.
                        {'\n'}
                        {'\n'}
                        <Text style={{fontWeight: 'bold'}}>
                        Invocándole oh Jesús Jesús, 
                        {'\n'}
                        Cada momento a Él. 
                        {'\n'}
                        Invocándole Jesús. 
                        {'\n'}
                        Oh que manera es, Jesús, señor Jesús.
                        </Text>
                        {'\n'}
                        {'\n'}
                        2-	Aunque tanto amamos al señor,{'\n'}
                        Parece no le damos atención,{'\n'}
                        Como salvos de esta angustia {'\n'}
                        Hemos de ser.{'\n'}
                        {'\n'}
                        3-	A veces no somos auténticos, {'\n'}
                        Vivimos solo por la emoción,{'\n'}
                        Cuál es la manera de tratar al yo{'\n'}
                        {'\n'}
                        4-	Muchos salvos en el mundo ahí, {'\n'}
                        Que vagan donde está la unidad?, {'\n'}
                        Como hoy tu novia ganaras Señor.{'\n'}
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