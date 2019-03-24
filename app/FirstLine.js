import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Button, TextInput, TouchableOpacity, ImageBackground, ScrollView} from 'react-native';


export default class MainMenu extends Component {


  render() {
    const {navigation} = this.props;
    return (
      <ImageBackground source={{uri: 'https://images.unsplash.com/photo-1509624776920-0fac24a9dfda?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80'}} style={{width: '100%', height: '100%'}}> 
        <ScrollView>
            <View style={styles.container}>
                <View style={styles.containerButton}>
                    <TouchableOpacity style={styles.boton} onPress={() => this.props.navigation.navigate('Himno1')}>
                        <Text style={styles.text}>-ALGUNAS VECES</Text>
                    </TouchableOpacity> 
                    <TouchableOpacity style={styles.boton} onPress={() => this.props.navigation.navigate('Himno2')}>
                        <Text style={styles.text}>-NADA ES MÁS PRECIOSO</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.boton} onPress={() => this.props.navigation.navigate('Himno3')}>
                        <Text style={styles.text}>-YO TE AMO CADA DIA MAS</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.boton} onPress={() => this.props.navigation.navigate('Himno4')}>
                        <Text style={styles.text}>-EN PECADO ESTABA INMERSO</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.boton} onPress={() => this.props.navigation.navigate('Himno5')}>
                        <Text style={styles.text}>-TU ERES EL PRIMER AMOR</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.boton} onPress={() => this.props.navigation.navigate('Himno6')}>
                        <Text style={styles.text}>-VIDA SANTA</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.boton} onPress={() => this.props.navigation.navigate('Himno7')}>
                        <Text style={styles.text}>-CONGREGADOS EN TU NOMBRE</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.boton} onPress={() => this.props.navigation.navigate('Himno8')}>
                        <Text style={styles.text}>-HAY MOMENTOS</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.boton} onPress={() => this.props.navigation.navigate('Himno9')}>
                        <Text style={styles.text}>-LA BIBLIA</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.boton} onPress={() => this.props.navigation.navigate('Himno10')}>
                        <Text style={styles.text}>-MUERTOS EN PECADO</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.boton} onPress={() => this.props.navigation.navigate('Himno11')}>
                        <Text style={styles.text}>-YO SOY EL PAN VIVO (Jn.6:51)</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.boton} onPress={() => this.props.navigation.navigate('Himno12')}>
                        <Text style={styles.text}>-VAMOS CONFIADAMENTE</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.boton} onPress={() => this.props.navigation.navigate('Himno13')}>
                        <Text style={styles.text}>-TENEMOS UN PADRE</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.boton} onPress={() => this.props.navigation.navigate('Himno14')}>
                        <Text style={styles.text}>-PERSIGUE, DISFRUTA</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.boton} onPress={() => this.props.navigation.navigate('Himno15')}>
                        <Text style={styles.text}>-EL SEÑOR LLAMA HOY</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.boton} onPress={() => this.props.navigation.navigate('Himno16')}>
                        <Text style={styles.text}>-VIVO PARA AMARTE MI JESÚS</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.boton} onPress={() => this.props.navigation.navigate('Himno17')}>
                        <Text style={styles.text}>-OH QUÉ ALEGRÍA!</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.boton} onPress={() => this.props.navigation.navigate('Himno18')}>
                        <Text style={styles.text}>-SÓLO QUIERO ESTAR EN MI JESÚS</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.boton} onPress={() => this.props.navigation.navigate('Himno19')}>
                        <Text style={styles.text}>-OH, MI AMADO</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.boton} onPress={() => this.props.navigation.navigate('Himno20')}>
                        <Text style={styles.text}>-ATADO FUI A LA VID</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.boton} onPress={() => this.props.navigation.navigate('Himno21')}>
                        <Text style={styles.text}>-NO TEMERÉ</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.boton} onPress={() => this.props.navigation.navigate('Himno22')}>
                        <Text style={styles.text}>-¿COMO NO TE HE DE AMAR?</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.boton} onPress={() => this.props.navigation.navigate('Himno23')}>
                        <Text style={styles.text}>-EN LA VIDA DE LA IGLESIA</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.boton} onPress={() => this.props.navigation.navigate('Himno24')}>
                        <Text style={styles.text}>-NOÉ LLEVO UNA VIDA</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.boton} onPress={() => this.props.navigation.navigate('Himno25')}>
                        <Text style={styles.text}>-LA FE MARAVILLOSA</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.boton} onPress={() => this.props.navigation.navigate('Himno26')}>
                        <Text style={styles.text}>-SABES QUE FUISTE ESCOGIDO</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.boton} onPress={() => this.props.navigation.navigate('Himno27')}>
                        <Text style={styles.text}>-LA TRINIDAD: MISTERIO</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.boton} onPress={() => this.props.navigation.navigate('Himno28')}>
                        <Text style={styles.text}>-NUNCA PENSÉ </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.boton} onPress={() => this.props.navigation.navigate('Himno29')}>
                        <Text style={styles.text}>-AMOR DE DIOS, GRACIA DE CRISTO</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.boton} onPress={() => this.props.navigation.navigate('Himno30')}>
                        <Text style={styles.text}>-CRISTO VIDA VINO A SER</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </ScrollView>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'flex-start',
    },
    containerButton: {
        //flexDirection: 'row',
        flexWrap: 'wrap',
    },
    boton: {
        alignItems: 'center',
        flexDirection: 'row',
        marginTop: 10,
        marginLeft: 20,
    },
    text: {
        fontSize: 20,
        color: 'black'
    },
});