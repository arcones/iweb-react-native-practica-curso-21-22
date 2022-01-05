import Quiz from './Quiz';
import Scores from './Scores';
import { useState } from 'react';
import { Flex, AppBar } from "@react-native-material/core";

const Game = () => {

    const [score, setScore] = useState(0);
    const [currentQuiz, setCurrentQuiz] = useState(0);
    const [finished, setFinished] = useState(false);

    const getAppBarTitle = () => {
        let title
        if (finished) {
            var finishedEmojis = Array("🍾","🚧","🏔️","🌠","🛣️","🎉","🧮","🃏","📣");
            var chosenEmoji = finishedEmojis[Math.floor(Math.random() * finishedEmojis.length)]
            title = `Trivial - Resultados` + ` ${chosenEmoji}`
        } else {
            var finishedEmojis = Array("🎮","🎳","🎯","🎲","🧠","🧵","🎱","🌂","🦞","💐","🌈","☃️","🥘","🍧","🥨","🥋","⚽");
            var chosenEmoji = finishedEmojis[Math.floor(Math.random() * finishedEmojis.length)]
            title = `Trivial - Pregunta ${currentQuiz + 1}` + ` ${chosenEmoji}`
        }
        return title
    }

    return (
        <Flex fill>
            <AppBar title={getAppBarTitle()} />
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
