import Game from './components/quiz/Game';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Home from './components/home/Home';
import { createContext, useState } from 'react';

import es from './components/lang/es.json'
import en from './components/lang/en.json'

export const LangContext = createContext({ userLang: 'es', dictionary: es })

const Tab = createMaterialTopTabNavigator();

export default function App() {

  const [lang, setLang] = useState('es')

  return (
    <LangContext.Provider value={{ userLang: lang, dictionary: lang === 'es' ? es : en }}>
      <NavigationContainer>
        <Tab.Navigator style={{ marginTop: 20 }}>
          <Tab.Screen name="Home" component={Home} />
          <Tab.Screen name="Quiz" component={Game} />
        </Tab.Navigator>
      </NavigationContainer>
    </LangContext.Provider>
  );
}