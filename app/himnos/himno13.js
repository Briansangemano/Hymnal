import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Button, TextInput, TouchableOpacity, ImageBackground, ScrollView} from 'react-native';

export default class Himno13 extends Component {

    constructor(props) {
      super(props);
      this.state = { Text: "" };
    }
  
    render() {
      return (
            <View style={styles.container}> 
                <ScrollView>
                    <Text style={styles.text}>
                        1	Tenemos un Padre,
                        {'\n'}
                        Con un corazón lleno de amor,
                        {'\n'}
                        ¡Cuánto Él nos ama!,
                        {'\n'}
                        Su amor no tiene límites.
                        {'\n'}
                        {'\n'}
                        <Text style={{fontWeight: 'bold'}}>
                        Y aunque lejos esté,
                        {'\n'}
                        A Él siempre puedo volver,
                        {'\n'}
                        ¡Qué gran amor tiene el Padre a nos!
                        {'\n'}
                        Simplemente volver,
                        {'\n'}
                        Y en sus brazos permanecer.
                        {'\n'}
                        ¡Qué gran amor tiene el Padre a nos!
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