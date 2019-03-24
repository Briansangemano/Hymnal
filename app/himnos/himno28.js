import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Button, TextInput, TouchableOpacity, ImageBackground, ScrollView} from 'react-native';

export default class Himno28 extends Component {

    constructor(props) {
      super(props);
      this.state = { Text: "" };
    }
  
    render() {
      return (
            <View style={styles.container}> 
                <ScrollView>
                    <Text style={styles.text}>
                        1	Nunca pensé que Dios seria disfrutable.
                        {'\n'}
                        Mi experiencia de El indescriptible es.
                        {'\n'}
                        Cuando mi corazón abrí hacia Él,
                        {'\n'}
                        El vino y me lleno hasta rebosar.
                        {'\n'}
                        <Text style={{fontWeight: 'bold'}}>{'\n'}
                        Señor, ¡Maravilloso!
                        {'\n'}
                        Maravilloso,
                        {'\n'}
                        Jesús, Jesús.</Text>
                        {'\n'}
                        {'\n'}
                        2	No lo busque ni le pedí ven hacia mí,{'\n'}
                        A veces pienso: ¿es esto un sueño celestial?{'\n'}
                        No le merezco, un pecador como yo,{'\n'}
                        Su compasión, amigos, es la razón.{'\n'}
                        {'\n'}
                        <Text style={{fontWeight: 'bold'}}>
                        Oh, Tu misericordia,{'\n'}
                        Señor, me ha alcanzado;{'\n'}
                        Jesús, Jesús.{'\n'}
                        </Text>
                        {'\n'}
                        3	Mis amigos dicen: “no te des tanto a Él,{'\n'}
                        Sé muy normal y sin al extremo llegar”.{'\n'}
                        Mas no lo puedo impedir, no hay otro igual,{'\n'}
                        El me toco y ahora vivo feliz.{'\n'}
                        {'\n'}
                        <Text style={{fontWeight: 'bold'}}>
                        Tu amor me toco,{'\n'}
                        Tu amor me ha “arruinado”,{'\n'}
                        Jesús, Jesús.{'\n'}
                        </Text>
                        {'\n'}
                        4	Cada momento quiero vivir para El, {'\n'}
                        En todo mi Señor, Tú me debes ganar,{'\n'}
                        Soy solo un vaso, Tú el tesoro en mí,{'\n'}
                        Señor espárcete en todo mi ser.{'\n'}
                        {'\n'}
                        <Text style={{fontWeight: 'bold'}}>
                        ¡Señor Jesús! Clamando,{'\n'}
                        El precioso nombre,{'\n'}
                        Jesús, Jesús.{'\n'}
                        </Text>
                        {'\n'}
                        5	Ahora espero que Tú  vuelvas  otra vez,{'\n'}
                        Mantenme fiel a Ti, Señor hasta el final,{'\n'}
                        A fin de verte cara a cara Señor,{'\n'}
                        Este es mi gran deseo, ser vencedor.{'\n'}
                        {'\n'}
                        <Text style={{fontWeight: 'bold'}}>{'\n'}
                        Señor, Tu vienes pronto,{'\n'}
                        Oh, amado Novio,{'\n'}
                        Jesús, Jesús.</Text>{'\n'}
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