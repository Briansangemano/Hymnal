import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Button, TextInput, TouchableOpacity, ImageBackground, ScrollView} from 'react-native';

export default class Himno17 extends Component {

    constructor(props) {
      super(props);
      this.state = { Text: "" };
    }
  
    render() {
      return (
            <View style={styles.container}> 
                <ScrollView>
                    <Text style={styles.text}>
                        1	Oh qué alegría! Cuán rico Cristo es!
                        {'\n'}
                        Ahora en mí, El habitando está.
                        {'\n'}
                        Ríos de agua viva van a fluir de mí.
                        {'\n'}
                        Mi espíritu al liberar.
                        {'\n'}
                        {'\n'}
                        <Text style={{fontWeight: 'bold'}}>
                        ¡Liberar! ¡Liberar! 
                        {'\n'}
                        Mi espíritu, sí liberar.
                        {'\n'}
                        Ríos de agua viva van a fluir de mí.
                        {'\n'}
                        Mi espíritu al liberar.
                        </Text> 
                        {'\n'}
                        {'\n'}
                        2	Con mi cuerpo toco el mundo material,{'\n'}
                        Y mi mente uso al pensar,{'\n'}
                        Plenamente a Cristo yo puedo disfrutar, {'\n'}
                        Mi espíritu al liberar.{'\n'}
                        {'\n'}
                        <Text style={{fontWeight: 'bold'}}>
                        ¡Liberar! ¡Liberar! {'\n'}
                        Mi espíritu, sí liberar.{'\n'}
                        Plenamente a Cristo yo puedo disfrutar, {'\n'}
                        Mi espíritu al liberar.{'\n'}
                        </Text>
                        {'\n'}
                        3	Dejo tradiciones y todo lo formal,{'\n'}
                        En frescor de vida quiero estar:{'\n'}
                        Invocando ahora: ¡Oh, Señor Jesús!{'\n'}
                        Y mi espíritu sí liberar.{'\n'}
                        {'\n'}
                        <Text style={{fontWeight: 'bold'}}>
                        ¡Liberar! ¡Liberar! {'\n'}
                        Mi espíritu, sí liberar.{'\n'}
                        Plenamente a Cristo yo puedo disfrutar, {'\n'}
                        Mi espíritu al liberar.{'\n'}
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