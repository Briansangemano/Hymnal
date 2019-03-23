import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Button, TextInput, TouchableOpacity, ImageBackground, ScrollView} from 'react-native';

export default class Himno2 extends Component {

    constructor(props) {
      super(props);
      this.state = { Text: "" };
    }
  
    render() {
      return (
            <View style={styles.container}> 
                <ScrollView>
                    <Text style={styles.text}>
                        1   ¡Nada es más precioso que Cristo en mi espíritu!
                        {'\n'}
                        Puede todo acabar y aquí El estará.
                        {'\n'}
                        Y cuál simiente plantada fue en mí,
                        {'\n'}
                        Queda solo invocar, pues disponible Él 
                        {'\n'}
                        Está.
                        {'\n'}
                        {'\n'}
                        <Text style={{fontWeight: 'bold'}}>
                        ¡Señor Jesús!
                        {'\n'}
                        Socórreme en mis flaquezas;
                        {'\n'}
                        Sé que Tu vida que he probado cada día,
                        {'\n'}
                        Es suficiente.
                        </Text>
                        {'\n'}
                        {'\n'}
                        2	¡Nada es más precioso que Cristo en mi espíritu!{'\n'}
                        Sé dónde encontrarlo y oír Su voz.{'\n'}
                        Puedo seguirlo, fiel siendo a la unción,{'\n'}
                        Que todo me enseña y es permanente y real.{'\n'}
                        {'\n'}
                        <Text style={{fontWeight: 'bold'}}>
                        ¡Señor Jesús!{'\n'}
                        Socórreme en mis flaquezas;{'\n'}
                        Sé que Tu vida que he probado cada día,{'\n'}
                        Es suficiente{'\n'}
                        </Text>
                        {'\n'}
                        3	¡Nada es más precioso que Cristo en mi espíritu!{'\n'}
                        Señor esa es la llave de Tú eterno plan.{'\n'}
                        Siendo mi espíritu el punto de partida,{'\n'}
                        Su vida se expande hasta saturar mi ser.{'\n'}
                        {'\n'}
                        <Text style={{fontWeight: 'bold'}}>
                        ¡Señor Jesús!{'\n'}
                        De Tus riquezas quiero disfrutar;{'\n'}
                        Tu rica vida que he probado cada día,{'\n'}
                        Es suficiente.{'\n'}
                        </Text>
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