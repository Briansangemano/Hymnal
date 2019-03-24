import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Button, TextInput, TouchableOpacity, ImageBackground, ScrollView} from 'react-native';

export default class Himno23 extends Component {

    constructor(props) {
      super(props);
      this.state = { Text: "" };
    }
  
    render() {
      return (
            <View style={styles.container}> 
                <ScrollView>
                    <Text style={styles.text}>
                        1	En la vida de la iglesia hay suplir sin fin;
                        {'\n'}
                        Vida rica y abundante para los que creen.
                        {'\n'}
                        Solo en la iglesia se disfruta del Señor.
                        {'\n'}
                        Comiendo y bebiendo de la vida de Jesús.
                        {'\n'}
                        <Text style={{fontWeight: 'bold'}}>{'\n'}
                        ¡Oh! Canto de gozo hay
                        {'\n'}
                        En la vida de la iglesia
                        {'\n'}
                        Donde se come y se bebe a Jesús
                        {'\n'}
                        Me satisface con
                        {'\n'}
                        Su abundancia ¡Aleluya!
                        {'\n'}
                        Nunca en la iglesia habrá falta o escasez.</Text>
                        {'\n'}
                        {'\n'}
                        2	El señor Jesús es pan de vida celestial;{'\n'}
                        Solo en la iglesia se lo puede encontrar:{'\n'}
                        Pero si dejamos a la iglesia y al Señor,{'\n'}
                        Estaremos en el mundo y en la división.{'\n'}
                        {'\n'}
                        3	Dios es exclusivo y se dispensa en un lugar;{'\n'}
                        La iglesia local es donde Él se expresa ya.{'\n'}
                        Fluye de mi espíritu como un torrente hoy,{'\n'}
                        Y le entrego totalmente todo lo que soy.{'\n'}
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