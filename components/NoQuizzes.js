import travolta from './img/travolta.gif'
import { Text, Stack } from "@react-native-material/core";
import { Image } from 'react-native';

const NoQuizzes = () => {
    return (
        <>
            <Stack style={{ margin: 56 }} fill center spacing={4}>
                <Text variant="h5">Upps... no hay preguntas disponibles</Text>
                <Image style={{ width: 250, height: 250 }} source={travolta} alt="Travolta" />
            </Stack>
        </>
    )
}

export default NoQuizzes