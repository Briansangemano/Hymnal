import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Button, TextInput, TouchableOpacity, ImageBackground, ScrollView} from 'react-native';

export default class Himno8 extends Component {

    constructor(props) {
      super(props);
      this.state = { Text: "" };
    }
  
    render() {
      return (
            <View style={styles.container}> 
                <ScrollView>
                    <Text style={styles.text}>
                        1	Hay momentos que mi alma
                        {'\n'}
                        Es llena de amargura.
                        {'\n'}
                        Preguntas sin respuesta,
                        {'\n'}
                        Más Tú me atraes.
                        {'\n'}
                        {'\n'}
                        2	A ir y entrar{'\n'}
                        En Tu bendito santuario,{'\n'}
                        Y a lo alto volver mi mirar.{'\n'}
                        Vuelves mis persistentes dudas{'\n'}
                        En dulce oración.{'\n'}
                        {'\n'}
                        3	A quien tengo en los cielos{'\n'}
                        Sino a ti, Señor{'\n'}
                        Mi corazón y carne{'\n'}
                        Fallan sin cesar;{'\n'}
                        {'\n'}
                        4	Más Dios es{'\n'}
                        Mi porción y mi fortaleza;{'\n'}
                        Por siempre a Él me acercaré;{'\n'}
                        Mi dulce y eterno refugio,{'\n'}
                        Mi Salvador es. {'\n'}
                        {'\n'}
                        5	Vuélveme, necesito{'\n'}
                        Verte a ti, Jesús.{'\n'}
                        Aun cuando no comprendo{'\n'}
                        Tus sendas Señor;{'\n'}
                        {'\n'}
                        6	Haz de mí{'\n'}
                        Un tierno lactante que alabe, {'\n'}
                        Tu bien disfrute cada vez.{'\n'}
                        Imparte en cada experiencia,{'\n'}
                        Que en todo yo exhiba{'\n'}
                        Hoy Tu Ser,  hoy Tu ser.{'\n'}
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