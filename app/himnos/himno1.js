import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Button, TextInput, TouchableOpacity, ImageBackground, ScrollView} from 'react-native';

export default class Himno1 extends Component {

    constructor(props) {
      super(props);
      this.state = { Text: "" };
    }
  
    render() {
        return (
            <View style={styles.container}>
                <ScrollView>
                    <Text style={styles.text}>  
                        1	Algunas veces,
                        {'\n'}
                        No hay lugar en mí para Tí,
                        {'\n'}
                        Más Tú me tocas,
                        {'\n'}
                        Y haces que yo vuelva a Ti.
                        {'\n'}
                        {'\n'}
                        <Text style={{fontWeight: 'bold'}}>              
                        Recobra mi ser, enciende mi amor por Ti,
                        {'\n'}
                        Llena Jesús, mi ser con Tu eterno amor,
                        {'\n'}
                        Hazme tuyo hoy.
                        </Text>
                        {'\n'}
                        {'\n'}
                        2	Oh cuánto anhelo{'\n'}
                        vaciar mi ser, llenarme de Ti,{'\n'}
                        Por Ti mi amor,{'\n'}
                        sea mi primer y mejor amor.{'\n'}
                        {'\n'}
                        3	Quiero amarte,{'\n'}
                        con toda mi alma y mi corazón,{'\n'}
                        A nadie tengo,{'\n'}
                        sino a Ti,  Señor solo a Ti.{'\n'}
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