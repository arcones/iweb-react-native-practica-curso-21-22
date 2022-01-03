import { useState } from "react";
import Play from './Play';
import NoQuizzes from './NoQuizzes';
import { useEffect } from "react";
import { View } from 'react-native'


const Game = ({ setScore, currentQuiz, setCurrentQuiz, setFinished }) => {

    const URL = 'https://core.dit.upm.es/api/quizzes/random10wa?token=2bca751d84825b1e6c2a'
    const [quizzes, setQuizzes] = useState([]);
    const [answers, setAnswers] = useState({})

    // TODO descomentar
    // useEffect(() => {
    //     if (quizzes.length === 0) {
    //         fetch(URL)
    //             .then(res => res.json())
    //             .then(json => { setQuizzes(json) })
    //     }
    // }, [quizzes]);

    return (
        <View style={styles.container}>
            {quizzes.length > 0 && (
                <Play
                    setScore={setScore}
                    currentQuiz={currentQuiz}
                    setCurrentQuiz={setCurrentQuiz}
                    quizzes={quizzes}
                    setFinished={setFinished}
                    setQuizzes={setQuizzes}
                    answers={answers}
                    setAnswers={setAnswers}
                />
            )}
            {quizzes.length <= 0 && (
                <NoQuizzes />
            )}
        </View>
    )
}

export default Game