import {  Banner } from "@react-native-material/core";
import {PacmanIndicator } from 'react-native-indicators'

const NoQuizzes = () => {
    return (

        <>
            <Banner text="Intentando cargar más preguntas..." />
            <PacmanIndicator color="#6200ee" size={160} />
        </>
    )
}

export default NoQuizzes