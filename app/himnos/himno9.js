import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Button, TextInput, TouchableOpacity, ImageBackground, ScrollView} from 'react-native';

export default class Himno9 extends Component {

    constructor(props) {
      super(props);
      this.state = { Text: "" };
    }
  
    render() {
      return (
            <View style={styles.container}> 
                <ScrollView>
                    <Text style={styles.text}>
                        1	La Biblia, el hablar de Dios,
                        {'\n'}
                        Trae al hombre luz y salvación,
                        {'\n'}
                        La Palabra me transformará,
                        {'\n'}
                        Pues es vida y Espíritu.
                        {'\n'}
                        {'\n'}
                        <Text style={{fontWeight: 'bold'}}>
                        Leer-orar me hace crecer,
                        {'\n'}
                        Y al comer la Palabra obtendré,
                        {'\n'}
                        Fuerza y vigor, para aplastar
                        {'\n'}
                        Al enemigo y el mundo dejar.
                        </Text>
                        {'\n'}
                        {'\n'}
                        2	Comunión con Dios por siempre tendré,{'\n'}
                        Pues con oración la Palabra buscaré,{'\n'}
                        ¡Oh, Señor Jesús! Debo invocar,{'\n'}
                        Y con el Señor, guardado he de estar.{'\n'}
                        {'\n'}
                        3	Mi vida voy a consagrar,{'\n'}
                        Hoy mi juventud quiero aprovechar,{'\n'}
                        Dejo todo atrás y busco al Señor,{'\n'}
                        ¡Pues mi meta es ser un vencedor!{'\n'}
                        {'\n'}
                        <Text style={{fontWeight: 'bold'}}>
                        Quiero entregar todo mi ser,{'\n'}
                        Por Cristo y la iglesia seré.{'\n'}
                        Ejercitar y practicar,{'\n'}
                        Y en las reuniones podré funcionar.{'\n'}
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