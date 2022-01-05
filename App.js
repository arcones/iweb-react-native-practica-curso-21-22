import Game from './components/quiz/Game';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

function RenderGame() {
  return (
    <Game />
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Native Games" component={RenderGame} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}