import QuizGame from './QuizGame';
import QuizCreator from './QuizCreator';
import { useState } from 'react'
import { Flex, Stack, Button } from "@react-native-material/core";
import { TEAL, PINK } from '../Styles';
import { Ionicons } from '@expo/vector-icons';

const QuizModeSelector = () => {

    const [quizMode, setQuizMode] = useState('QuizCreator')

    //TODO to make able to come back to this screen without reseting the app

    return (
        <Flex fill>
            {quizMode === '' && (
                <Stack spacing={2} fill >
                    <Button title="Jugar al quiz" color={TEAL} tintColor="white" onPress={() => setQuizMode('QuizGame')} trailing={props => <Ionicons name="checkmark" {...props} />} />
                    <Button title="Crear preguntas de quiz" color={PINK} tintColor="white" onPress={() => setQuizMode('QuizCreator')} trailing={props => <Ionicons name="color-wand-outline" {...props} />} />
                </Stack>
            )}
            {quizMode === 'QuizGame' && (
                <QuizGame />
            )}

            {quizMode === 'QuizCreator' && (
                <QuizCreator />
            )}
        </Flex>
    )
}

export default QuizModeSelector
