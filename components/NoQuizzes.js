import travolta from './img/travolta.gif'
import { Text, Stack, Snackbar } from "@react-native-material/core";
import { Image } from 'react-native';

const NoQuizzes = () => {
    return (
        <Stack style={{ margin: 56 }} fill center spacing={4}>
            <Snackbar message="Intentando cargar más preguntas..." style={{ position: "absolute", start: 16, end: 16, bottom: 16 }}/>
            <Image style={{ width: 250, height: 250 }} source={travolta} alt="Travolta" />
        </Stack>
    )
}

export default NoQuizzes