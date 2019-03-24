import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Button, TextInput, TouchableOpacity, ImageBackground, ScrollView} from 'react-native';

export default class Himno26 extends Component {

    constructor(props) {
      super(props);
      this.state = { Text: "" };
    }
  
    render() {
      return (
            <View style={styles.container}> 
                <ScrollView>
                    <Text style={styles.text}>
                        1	¿Sabes que fuiste escogido
                        {'\n'}
                        Antes del mundo empezar,
                        {'\n'}
                        Que Dios te ha seleccionado
                        {'\n'}
                        Como parte de Su plan?
                        {'\n'}
                        Algo muy dentro de ti
                        {'\n'}
                        Te confirma que es así,
                        {'\n'}
                        Por eso es que estas aquí
                        {'\n'}
                        Y tienes ese sentir.
                        {'\n'}
                        <Text style={{fontWeight: 'bold'}}>{'\n'}
                        Todos los pecados que hiciste
                        {'\n'}
                        Y lo demás que has hecho tú,
                        {'\n'}
                        Por Dios ha sido olvidado,
                        {'\n'}
                        Por medio de Su Hijo Jesús.
                        {'\n'}
                        No hay que luchar para creerlo,
                        {'\n'}
                        La Palabra dice que es así.
                        {'\n'}
                        Solo tienes que dar gracias
                        {'\n'}
                        Por todo lo que hizo El por ti.</Text>
                        {'\n'}
                        {'\n'}
                        2	Sabes tú que en la palabra{'\n'}
                        Esta el deseo del Señor?{'\n'}
                        Todo lo que Cristo hizo{'\n'}
                        Es para Sus hijos hoy.{'\n'}
                        ¿Eres tu uno de esos hijos{'\n'}
                        Para andar en la verdad?{'\n'}
                        Ahora por fe has heredado{'\n'}
                        Todo lo que ha hecho ya.{'\n'}
                        {'\n'}
                        3	¿Sabes tú que Su familia{'\n'}
                        Somos todos? ¡Gloria a Dios!{'\n'}
                        Por eso es que nos gozamos,{'\n'}
                        Porque en nosotros está. {'\n'}
                        Él es Dios y nosotros pueblo,{'\n'}
                        Día a día le amamos más;{'\n'}
                        Muy contentos hoy estamos,{'\n'}
                        Le alabamos, ¡Gloria a Dios!{'\n'}
                        {'\n'}
                        4	Solo sé que Le amamos{'\n'}
                        Por lo que Él ha hecho aquí,{'\n'}
                        Nos trajo El mismo a la iglesia,{'\n'}
                        Uno somos, ¡Gloria a Dios!{'\n'}
                        Nos gozamos de estar incluidos{'\n'}
                        En la gloriosa herencia de hoy,{'\n'}
                        Por eso es que te invitamos{'\n'}
                        A la familia del Señor.{'\n'}
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