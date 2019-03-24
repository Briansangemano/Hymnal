import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Button, TextInput, TouchableOpacity, ImageBackground, ScrollView} from 'react-native';

export default class Himno3 extends Component {

    constructor(props) {
      super(props);
      this.state = { Text: "" };
    }
  
    render() {
      return (
            <View style={styles.container}> 
                <ScrollView>
                    <Text style={styles.text}>
                        1	Yo te amo cada día más,
                        {'\n'}
                        Y este día aún te amo más
                        {'\n'}
                        Ya no puedo más vivir sin Ti,
                        {'\n'}
                        Nunca de hecho yo lo conseguí.
                        {'\n'}
                        {'\n'}
                        2	Cuántos años que vagué sin Ti,
                        Más Señor me rescataste aquí,
                        Cuán vacío y solo caminé,
                        Angustiado tristemente lloré.
                        {'\n'}
                        {'\n'}
                        <Text style={{fontWeight: 'bold'}}>
                        Día tras día, te amo más,
                        {'\n'}
                        Y hoy te amo Señor, aún mucho más.
                        </Text>
                        {'\n'}
                        {'\n'}
                        3	¡Oh! Qué sed en mi interior probé,{'\n'}
                        En vano satisfacción busqué,{'\n'}
                        Nada que intenté probar duró,{'\n'}
                        Insatisfacción solo me quedó.{'\n'}
                        {'\n'}
                        4	Infinita búsqueda interior,{'\n'}
                        Por Ti siempre había un clamor,{'\n'}
                        Ciego y errante yo busqué,{'\n'}
                        Una viva fuente encontré.{'\n'}
                        {'\n'}
                        <Text style={{fontWeight: 'bold'}}>
                        Día tras día, te amo más,{'\n'}
                        Y hoy te amo Señor, aún mucho más.{'\n'}
                        </Text>
                        {'\n'}
                        5	Oh Señor viniste a mí en amor,{'\n'}
                        Con dulcísima satisfacción,{'\n'}
                        Como Espíritu eres todo en mí{'\n'}
                        Ahora bulles en mi espíritu así.{'\n'}
                        {'\n'}
                        6	Gracias pues habitas hoy en mí, {'\n'}
                        Y te expandes día a día así,{'\n'}
                        En mi corazón morada haz,{'\n'}
                        Cuál tesoro abunda más y más.{'\n'}
                        {'\n'}
                        <Text style={{fontWeight: 'bold'}}>
                        Día tras día, te amo más,{'\n'}
                        Y hoy te amo Señor, aún mucho más.{'\n'}
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