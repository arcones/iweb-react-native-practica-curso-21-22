import Quiz from './Quiz';
import Scores from './Scores';
import { useState, useEffect } from 'react'
import { Flex, AppBar, Avatar, VStack } from "@react-native-material/core";
import Emoji from 'react-native-emoji';
import { TEAL, PALE_PINK, styles } from '../css/Styles';
import { getNextEmojiIfLastWasPresentOrFallback } from './util/EmojiManagement';

const Game = () => {

    const [score, setScore] = useState(0);
    const [currentQuiz, setCurrentQuiz] = useState(0);
    const [finished, setFinished] = useState(false);
    const [appBarEmoji, setAppBarEmoji] = useState("coffee");

    const getAppBarTitle = () => {
        return finished ? "Trivial - Resultados" : `Trivial - Pregunta ${currentQuiz + 1}`
    }

    useEffect(() => {
        getNextEmojiIfLastWasPresentOrFallback()
            .then(emojiFinished => setAppBarEmoji(emojiFinished))

    }, [currentQuiz, finished]);

    return (
        <Flex fill>
            <AppBar color={TEAL} tintColor="white"
                title={getAppBarTitle()}
                trailing={props =>
                    <VStack style={styles.quizAvatarContainer}>
                        <Avatar style={styles.quizAvatar} size={35} icon={props => <Emoji name={appBarEmoji} style={styles.emoji} />} color={PALE_PINK} />
                    </VStack>}
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
