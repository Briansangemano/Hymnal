import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Button, TextInput, TouchableOpacity, ImageBackground, ScrollView} from 'react-native';

export default class Himno16 extends Component {

    constructor(props) {
      super(props);
      this.state = { Text: "" };
    }
  
    render() {
      return (
            <View style={styles.container}> 
                <ScrollView>
                    <Text style={styles.text}>
                        1	Vivo para amarte mi Jesús,
                        {'\n'}
                        Pues Tú eres mi mejor amor.
                        {'\n'}
                        Si yo te olvidé, te pido perdón,
                        {'\n'}
                        Vuelvo a mi amor nupcial.
                        {'\n'}
                        {'\n'}
                        2	Tú excedes lo que amo aquí,{'\n'}
                        Eres bello y sin comparación,{'\n'}
                        ¿Quién podrá igualar el amor sin par{'\n'}
                        De mi Novio para mí?
                        {'\n'}
                        {'\n'}
                        <Text style={{fontWeight: 'bold'}}>
                        Hoy por fe declaro{'\n'}
                        {'\n'}
                        Que en mi corazón
                        {'\n'}
                        Tú siempre el primer lugar tendrás,
                        {'\n'}
                        Que Tu ser inunde todo mi ser.
                        {'\n'}
                        Mi Jesús, mi amor,
                        {'\n'}
                        Yo te amaré hasta el fin.
                        </Text>
                        {'\n'}
                        {'\n'}
                        3	Lo que quieras puedes Tú quitar,{'\n'}
                        Más remplázalo con más de Ti.{'\n'}
                        ¿Qué más quiero yo si te tengo a Ti?{'\n'}
                        Todo en Ti precioso es.{'\n'}
                        {'\n'}
                        4	Todos buscan lo que es vanidad{'\n'}
                        Todo llega pronto a su fin.{'\n'}
                        Yo te tengo a Ti, Tuyo soy, Señor,{'\n'}
                        Para amarnos con fervor. <Text style={{fontWeight: 'bold'}}>/Coro/</Text>{'\n'}
                        {'\n'}
                        5	Cuánto amo dedicar Señor,{'\n'}
                        Tiempo a solas para amarnos más,{'\n'}
                        Para contemplar Tu gloriosa faz,{'\n'}
                        ¡Qué tesoro tengo en mí!{'\n'}
                        {'\n'}
                        6	En mi vida, en toda relación;{'\n'}
                        En mi obra y servicio a Ti.{'\n'}
                        En todo mi ser, con gozo, Señor,{'\n'}
                        Tú el primer lugar tendrás. <Text style={{fontWeight: 'bold'}}>/Coro/</Text>{'\n'}
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