import QuizGame from './quiz/QuizGame';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Home from './home/Home';
import Tictactoe from './tictactoe/Tictactoe';
import { styles, TEAL, PINK, PALE_PINK } from './Styles';
import { SafeAreaView } from 'react-native';
import { useContext } from 'react';
import { Switch } from '@react-native-material/core';
import { LangContext } from '../App';

const Tab = createMaterialTopTabNavigator();

export default function Landing({ lang, setLang }) {

    const contextValue = useContext(LangContext);

    const changeLanguage = () => {
        lang === 'es' ? setLang('en') : setLang('es')
    }

    return (
        <SafeAreaView style={styles.AndroidSafeArea}>
            <NavigationContainer>
                <Switch trackColor={{ true: PALE_PINK, false: PALE_PINK }} thumbColor={lang === 'es' ? TEAL : PINK} onValueChange={changeLanguage} value={lang === 'es'} />
                <Tab.Navigator>
                    <Tab.Screen name={contextValue.dictionary.navbar_item1} component={Home} />
                    <Tab.Screen name={contextValue.dictionary.navbar_item2} component={Tictactoe} />
                    <Tab.Screen name={contextValue.dictionary.navbar_item3} component={QuizGame} />
                </Tab.Navigator>
            </NavigationContainer>
        </SafeAreaView>
    );
}