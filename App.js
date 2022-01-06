import Game from './components/quiz/Game';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Home from './components/home/Home';
import Tictactoe from './components/tictactoe/Tictactoe';
import { styles } from './components/css/Styles';
import { SafeAreaView } from 'react-native';


const Tab = createMaterialTopTabNavigator();

export default function App() {

  return (
    <SafeAreaView style={styles.AndroidSafeArea}>
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen name="Home" component={Home} />
          <Tab.Screen name="Quiz" component={Game} />
          <Tab.Screen name="Tictactoe" component={Tictactoe} />
        </Tab.Navigator>
      </NavigationContainer>
    </SafeAreaView>




  );
}