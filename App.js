import {createStackNavigator, createAppContainer, Header} from 'react-navigation';

import MainMenu from './app/MainMenu'
import Home from './app/Home'
import FirsLine from './app/FirstLine'
import Error from './app/error'
import Himno1 from './app/himnos/himno1'
import Himno2 from './app/himnos/himno2'
import Himno3 from './app/himnos/himno3'
import Himno4 from './app/himnos/himno4'
import Himno5 from './app/himnos/himno5'
import Himno6 from './app/himnos/himno6'
import Himno7 from './app/himnos/himno7'
import Himno8 from './app/himnos/himno8'
import Himno9 from './app/himnos/himno9'
import Himno10 from './app/himnos/himno10'
import Himno11 from './app/himnos/himno11'
import Himno12 from './app/himnos/himno12'
import Himno13 from './app/himnos/himno13'
import Himno14 from './app/himnos/himno14'
import Himno15 from './app/himnos/himno15'
import Himno16 from './app/himnos/himno16'
import Himno17 from './app/himnos/himno17'
import Himno18 from './app/himnos/himno18'
import Himno19 from './app/himnos/himno19'
import Himno20 from './app/himnos/himno20'

const MainNavigator = createStackNavigator({
  //Home: { screen: Home, navigationOptions: {header: null},},
  MainMenu: {screen: MainMenu, navigationOptions: {header: null},},
  Home: { screen: Home, navigationOptions: {header: null},},
  FirsLine: { screen: FirsLine, navigationOptions: () => ({title: 'PRIMERAS LINEAS'}), },
  Himno1: { screen: Himno1, navigationOptions: () => ({title: 'ALGUNAS VECES', headerStyle: { backgroundColor: '#D3D3D3'}}), },
  Himno2: { screen: Himno2, navigationOptions: () => ({title: 'NADA ES MÁS PRECIOSO', headerStyle: { backgroundColor: '#D3D3D3'}}), },
  Himno3: { screen: Himno3, navigationOptions: () => ({title: 'YO TE AMO CADA DIA MAS', headerStyle: { backgroundColor: '#D3D3D3'}}), },
  Himno4: { screen: Himno4, navigationOptions: () => ({title: 'ILIMITADO AMOR', headerStyle: { backgroundColor: '#D3D3D3'}}), },
  Himno5: { screen: Himno5, navigationOptions: () => ({title: 'TU ERES EL PRIMER AMOR', headerStyle: { backgroundColor: '#D3D3D3'}}), },
  Himno6: { screen: Himno6, navigationOptions: () => ({title: 'VIDA SANTA', headerStyle: { backgroundColor: '#D3D3D3'}}), },
  Himno7: { screen: Himno7, navigationOptions: () => ({title: 'CONGREGADOS EN TU NOMBRE', headerStyle: { backgroundColor: '#D3D3D3'}}), },
  Himno8: { screen: Himno8, navigationOptions: () => ({title: 'HAY MOMENTOS', headerStyle: { backgroundColor: '#D3D3D3'}}), },
  Himno9: { screen: Himno9, navigationOptions: () => ({title: 'LA BIBLIA', headerStyle: { backgroundColor: '#D3D3D3'}}), },
  Himno10: { screen: Himno10, navigationOptions: () => ({title: 'MUERTOS EN PECADO', headerStyle: { backgroundColor: '#D3D3D3'}}), },
  Himno11: { screen: Himno11, navigationOptions: () => ({title: 'YO SOY EL PAN VIVO (Jn.6:51)', headerStyle: { backgroundColor: '#D3D3D3'}}), },
  Himno12: { screen: Himno12, navigationOptions: () => ({title: 'VAMOS CONFIADAMENTE ', headerStyle: { backgroundColor: '#D3D3D3'}}), },
  Himno13: { screen: Himno13, navigationOptions: () => ({title: 'TENEMOS UN PADRE', headerStyle: { backgroundColor: '#D3D3D3'}}), },
  Himno14: { screen: Himno14, navigationOptions: () => ({title: 'PERSIGUE, DISFRUTA', headerStyle: { backgroundColor: '#D3D3D3'}}), },
  Himno15: { screen: Himno15, navigationOptions: () => ({title: 'EL SEÑOR LLAMA HOY', headerStyle: { backgroundColor: '#D3D3D3'}}), },
  Himno16: { screen: Himno16, navigationOptions: () => ({title: 'VIVO PARA AMARTE MI JESÚS', headerStyle: { backgroundColor: '#D3D3D3'}}), },
  Himno17: { screen: Himno17, navigationOptions: () => ({title: 'LIBERAR EL ESPÍRITU', headerStyle: { backgroundColor: '#D3D3D3'}}), },
  Himno18: { screen: Himno18, navigationOptions: () => ({title: 'ESTAR EN CRISTO', headerStyle: { backgroundColor: '#D3D3D3'}}), },
  Himno19: { screen: Himno19, navigationOptions: () => ({title: 'OH, MI AMADO', headerStyle: { backgroundColor: '#D3D3D3'}}), },
  Himno20: { screen: Himno20, navigationOptions: () => ({title: 'ATADO A LA VID', headerStyle: { backgroundColor: '#D3D3D3'}}), },
  Error: { screen: Error, navigationOptions: {headerStyle: { backgroundColor: '#D3D3D3'}} }
});


const App = createAppContainer(MainNavigator);

export default App;