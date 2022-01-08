import { useState, createContext } from 'react';
import es from './lang/es.json';
import en from './lang/en.json';
import Landing from './components/Landing';
import { LogBox } from 'react-native';

export const LangContext = createContext({ userLang: 'es', dictionary: es })

export default function App() {

  LogBox.ignoreLogs(['Require cycle']);
  const [lang, setLang] = useState('es')

  return (
    <LangContext.Provider value={{ userLang: lang, dictionary: lang === 'es' ? es : en }}>
      <Landing lang={lang} setLang={setLang} />
    </LangContext.Provider>
  );
}