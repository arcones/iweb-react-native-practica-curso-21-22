import Quiz from './Quiz';
import Scores from './Scores';
import { useState } from 'react'
import { Flex, AppBar } from "@react-native-material/core";

//TODO el switch aun no rula
import es_flag from './img/spain.png'
import uk_flag from './img/united-kingdom.png'
import SwitchWithIcons from "react-native-switch-with-icons";


const Game = () => {

    const [score, setScore] = useState(0);
    const [currentQuiz, setCurrentQuiz] = useState(0);
    const [finished, setFinished] = useState(false);

    const getAppBarTitle = () => {
        let title
        if (finished) {
            var finishedEmojis = Array("🍾", "🚧", "🏔️", "🌠", "🛣️", "🎉", "🧮", "🃏", "📣");
            var chosenEmoji = finishedEmojis[Math.floor(Math.random() * finishedEmojis.length)]
            title = `Trivial - Resultados` + `  ${chosenEmoji}`
        } else {
            var finishedEmojis = Array("🎮", "🎳", "🎯", "🎲", "🧠", "🧵", "🎱", "🌂", "🦞", "💐", "🌈", "☃️", "🥘", "🍧", "🥨", "🥋", "⚽");
            var chosenEmoji = finishedEmojis[Math.floor(Math.random() * finishedEmojis.length)]
            title = `Trivial - Pregunta ${currentQuiz + 1}` + `  ${chosenEmoji}`
        }
        return title
    }

    return (
        <Flex fill>
            <AppBar color="#512DA8" tintColor="white" title={getAppBarTitle()}
            // trailing={props =>
            //     <SwitchWithIcons onValueChange={value => console.log(`Value has been updated to ${value}`)}/>
            // }
            />
            {!finished && (
                <Quiz
                    score={score}
                    setScore={setScore}
                    currentQuiz={currentQuiz}
                    setCurrentQuiz={setCurrentQuiz}
                    setFinished={setFinished}
                />
            )}

            {finished && (
                <Scores
                    score={score}
                    setFinished={setFinished}
                    setScore={setScore}
                    setCurrentQuiz={setCurrentQuiz}
                />
            )}
        </Flex>
    )
}

export default Game
