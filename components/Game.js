import Game from './Game';
import Scores from './Scores';
import { useState } from 'react';
import { Flex } from "@react-native-material/core";

const Game = () => {

    const [score, setScore] = useState(0);
    const [currentQuiz, setCurrentQuiz] = useState(0);
    const [finished, setFinished] = useState(false);

    return (
        <Flex fill>
            {!finished && (
                <Game
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
