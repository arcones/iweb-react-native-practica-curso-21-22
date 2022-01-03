//import './css/styles.css';
import { createContext, useState } from 'react';
//import es from './Lang/es.json'
//import en from './Lang/en.json'
//import Tictactoe from './Tictactoe/GameScreen';
import Quiz from './Quiz/Quiz';

// export const LangContext = createContext({ userLang: 'es', dictionary: es })


function Main() {

  // const [lang, setLang] = useState('es')

  return (
    // <LangContext.Provider value={{ userLang: lang, dictionary: lang === 'es' ? es : en }}>
      <Quiz />
    // </LangContext.Provider>
  );
}

/*
       <Routes>
          <Route path="/" element={<Home />} />
          <Route path="tictactoe" element={<Tictactoe />} />
          <Route path="quiz" element={<Quiz />} />
        </Routes>
*/

export default Main;
