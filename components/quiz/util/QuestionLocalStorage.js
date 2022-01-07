import AsyncStorage from '@react-native-async-storage/async-storage';
const _KEY = '@P5_2021_IWEB:quiz'
import { noSavedQuestionnaireAlert, restoredQuestionnaireAlert, savedQuestionnaireAlert, removedQuestionnaireAlert } from './Alerts';

export const checkIfSavedQuestionnaire = async () => {
    return await _getSavedQuestionnaire(_KEY) ? _getSavedQuestionnaire(_KEY) : false
}

export const getSavedQuestionnaireOrAlert = async (setQuizzes, setTimeLeft, setInputs) => {
    let savedQuestionnaire = await checkIfSavedQuestionnaire()
    if (savedQuestionnaire) {
        restoredQuestionnaireAlert()
        setQuizzes(savedQuestionnaire)
        setTimeLeft(60)
        setInputs(new Map())
    } else {
        noSavedQuestionnaireAlert()
    }
}

export const saveQuestionnaire = async (quizzes) => {
    try {
        const quizzesJson = JSON.stringify(quizzes)
        await AsyncStorage.setItem(_KEY, quizzesJson);
        savedQuestionnaireAlert()
    } catch (error) {
        console.log(`There was a problem saving current questionnaire:\n ${error}`)
    }
}

export const removeQuestionnaire = async () => {
    try {
        let savedQuestionnaire = await checkIfSavedQuestionnaire()
        if (savedQuestionnaire) {
            await AsyncStorage.removeItem(_KEY)
            removedQuestionnaireAlert()
        } else {
            noSavedQuestionnaireAlert()
        }
    } catch (error) {
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