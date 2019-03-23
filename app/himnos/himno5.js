import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Button, TextInput, TouchableOpacity, ImageBackground, ScrollView} from 'react-native';

export default class Himno5 extends Component {

    constructor(props) {
      super(props);
      this.state = { Text: "" };
    }
  
    render() {
      return (
            <View style={styles.container}> 
                <ScrollView>
                    <Text style={styles.text}>
                        1	Tú eres el primer amor,
                        {'\n'}
                        De todos es el mejor,
                        {'\n'}
                        Y así el corazón,
                        {'\n'}
                        Descansa solo en tu amor,
                        {'\n'}
                        Te amamos por ser Tú,
                        {'\n'}
                        No por lo que Tú nos das,
                        {'\n'}
                        No se puede comparar, 
                        {'\n'}
                        el gozo de amarte a Ti
                        {'\n'}
                        {'\n'}
                        <Text style={{fontWeight: 'bold'}}>
                        Cuántas cosas se han dejado ya,
                        {'\n'}
                        Nuestro corazón se vuelve a Ti
                        {'\n'}
                        No amamos nada más,
                        {'\n'}
                        Tú eres el mejor amor.
                        </Text>
                        {'\n'}
                        {'\n'}
                        2	Nada deseamos  ya,  nada que no sea Tú,{'\n'}
                        Nada aspiramos ya, solo ser llenos de Ti{'\n'}
                        Tú eres el primer amor, de todos es el mejor,{'\n'}
                        Y así el corazón, descansa solo en Tú amor.{'\n'}
                        {'\n'}
                        <Text style={{fontWeight: 'bold'}}>
                        (Se repite el coro 2 veces al final){'\n'}</Text>
                        Tú eres el mejor amor…{'\n'}
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