import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Button, TextInput, TouchableOpacity, ImageBackground, ScrollView} from 'react-native';

export default class Himno4 extends Component {

    constructor(props) {
      super(props);
      this.state = { Text: "" };
    }
  
    render() {
      return (
            <View style={styles.container}> 
                <ScrollView>
                    <Text style={styles.text}>
                        1	En pecado estaba inmerso con todo mi ser,
                        {'\n'}
                        Sin ningún camino para andar.
                        {'\n'}
                        Viendo Dios mi pobre y penosa condición,
                        {'\n'}
                        ¡Por amor Su Hijo envió!
                        {'\n'}
                        {'\n'}
                        <Text style={{fontWeight: 'bold'}}>
                        Recibí misericordia y grande salvación.
                        {'\n'}
                        ¡Oh, qué amor disfruto yo!
                        {'\n'}
                        Donde abundó el pecado,
                        {'\n'}
                        Sobreabundó la gracia.
                        {'\n'}
                        ¡Oh ilimitado amor!
                        {'\n'}
                        Cristo es mío hoy.
                        </Text>
                        {'\n'}
                        {'\n'}
                        2	La Ley demostró al hombre{'\n'}
                        Su real condición,{'\n'}
                        Vano es trabajar para el Señor.{'\n'}
                        Pero, en Su propósito, Dios quiere trabajar{'\n'}
                        En el hombre creado para Sí.{'\n'}
                        {'\n'}
                        <Text style={{fontWeight: 'bold'}}>
                        Cuando veo la cruz, reposo,{'\n'}
                        Cristo resurgió.{'\n'}
                        Él ya pagó, todo por mí.{'\n'}
                        Hoy yo tengo libre acceso{'\n'}
                        A Su persona viviente,{'\n'}
                        Al lugar Santísimo{'\n'}
                        Me puedo acercar.{'\n'}
                        </Text>
                        {'\n'}
                        3	Dios, al aceptar el sacrificio de Jesús,{'\n'}
                        Toda exigencia Él cumplió;{'\n'}
                        Como prueba de esto, al Señor resucitó.{'\n'}
                        Y con Él ahora vivo yo.{'\n'}
                        {'\n'}
                        <Text style={{fontWeight: 'bold'}}>
                        Por Su Espíritu me trajo luz y salvación,{'\n'}
                        ¡Oh comunión tan divinal!{'\n'}
                        Basta abrir mi ser a Él, e{'\n'}
                        Invocar Su dulce nombre{'\n'}
                        ¡Oh Señor Jesús! Amén{'\n'}
                        ¡Por siempre salvo soy!{'\n'}
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