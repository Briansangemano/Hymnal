import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View } from 'react-native';

export default class Error extends Component {
    render() {
      return (
            <View style={styles.container}> 
                <Text style={styles.text1}>
                    ERROR:  
                </Text>
                <Text style={styles.text}>
                    NO HAY HIMNO
                </Text>
            </View>
      );
  }
  
    }
  const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5F5F5'
    },
    text: {
        color: 'black', 
        fontSize: 30, 
    },
    text1: {
        color: 'red', 
        fontSize: 30,  
    },
});