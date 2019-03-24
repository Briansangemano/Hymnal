
import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Button, TextInput, TouchableOpacity, ImageBackground} from 'react-native';


export default class Home extends Component {

  constructor(props) {
    super(props);
    this.state = { Text: "" };
  }


  onPressButton1 = () => {this.setState({Text:this.state.Text+"1"})}
  onPressButton2 = () => {this.setState({Text:this.state.Text+"2"})}
  onPressButton3 = () => {this.setState({Text:this.state.Text+"3"})}
  onPressButton4 = () => {this.setState({Text:this.state.Text+"4"})}
  onPressButton5 = () => {this.setState({Text:this.state.Text+"5"})}
  onPressButton6 = () => {this.setState({Text:this.state.Text+"6"})}
  onPressButton7 = () => {this.setState({Text:this.state.Text+"7"})}
  onPressButton8 = () => {this.setState({Text:this.state.Text+"8"})}
  onPressButton9 = () => {this.setState({Text:this.state.Text+"9"})}
  onPressButton0 = () => {this.setState({Text:this.state.Text+"0"})}
  clear = () => {this.setState({Text:""})}

  
  handleSearch = () => {
    switch(this.state.Text) {
      case ("1"):
        return this.props.navigation.navigate('Himno1')
      case ("2"):
        return this.props.navigation.navigate('Himno2')
      case ("3"):
        return this.props.navigation.navigate('Himno3')
      case ("4"):
        return this.props.navigation.navigate('Himno4')
      case ("5"):
        return this.props.navigation.navigate('Himno5')
      case ("6"):
        return this.props.navigation.navigate('Himno6')
      case ("7"):
        return this.props.navigation.navigate('Himno7')
      case ("8"):
        return this.props.navigation.navigate('Himno8')
      case ("9"):
        return this.props.navigation.navigate('Himno9')
      case ("10"):
        return this.props.navigation.navigate('Himno10')
      case ("11"):
        return this.props.navigation.navigate('Himno11')
      case ("12"):
        return this.props.navigation.navigate('Himno12')
      case ("13"):
        return this.props.navigation.navigate('Himno13')
      case ("14"):
        return this.props.navigation.navigate('Himno14')
      case ("15"):
        return this.props.navigation.navigate('Himno15')
      case ("16"):
        return this.props.navigation.navigate('Himno16')
      case ("17"):
        return this.props.navigation.navigate('Himno17')
      case ("18"):
        return this.props.navigation.navigate('Himno18')
      case ("19"):
        return this.props.navigation.navigate('Himno19')
      case ("20"):
        return this.props.navigation.navigate('Himno20')
      case ("21"):
        return this.props.navigation.navigate('Himno21')
      case ("22"):
        return this.props.navigation.navigate('Himno22')
      case ("23"):
        return this.props.navigation.navigate('Himno23')
      case ("24"):
        return this.props.navigation.navigate('Himno24')
      case ("25"):
        return this.props.navigation.navigate('Himno25')
      case ("26"):
        return this.props.navigation.navigate('Himno26')
      case ("27"):
        return this.props.navigation.navigate('Himno27')
      case ("28"):
        return this.props.navigation.navigate('Himno28')
      case ("29"):
        return this.props.navigation.navigate('Himno29')
      case ("30"):
        return this.props.navigation.navigate('Himno30')
      default:
        return this.props.navigation.navigate('Error')
    }
  }


  dobleFun = () => {
    this.handleSearch();
    this.clear();
  }


  render() {
    const {navigation} = this.props;
    return (
      <ImageBackground source={{uri: 'https://images.unsplash.com/photo-1457637809455-3a18d58f16c3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1489&q=80'}} style={{width: '100%', height: '100%'}}> 
        <View style={styles.container}>
            <View style={styles.containerButton}>
              <TouchableOpacity style={styles.botonClear} onPress={this.clear}>
                  <Text style={styles.textBotonClear}>X</Text>
              </TouchableOpacity> 
              <TouchableOpacity style={styles.botonResult}>
                  <Text style={styles.textBotonResult}>{this.state.Text}</Text>
              </TouchableOpacity>  
              <TouchableOpacity style={styles.boton} onPress={this.onPressButton1}>
                <Text style={styles.textBoton}>1</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.boton} onPress={this.onPressButton2}>
                <Text style={styles.textBoton}>2</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.boton} onPress={this.onPressButton3}>
                <Text style={styles.textBoton}>3</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.boton} onPress={this.onPressButton4}>
                <Text style={styles.textBoton}>4</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.boton} onPress={this.onPressButton5}>
                <Text style={styles.textBoton}>5</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.boton} onPress={this.onPressButton6}>
                <Text style={styles.textBoton}>6</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.boton} onPress={this.onPressButton7}>
                <Text style={styles.textBoton}>7</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.boton} onPress={this.onPressButton8}>
                <Text style={styles.textBoton}>8</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.boton} onPress={this.onPressButton9}>
                <Text style={styles.textBoton}>9</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.boton} onPress={this.onPressButton0}>
                <Text style={styles.textBoton}>0</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.botonShearch} onPress={this.dobleFun}>
                <Text style={styles.textBotonShearch}>Buscar</Text>
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
    flexDirection: "row",
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center'
  },
  boton: {
    backgroundColor: '#FFFFFF',
    width: 90,
    height: 90,
    alignItems: 'center',
    flexDirection: 'row',
    borderRadius: 20,
    margin: 10,
  },
  textBoton: {
    textAlign: 'center',
    flex: 1,
    fontSize: 40,
    color: 'black'
  },
  botonShearch: {
    backgroundColor: 'gray',
    width: 200,
    height: 90,
    borderRadius: 20,
    alignItems: 'center',
    flexDirection: 'row',
    margin: 10
  },
  textBotonShearch: {
    textAlign: 'center',
    flex: 1,
    fontSize: 40,
    justifyContent: 'center',
    color: 'white'
  },
  botonResult: {
    backgroundColor: '#FFFFFF70',
    width: 200,
    height: 90,
    alignItems: 'center',
    flexDirection: 'row',
    borderRadius: 20,
    margin: 10,
  },
  textBotonResult: {
    textAlign: 'center',
    flex: 1,
    fontSize: 40,
    color: 'black'
  },
  botonClear: {
    justifyContent: 'center',
    backgroundColor: 'gray',
    width: 90,
    height: 90,
    alignItems: 'center',
    flexDirection: 'row',
    borderRadius: 20,
    margin: 10,
  },
  textBotonClear: {
    textAlign: 'center',
    justifyContent: 'center',
    fontSize: 40,
    color: 'white'
  },
});
