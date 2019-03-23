import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Button, TextInput, TouchableOpacity, ImageBackground, ScrollView} from 'react-native';

export default class Himno15 extends Component {

    constructor(props) {
      super(props);
      this.state = { Text: "" };
    }
  
    render() {
      return (
            <View style={styles.container}> 
                <ScrollView>
                    <Text style={styles.text}>
                        1	El Señor llama hoy,
                        {'\n'}
                        Una raza de vencedores,
                        {'\n'}
                        Que le ame solo a Él, 
                        {'\n'}
                        Que le ame solo a Él.
                        {'\n'}
                        {'\n'}
                        2	Vencedor quieres ser, {'\n'}
                        Pues toma a Cristo hoy,{'\n'}
                        Como el primer amor, {'\n'}
                        Como el primer amor.{'\n'}
                        {'\n'}
                        <Text style={{fontWeight: 'bold'}}>
                        Cristo es nuestra porción, 
                        {'\n'}
                        En Él hallamos vida,
                        {'\n'}
                        Es la fuente del disfrute 
                        {'\n'}
                        De la gracia divina,
                        {'\n'}
                        Debemos darle preeminencia, 
                        {'\n'}
                        En nuestras vidas.
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