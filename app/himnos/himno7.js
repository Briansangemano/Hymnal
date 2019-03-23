import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Button, TextInput, TouchableOpacity, ImageBackground, ScrollView} from 'react-native';

export default class Himno7 extends Component {

    constructor(props) {
      super(props);
      this.state = { Text: "" };
    }
  
    render() {
      return (
            <View style={styles.container}> 
                <ScrollView>
                    <Text style={styles.text}>
                        1	Congregados en Tu nombre
                        {'\n'}
                        Hoy, Señor Jesús, aquí 
                        {'\n'}
                        Nos da gozo Tu presencia,
                        {'\n'}
                        Al centrarnos solo en Ti. 
                        {'\n'}
                        {'\n'}
                        2	Así como el Padre te ama{'\n'}
                        Nos amó con tal amor. {'\n'}
                        Apreciamos sus afectos{'\n'}
                        Para contigo, Señor. {'\n'}
                        {'\n'}
                        3	Todo Su descanso y gozo,{'\n'}
                        Su deleite eterno en Ti,{'\n'}
                        Solo Tú puedes sondear{'\n'}
                        Lo que el Padre halló en Ti. {'\n'} 
                        {'\n'}
                        4	Puso en Ti todo Su afecto.{'\n'}
                        “Mi Hijo amado” te llamó;{'\n'}
                        Más no te eximió de muerte,{'\n'}
                        Vida eterna así nos dio. {'\n'}
                        {'\n'}
                        5	¡Oh, qué gozo! ¡Qué canciones! {'\n'}
                        Cuando al fin Tu rostro ver;{'\n'}
                        Jesucristo dulce nombre,{'\n'}
                        Para el Padre un buen placer. {'\n'}
                        {'\n'}
                        6	Cánticos y alabanzas,{'\n'}
                        Himnos de eternal loor,{'\n'}
                        Salmos de gozo inefable, {'\n'}
                        Por la eternidad de Dios. {'\n'}
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