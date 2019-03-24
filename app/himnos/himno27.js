import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Button, TextInput, TouchableOpacity, ImageBackground, ScrollView} from 'react-native';

export default class Himno27 extends Component {

    constructor(props) {
      super(props);
      this.state = { Text: "" };
    }
  
    render() {
      return (
            <View style={styles.container}> 
                <ScrollView>
                    <Text style={styles.text}>
                        1	La trinidad: misterio
                        {'\n'}
                        Dios es uno y es tres.
                        {'\n'}
                        Triuno Dios Admirable,
                        {'\n'}
                        Tú eres Admirable.
                        {'\n'}
                        {'\n'}
                        2	La trinidad: misterio{'\n'}
                        Dios es uno y es tres.{'\n'}
                        Triuno Dios Maravilloso,{'\n'}
                        Tú eres Maravilloso.{'\n'}
                        {'\n'}
                        <Text style={{fontWeight: 'bold'}}>
                        Hermanos: Nacido un hijo es,  
                        {'\n'}
                        Hermanas: El fuerte Dios es El,
                        {'\n'}
                        Hermanos: Hijo nos es dado, 
                        {'\n'}
                        Hermanas: Eterno Padre, El.
                        {'\n'}
                        Hermanos: El niño, El fuerte Dios,
                        {'\n'}
                        Hermanas: Su nombre Admirable, 
                        {'\n'}
                        Hermanos: Uno, Padre e Hijo.     
                        {'\n'} 
                        Hermanas: Persona Admirable.
                        </Text>
                        {'\n'}
                        {'\n'}
                        3	Misterio asombroso,{'\n'}
                        El Espíritu es El!{'\n'}
                        Cristo, el Espíritu Viviente,{'\n'}
                        ¡Ha entrado dentro de mí!{'\n'}
                        {'\n'}
                        4	¡Oh esto es glorioso,{'\n'}
                        El Espíritu es El!{'\n'}
                        Cristo, el Espíritu Viviente,{'\n'}
                        ¡En nuestro espíritu entro!{'\n'}
                        {'\n'}
                        <Text style={{fontWeight: 'bold'}}>
                        Hermanos: Hoy el Postrer Adán, {'\n'}
                        Hermanas: Espíritu Vivo es,{'\n'}
                        Hermanos: Señor Espíritu, {'\n'}
                        Hermanas: Todo inclusivo es El.{'\n'}
                        Hermanos: Hoy el Postrer Adán, {'\n'}
                        Hermanas: Espíritu Vivo es,{'\n'}
                        Hermanos: Señor Espíritu, {'\n'}
                        Hermanas: Vive en nosotros hoy.</Text>
                        {'\n'}
                        {'\n'}
                        5	El Padre es la fuente,{'\n'}
                        El Hijo me alcanzo,{'\n'}
                        Como el Espíritu que fluye,{'\n'}
                        El fluye a Dios en mí ser.{'\n'}
                        {'\n'}
                        6	El Padre es la fuente,{'\n'}
                        El Hijo es el caudal,{'\n'}
                        Como el Espíritu entra en mí,{'\n'}
                        ¡Este es un gran misterio!{'\n'}
                        {'\n'}
                        <Text style={{fontWeight: 'bold'}}>{'\n'}
                        Hermanos: El Triuno Dios en mí{'\n'}
                        Hermanas: Un gran misterio es,{'\n'}
                        Hermanos: Glorioso esto es, {'\n'}
                        Hermanas: En nosotros está.{'\n'}
                        Hermanos: El Triuno Dios en mí {'\n'}
                        Hermanas: Un gran misterio es,{'\n'}
                        Hermanos: Maravilloso es, {'\n'}
                        Hermanas: Que el viva en mi interior.</Text>{'\n'}

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