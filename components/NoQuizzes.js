import travolta from './img/travolta.gif'
import { View, Text, Image } from 'react-native'

const NoQuizzes = () => {
    return (
        <View>
                <Text>Upps... no hay preguntas disponibles</Text>
                <Image source={travolta} alt="Travolta"/>
        </View>
    )
}

export default NoQuizzes