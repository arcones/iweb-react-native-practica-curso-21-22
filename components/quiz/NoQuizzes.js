import {  Banner } from "@react-native-material/core";
import {PacmanIndicator } from 'react-native-indicators'
import { TEAL } from "../Styles";

const NoQuizzes = () => {
    return (

        <>
            <Banner text="Intentando cargar más preguntas..." />
            <PacmanIndicator color={TEAL} size={160} />
        </>
    )
}

export default NoQuizzes