import { Text, View, TouchableHighlight } from 'react-native';

const Scores = ({ score, setFinished, setScore, setCurrentQuiz }) => {

    // const contextValue = useContext(LangContext);

    const reset = () => {
        setScore(0)
        setFinished(false)
        setCurrentQuiz(0)
    }

    return (
        <View className="container">
            <View className="contained-text">
                <Text>Has conseguido {score} puntos</Text>
                <Text>El porcentaje de respuestas acertadas es {((score / 10) * 100).toFixed(2)}%</Text>
            </View>
            <TouchableHighlight onPress={reset}>
                <Text 
                // style={styles.squareText}
                >
                    Reiniciar
                </Text>
            </TouchableHighlight>
        </View>
    )
}

export default Scores
