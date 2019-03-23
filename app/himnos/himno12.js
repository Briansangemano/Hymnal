import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Button, TextInput, TouchableOpacity, ImageBackground, ScrollView} from 'react-native';

export default class Himno12 extends Component {

    constructor(props) {
      super(props);
      this.state = { Text: "" };
    }
  
    render() {
      return (
            <View style={styles.container}> 
                <ScrollView>
                    <Text style={styles.text}>
                        1	No tenemos Sumo Sacerdote que,
                        {'\n'}
                        No se compadece en mi debilidad.
                        {'\n'}
                        Sino uno que, fue tentado en todo,
                        {'\n'}
                        Igual que nosotros sin pecado.
                        {'\n'}
                        {'\n'}
                        <Text style={{fontWeight: 'bold'}}>
                        Vamos confiadamente
                        {'\n'}
                        Al trono de la gracia por
                        {'\n'}
                        Misericordia, gracia,
                        {'\n'}
                        Y oportuno socorro hallar.
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