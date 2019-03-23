import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Button, TextInput, TouchableOpacity, ImageBackground, ScrollView} from 'react-native';

export default class Himno14 extends Component {

    constructor(props) {
      super(props);
      this.state = { Text: "" };
    }
  
    render() {
      return (
            <View style={styles.container}> 
                <ScrollView>
                    <Text style={styles.text}>
                        1	Persigue, disfruta, sé hallado en Él.
                        {'\n'}
                        Olvida y deja todo. 
                        {'\n'}
                        Y gana, posee, captura a Aquel,
                        {'\n'}
                        Que es tu visión central.
                        {'\n'}
                        {'\n'}
                        <Text style={{fontWeight: 'bold'}}>
                        Olvidando todo, lo que queda atrás,
                        {'\n'}
                        Ve en pos de Él con vehemencia,
                        {'\n'}
                        Redime el tiempo, extiéndete a Él,
                        {'\n'}
                        A Cristo logra asir.
                        </Text>
                        {'\n'}
                        {'\n'}
                        2	A Cristo el Supremo persigue hoy,{'\n'}
                        Él es el más precioso.{'\n'}
                        Olvida, y suelta, hoy lo demás.{'\n'}
                        Con fuerza ama al Señor.{'\n'}
                        {'\n'}
                        3	Jesús es mi centro y realidad,{'\n'}
                        También mi vida eterna.{'\n'}
                        Todo es basura, comparado a Él,{'\n'}
                        Por tanto ¡Gana al Señor!{'\n'}
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