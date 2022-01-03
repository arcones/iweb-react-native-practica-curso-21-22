import travolta from './img/travolta.gif'
import { View, Text, Image } from 'react-native'
import { styles } from './styles';

const NoQuizzes = () => {
    return (
        <View style={styles.container}>
                <Text style={styles.headline}>Upps... no hay preguntas disponibles</Text>
                <Image source={travolta} alt="Travolta"/>
        </View>
    )
}

export default NoQuizzes