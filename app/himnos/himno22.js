import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Button, TextInput, TouchableOpacity, ImageBackground, ScrollView} from 'react-native';

export default class Himno22 extends Component {

    constructor(props) {
      super(props);
      this.state = { Text: "" };
    }
  
    render() {
      return (
            <View style={styles.container}> 
                <ScrollView>
                    <Text style={styles.text}>
                        1	Oh señor, a ti vengo,
                        {'\n'}
                        Dulce comunión quiero tener!
                        {'\n'}
                        Llévame a disfrutar
                        {'\n'}
                        Tu rico ser singular!{'\n'}
                        {'\n'}
                        <Text style={{fontWeight: 'bold'}}>
                        Eres bello y hermoso,
                        {'\n'}
                        Frente a todo lo que eres, 
                        {'\n'}
                        ¡Cómo no te he de amar!
                        {'\n'}
                        ¡A ti me aferrare! Comunión buscare,
                        {'\n'}
                        Mi servicio te consagrare. 
                        </Text>
                        {'\n'}
                        {'\n'}
                        2	Privilegio tan grande,{'\n'}
                        Rescatado del mundo yo fui,{'\n'}
                        Adoración y loor,{'\n'}
                        A TI, te quiero rendir.{'\n'}
                        {'\n'}
                        3	En la iglesia me diste,{'\n'}
                        Tu descanso y habitación,{'\n'}
                        Eternamente estaré,{'\n'}
                        Agradecido a Ti.{'\n'}
                        {'\n'}
                        4	Vida rica, tan plena{'\n'}
                        Traspasado fuiste por mí,{'\n'}
                        Para que todo mi ser,{'\n'}
                        Hoy se derrame por Ti.{'\n'}
                        {'\n'}
                        5	Tu venida anheló,{'\n'}
                        Cara a cara Te contemplare,{'\n'}
                        Mientras espero, Señor,{'\n'}
                        Quemando en ti estaré.{'\n'}
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