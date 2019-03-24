import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Button, TextInput, TouchableOpacity, ImageBackground, ScrollView} from 'react-native';

export default class Himno21 extends Component {

    constructor(props) {
      super(props);
      this.state = { Text: "" };
    }
  
    render() {
      return (
            <View style={styles.container}> 
                <ScrollView>
                    <Text style={styles.text}>
                        1	Son los planes mis amos{'\n'}
                        Que engañan, maltratan a mi corazón  {'\n'}                   
                        Pues el día demuestra, Y la noche delata mi real {'\n'}
                        Intención.{'\n'}
                        {'\n'}
                        2	Sé que aunque yo intente;{'\n'}                                        
                        La fuerza existente no pasa de aquí,{'\n'}                         
                        Y el más diligente, por más que se esfuerce {'\n'}         
                        No va  a conseguir.{'\n'}
                        {'\n'}
                        <Text style={{fontWeight: 'bold'}}>
                        No temeré, no temeré,
                        {'\n'}
                        Porque mi fuerza está en el Señor,
                        {'\n'}
                        No temeré, no temeré
                        {'\n'}
                        Pues no hay temor cuando existe el amor.
                        </Text>
                        {'\n'}
                        {'\n'}
                        3	En los días actuales  {'\n'}                              
                        Hay tantas señales, no puedo negar  {'\n'}        
                        Pues el tiempo se acaba  {'\n'}                      
                        Tan solo nos queda, a Cristo buscar.{'\n'}
                        {'\n'}
                        4	A los monstruos gigantes{'\n'}                     
                        De aquí en adelante podemos vencer.{'\n'}           
                        Y la tierra sagrada{'\n'}                                        
                        Que Dios nos ha dado,  así poseer.{'\n'}
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