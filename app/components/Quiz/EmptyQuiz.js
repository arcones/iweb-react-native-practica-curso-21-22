import travolta from './img/travolta.gif'
import { View, Text, Image } from 'react-native'

const EmptyQuiz = () => {
    // const contextValue = useContext(LangContext);

    return (
        <View className="container">
            <View className="contained-text">
                <Text>Upps... no hay preguntas disponibles</Text>
                {/* <Image source={travolta} alt="Travolta" width="600" height="600" /> */}
            </View>
        </View>
    )
}

export default EmptyQuiz
