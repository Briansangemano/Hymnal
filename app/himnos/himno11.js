import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Button, TextInput, TouchableOpacity, ImageBackground, ScrollView} from 'react-native';

export default class Himno11 extends Component {

    constructor(props) {
      super(props);
      this.state = { Text: "" };
    }
  
    render() {
      return (
            <View style={styles.container}> 
                <ScrollView>
                    <Text style={styles.text}>
                        1-	Yo soy el pan vivo,
                        {'\n'}
                        Que descendió del cielo.
                        {'\n'}
                        Si alguno come, si alguno come de este pan
                        {'\n'}
                        Vivirá para siempre.
                        {'\n'}
                        {'\n'}
                        <Text style={{fontWeight: 'bold'}}>
                        Y el pan (y el pan) que daré (que da-)-re es 
                        {'\n'}
                        Mi carne.
                        {'\n'}
                        La cual yo (la cual yo) daré por (por la) 
                        {'\n'}
                        Vida del mundo.
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