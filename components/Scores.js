import { Text, View, TouchableHighlight, Image } from 'react-native';
import { styles } from './styles';
import less_than_three from './img/less_than_three.png'
import less_than_five from './img/less_than_five.png'
import less_than_seven from './img/less_than_seven.png'
import less_than_ten from './img/less_than_ten.png'
import just_ten from './img/just_ten.png'

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
        <View style={styles.container}>
            <Text style={styles.headline}>Has conseguido {score} puntos</Text>
            <Text style={styles.headline}>El porcentaje de respuestas acertadas es {((score / 10) * 100).toFixed(2)}%</Text>
            <Image style={styles.image} source={getIcon(score)}></Image>
            <TouchableHighlight style={styles.touchable} onPress={reset}>
                <Text style={styles.touchableText}>Reiniciar</Text>
            </TouchableHighlight>
        </View>
    )
}

export default Scores
