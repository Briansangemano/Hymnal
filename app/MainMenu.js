import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Button, TextInput, TouchableOpacity, ImageBackground} from 'react-native';


export default class MainMenu extends Component {


  render() {
    const {navigation} = this.props;
    return (
      <ImageBackground source={{uri: 'https://images.unsplash.com/photo-1507838153414-b4b713384a76?ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80'}} style={{width: '100%', height: '100%'}}> 
        <View style={styles.container}>
            <View style={styles.containerButton}>
              <TouchableOpacity style={styles.boton} onPress={() => this.props.navigation.navigate('Home')}>
                  <Text style={styles.textBoton}>Buscar Himnos</Text>
              </TouchableOpacity> 
              <TouchableOpacity style={styles.boton} onPress={() => this.props.navigation.navigate('FirsLine')}>
                  <Text style={styles.textBoton}>Primeras Lineas</Text>
              </TouchableOpacity> 
            </View>
        </View>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    containerButton: {
        margin: 20,
        flexDirection: 'column',
        flexWrap: 'wrap',
        justifyContent: 'center',
        alignItems: 'center'
      },
      boton: {
        backgroundColor: '#FFFFFF95',
        width: 300,
        height: 90,
        alignItems: 'center',
        flexDirection: 'row',
        borderRadius: 20,
        margin: 40,
      },
      textBoton: {
        textAlign: 'center',
        flex: 1,
        fontSize: 35,
        color: 'black'
      },
});