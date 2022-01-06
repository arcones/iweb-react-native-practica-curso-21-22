import Quiz from './Quiz';
import Scores from './Scores';
import { useState, useEffect } from 'react'
import { Flex, AppBar, HStack, Avatar, VStack } from "@react-native-material/core";

//TODO el switch aun no rula
import es_flag from './img/spain.png'
import uk_flag from './img/united-kingdom.png'

import Emoji from 'react-native-emoji';
import { styles } from '../css/Styles';
import { getNextEmojiIfLastWasPresentOrFallback, UNFINISHED_EMOJIS, APPBAR_EMOJI_KEY_UNFINISHED, FINISHED_EMOJIS, APPBAR_EMOJI_KEY_FINISHED } from './util/EmojiManagement';

const Game = () => {

    const [score, setScore] = useState(0);
    const [currentQuiz, setCurrentQuiz] = useState(0);
    const [lastCurrentQuiz, setLastCurrentQuiz] = useState(-1);
    const [finished, setFinished] = useState(false);
    const [appBarEmoji, setAppBarEmoji] = useState("coffee");

    const getAppBarTitle = () => {
        return finished ? "Trivial - Resultados" : `Trivial - Pregunta ${currentQuiz + 1}`
    }

    useEffect(() => {
        if (lastCurrentQuiz !== currentQuiz) {
            if (finished) {
                getNextEmojiIfLastWasPresentOrFallback(APPBAR_EMOJI_KEY_FINISHED, FINISHED_EMOJIS)
                    .then(emojiFinished => setAppBarEmoji(emojiFinished))

            } else {
                getNextEmojiIfLastWasPresentOrFallback(APPBAR_EMOJI_KEY_UNFINISHED, UNFINISHED_EMOJIS)
                    .then(emojiUnfinished => setAppBarEmoji(emojiUnfinished))
            }
        }
        return () => {
            setLastCurrentQuiz(currentQuiz)
        }
    }, [finished, currentQuiz, lastCurrentQuiz]);

    return (
        <Flex fill>
            <AppBar color="#512DA8" tintColor="white"
                title={getAppBarTitle()}
                trailing={props => 
                <VStack style={{ flex: 1, alignContent: 'center', justifyContent: 'center', marginRight: 15 }}>
                    <Avatar style={{paddingRight: 65}} size={48} icon={props => <Emoji name={appBarEmoji} style={styles.emoji} />} color="#F8BBD0"/>
                
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
