import Play from './Play';
import NoQuizzes from './NoQuizzes';
import { useState, useEffect } from "react";

const Quiz = ({ setScore, currentQuiz, setCurrentQuiz, setFinished }) => {

    const URL = 'https://core.dit.upm.es/api/quizzes/random10wa?token=2bca751d84825b1e6c2a'
    const [quizzes, setQuizzes] = useState([]);

    useEffect(() => {
        let mounted = true;
        if (mounted && quizzes.length === 0) {
            fetch(URL)
                .then(res => res.json())
                .then(json => { setQuizzes(json) })
        }
        return () => mounted = false;
    }, [quizzes]);

    return (
        <>
            {quizzes.length > 0 && (
                <Play
                    setScore={setScore}
                    currentQuiz={currentQuiz}
                    setCurrentQuiz={setCurrentQuiz}
                    quizzes={quizzes}
                    setFinished={setFinished}
                    setQuizzes={setQuizzes}
                />
            )}
            {quizzes.length <= 0 && (
                <NoQuizzes />
            )}
        </>
    )
}

export default Quiz
