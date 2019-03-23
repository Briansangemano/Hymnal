import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Button, TextInput, TouchableOpacity, ImageBackground, ScrollView} from 'react-native';

export default class Himno20 extends Component {

    constructor(props) {
      super(props);
      this.state = { Text: "" };
    }
  
    render() {
      return (
            <View style={styles.container}> 
                <ScrollView>
                    <Text style={styles.text}>
                        1	Atado fui a la vid
                        {'\n'}
                        Dulce es su fruto a mí:
                        {'\n'}
                        Es Cristo hoy mi gozo y placer
                        {'\n'}
                        Mis ropas ya lavó,
                        {'\n'}
                        Dios me justificó
                        {'\n'}
                        Me queda, pues solo comer.
                        {'\n'}
                        {'\n'}
                        2	Muy tonto es hui,{'\n'}
                        Ir lejos de la vid,{'\n'}
                        Y solo cosas vanas probar;{'\n'}
                        En tanto, al disfrutar,{'\n'}
                        Mis ojos brillaran{'\n'}
                        Y blancos mis dientes serán.{'\n'}
                        {'\n'}
                        <Text style={{fontWeight: 'bold'}}>
                        ¡Oh! ¡Qué descanso sin igual!
                        {'\n'}
                        ¡Sólo su fruto comeré!
                        {'\n'}
                        Ser restringido hoy,
                        {'\n'}
                        Oh, qué gran bendición
                        {'\n'}
                        En la vid permanecer.
                        </Text>
                        {'\n'}
                        {'\n'}
                        3	¡Señor, Tú eres la vid!{'\n'}
                        Si permanezco en Ti, así podré crecer más y más.{'\n'}
                        Y a las bodas del Rey,{'\n'}
                        Prosigo yo con fe,{'\n'}
                        Bordando el vestido nupcial.{'\n'}
                        {'\n'}
                        4	Y en el milenio, al fin,{'\n'}
                        Tus enemigos, sí,{'\n'}
                        En polvo reducido serán.{'\n'}
                        Con vara y cetro real,{'\n'}
                        Siloh, Tú reinarás,{'\n'}
                        En cielo y Tierra en paz.{'\n'}
                        {'\n'}
                        <Text style={{fontWeight: 'bold'}}>
                        Hasta que vuelvas Oh Señor,{'\n'}
                        ¡Sólo su fruto comeré!{'\n'}
                        Ser restringido hoy,{'\n'}
                        Oh, qué gran bendición{'\n'}
                        En la vid permanecer.{'\n'}
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

    {/* {'\n'}
    <Text style={{fontWeight: 'bold'}}>
    </Text> */}