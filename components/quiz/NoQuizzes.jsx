import { HStack, Snackbar } from "@react-native-material/core";
import { PacmanIndicator } from 'react-native-indicators'
import { styles, TEAL } from "../Styles";
import { Platform } from 'react-native';
import QuizAppBar from "./QuizAppBar";

const NoQuizzes = () => {
    return (
        <>
            <QuizAppBar barTitle="Buscando más quizzes..."/>
            <HStack fill>
                <PacmanIndicator color={TEAL} size={Platform.OS === 'ios' ? 250 : 200} />
            </HStack>
            <Snackbar
                message="Intentando cargar más preguntas..."
                style={styles.quizNoQuizzesSnackBar}
            />
        </>
    )
}

export default NoQuizzes