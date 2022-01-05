import Game from './components/quiz/Game';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Home from './components/home/Home';

const Tab = createMaterialTopTabNavigator();

function RenderQuiz() {
  return (
    <Game />
  );
}

function RenderHome() {
  return (
    <Home />
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator style={{marginTop: 20}}>
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Quiz" component={RenderQuiz} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}