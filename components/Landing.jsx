import QuizModeSelector from './quiz/QuizModeSelector';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Home from './home/Home';
import Tictactoe from './tictactoe/Tictactoe';
import { styles } from './Styles';
import { SafeAreaView } from 'react-native';

const Tab = createMaterialTopTabNavigator();

export default function Landing() {

    return (
        <SafeAreaView style={styles.AndroidSafeArea}>
            <NavigationContainer>
                <Tab.Navigator>
                    <Tab.Screen name="Inicio" component={Home} />
                    <Tab.Screen name="Tres en raya" component={Tictactoe} />
                    <Tab.Screen name="Trivial" component={QuizModeSelector} />
                </Tab.Navigator>
            </NavigationContainer>
        </SafeAreaView>
    );
}