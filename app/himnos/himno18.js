import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Button, TextInput, TouchableOpacity, ImageBackground, ScrollView} from 'react-native';

export default class Himno18 extends Component {

    constructor(props) {
      super(props);
      this.state = { Text: "" };
    }
  
    render() {
      return (
            <View style={styles.container}> 
                <ScrollView>
                    <Text style={styles.text}>
                        1	Sólo quiero estar en mi Jesús,
                        {'\n'}
                        Disfrutando paz y vida,
                        {'\n'}
                        Una experiencia personal,
                        {'\n'}
                        Muy clara y definida.
                        {'\n'}
                        {'\n'}
                        2	Solo quiero estar en mi Jesús,{'\n'}
                        Siendo un ramo en la vid,{'\n'}
                        Disfrutando todo lo que Él es,{'\n'}
                        Expresando rica savia{'\n'}
                        {'\n'}
                        <Text style={{fontWeight: 'bold'}}>
                        Solo quiero estar en mi Jesús,
                        {'\n'}
                        Y no salir por nada,
                        {'\n'}
                        Sólo quiero estar en mi Jesús,
                        {'\n'}
                        Y no salir, y no salir,
                        {'\n'}
                        Y no salir, por nada.
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