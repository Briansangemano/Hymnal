import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Button, TextInput, TouchableOpacity, ImageBackground, ScrollView} from 'react-native';

export default class Himno19 extends Component {

    constructor(props) {
      super(props);
      this.state = { Text: "" };
    }
  
    render() {
      return (
            <View style={styles.container}> 
                <ScrollView>
                    <Text style={styles.text}>
                        1	Oh, mi amado
                        {'\n'}
                        Viene saltando los montes,
                        {'\n'}
                        Y brincando los collados,
                        {'\n'}
                        Su voz oigo, me vino a llamar
                        {'\n'}
                        Para así disfrutar,
                        {'\n'}
                        Su vida de resurrección.
                        {'\n'}
                        {'\n'}
                        2	Al oír Su llamado,{'\n'}
                        ¿Cómo no he de responder?{'\n'}
                        Y cual Lirio para Él,{'\n'}
                        Con mi boca cantaré{'\n'}
                        Loaré al Señor.{'\n'}
                        {'\n'}
                        <Text style={{fontWeight: 'bold'}}>
                        ¡Oh! ¡Aleluya!
                        {'\n'}
                        ¡Tu amor es lo que anhelo!
                        {'\n'}
                        Ven de prisa, Te espero,
                        {'\n'}
                        Señor Jesús, mi amor.
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