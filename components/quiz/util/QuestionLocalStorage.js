import AsyncStorage from '@react-native-async-storage/async-storage';
import { Alert } from "react-native";

const _KEY = '@P5_2021_IWEB:quiz'

const _noSavedQuestionnaireAlert = () =>
    Alert.alert(
        "No hay questionarios guardados",
        "Pulse en el botón de guardar cuando le guste un conjunto de preguntas para guardarlo",
        [
            { text: "OK", onPress: () => console.log("_noSavedQuestionnaireAlert OK Pressed") }
        ]
    );

const _restoredQuestionnaireAlert = () =>
    Alert.alert(
        "Éxito",
        "Se ha restaurado el cuestionario guardado",
        [
            { text: "OK", onPress: () => console.log("_restoredQuestionnaireAlert OK Pressed") }
        ]
    );

const _savedQuestionnaireAlert = () =>
    Alert.alert(
        "Éxito",
        "Se ha guardado el cuestionario actual",
        [
            { text: "OK", onPress: () => console.log("_savedQuestionnaireAlert OK Pressed") }
        ]
    );

const _removedQuestionnaireAlert = () =>
    Alert.alert(
        "Éxito",
        "Se ha eliminado el cuestionario guardado",
        [
            { text: "OK", onPress: () => console.log("_removedQuestionnaireAlert OK Pressed") }
        ]
    );

export const getSavedQuestionnaireOrAlert = async () => {
    let savedQuestionnaire = await _getSavedQuestionnaire(_KEY)
    if (savedQuestionnaire) {
        _restoredQuestionnaireAlert()
        console.log("Aqui he de implementar la restauración del questionario") //TODO restarurar los quizzes, el countDown, los puntos
    } else {
        _noSavedQuestionnaireAlert()
    }
}

export const saveQuestionnaire = async (quizzes) => {
    try {
        console.log(quizzes)
        const quizzesJson = JSON.stringify(quizzes)
        await AsyncStorage.setItem(_KEY, quizzesJson);
        _savedQuestionnaireAlert()
    } catch (error) {
        console.log(`There was a problem saving current questionnaire:\n ${error}`)
    }
}

export const removeQuestionnaire = async () => {
    try {
        await AsyncStorage.removeItem(_KEY)
        _removedQuestionnaireAlert()
    } catch (e) {
        console.log(`There was a problem removing saved questionnaire:\n ${error}`)
    }
}

const _getSavedQuestionnaire = async () => {
    try {
        const quizzesJson = await AsyncStorage.getItem(_KEY)
        return quizzesJson != null ? JSON.parse(quizzesJson) : null;
    } catch (error) {
        console.log(`There was a problem retrieving saved questionnaire:\n ${error}`)
    }
}