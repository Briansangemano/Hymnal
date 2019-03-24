import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Button, TextInput, TouchableOpacity, ImageBackground, ScrollView} from 'react-native';

export default class Himno25 extends Component {

    constructor(props) {
      super(props);
      this.state = { Text: "" };
    }
  
    render() {
      return (
            <View style={styles.container}> 
                <ScrollView>
                    <Text style={styles.text}>
                        1	La fe maravillosa y el excelente amor
                        {'\n'}
                        Proceden del triuno Dios
                        {'\n'}
                        Quien desea unirse a nosotros
                        {'\n'}
                        Para ser nuestro todo.
                        {'\n'}
                        El triuno Dios pasó por un proceso 
                        {'\n'}
                        De encarnación, crucifixión de los muertos Resucito,
                        {'\n'}
                        Y ascendió a los cielos
                        {'\n'}
                        Y finalmente consumado es,
                        {'\n'}
                        Pneuma que da vida.
                        {'\n'}
                        {'\n'}
                        2	El espíritu de vida que tiene divinidad {'\n'}
                        Humanidad y crucifixión{'\n'}
                        Resurrección y ascensión que es la realidad{'\n'}
                        Del cristo Todo-inclusivo {'\n'}
                        Mora en nuestro espíritu regenerado {'\n'}
                        Nuestro espíritu regenerado. {'\n'}
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