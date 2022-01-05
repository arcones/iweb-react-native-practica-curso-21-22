import travolta from './img/travolta.gif'
import { Stack, Snackbar } from "@react-native-material/core";
import { Image } from 'react-native';
import { styles } from './css/QuizStyles'

const NoQuizzes = () => {
    return (
        <Stack style={styles.margins} fill center spacing={4}>
            <Snackbar message="Intentando cargar más preguntas..."/>
            <Image style={styles.bigImage} source={travolta} alt="Travolta" />
        </Stack>
    )
}

export default NoQuizzes