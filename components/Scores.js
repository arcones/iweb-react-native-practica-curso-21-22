import { Text, Stack, Button } from "@react-native-material/core";
import { Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import less_than_three from './img/less_than_three.png'
import less_than_five from './img/less_than_five.png'
import less_than_seven from './img/less_than_seven.png'
import less_than_ten from './img/less_than_ten.png'
import just_ten from './img/just_ten.png'
import { styles } from './css/QuizStyles'

const Scores = ({ score, setFinished, setScore, setCurrentQuiz }) => {

    const reset = () => {
        setScore(0)
        setFinished(false)
        setCurrentQuiz(0)
    }

    const getIcon = (score) => {
        if (score < 3) {
            return less_than_three
        } else if (score < 5) {
            return less_than_five
        } else if (score < 7) {
            return less_than_seven
        } else if (score < 10) {
            return less_than_ten
        } else {
            return just_ten
        }
    }

    return (
        <Stack style={styles.margins} fill center spacing={4}>
            <Text variant="h5">Has conseguido {score} puntos</Text>
            <Text variant="h5">El porcentaje de respuestas acertadas es {((score / 10) * 100).toFixed(2)}%</Text>
            <Image style={styles.bigImage} source={getIcon(score)}></Image>
            <Button title="Reiniciar" onPress={reset} trailing={props => <Ionicons name="color-wand-outline" {...props} />} />
        </Stack>
    )
}

export default Scores
