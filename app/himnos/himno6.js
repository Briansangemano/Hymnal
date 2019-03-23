import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Button, TextInput, TouchableOpacity, ImageBackground, ScrollView} from 'react-native';

export default class Himno6 extends Component {

    constructor(props) {
      super(props);
      this.state = { Text: "" };
    }
  
    render() {
      return (
            <View style={styles.container}> 
                <ScrollView>
                    <Text style={styles.text}>
                        1	Vida santa, que el regreso del Señor espera,
                        {'\n'}
                        Dios quiere en mí, para mí,
                        {'\n'}
                        Siendo saturada del Espíritu a diario,
                        {'\n'}
                        Mi alma y mi ser y agradar a Cristo así.
                        {'\n'}
                        {'\n'}
                        <Text style={{fontWeight: 'bold'}}>
                        Vida de orar sin cesar,
                        {'\n'}
                        De gozo al disfrutar, en comunión invocar: 
                        {'\n'}
                        Jesús.
                        </Text>
                        {'\n'}
                        {'\n'}
                        2	Siempre vigilante y prudente espero,{'\n'}
                        Jesús mi Señor, mi Señor,{'\n'}
                        Vivo la vida de iglesia con un solo anhelo,{'\n'}
                        A Cristo ganar y buscar,{'\n'}
                        Crecer en amor.{'\n'}
                        {'\n'}
                        <Text style={{fontWeight: 'bold'}}>
                        Su Espíritu no apagar,{'\n'}
                        No despreciar Su hablar,{'\n'}
                        En comunión invocar: Jesús.{'\n'}
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