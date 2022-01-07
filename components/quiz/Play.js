import { useState, useEffect } from "react";
import jordi from './img/jordi.jpeg'
import mrx from './img/mrx.jpeg'
import { TextInput, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Stack, HStack, Button, VStack, Avatar, Chip } from "@react-native-material/core";
import { TEAL, PINK, styles } from '../css/Styles'
import Countdown from "./Countdown";
import ResizableText from "./util/ResizableText";
import { saveQuestionnaire, getSavedQuestionnaireOrAlert, removeQuestionnaire, checkIfSavedQuestionnaire } from "./util/QuestionLocalStorage";
import { noRestoreAtTheEnd, noSavedQuestionnaireAlert, reconfirmRestore } from './util/Alerts'

const Play = ({ setScore, currentQuiz, setCurrentQuiz, quizzes, setFinished, setQuizzes }) => {

    const [disabledNext, setDisabledNext] = useState(false);
    const [disabledBack, setDisabledBack] = useState(true);
    const [timeLeft, setTimeLeft] = useState(60);
    const [inputs, setInputs] = useState(new Map())

    const updateButtons = () => {
        if (currentQuiz === (quizzes.length - 1)) {
            setDisabledNext(true)
            setDisabledBack(false)
        } else if (currentQuiz === 0) {
            setDisabledNext(false)
            setDisabledBack(true)
        } else {
            setDisabledNext(false)
            setDisabledBack(false)
        }
    }

    const next = () => {
        setCurrentQuiz(currentQuiz + 1)
    }

    const back = () => {
        setCurrentQuiz(currentQuiz - 1)
    }

    const submit = () => {
        setFinished(true)
        setCurrentQuiz(0)
        let scoreObtained = 0

        inputs.forEach((value, key) => {
            if (value.toLowerCase().trim() === quizzes[key].answer.toLowerCase().trim()) {
                scoreObtained++
            }
        });

        setScore(scoreObtained)
    }

    const getAttachmentURLIfPossible = () => {
        return quizzes[currentQuiz]?.attachment ? { uri: quizzes[currentQuiz].attachment.url } : jordi
    }

    const getAuthorPhotoIfPossible = () => {
        return quizzes[currentQuiz] && quizzes[currentQuiz].author && quizzes[currentQuiz].author.photo ? { uri: quizzes[currentQuiz].author.photo.url } : mrx
    }

    const getAuthorNameIfPossible = () => {
        return quizzes[currentQuiz]?.author?.username ?? "Anónimo" ?? quizzes[currentQuiz].author.username
    }

    const safeQuizQuestion = () => {
        let safeQuizQuestion = quizzes[currentQuiz]?.question ? quizzes[currentQuiz].question : "Cargando pregunta..."
        return safeQuizQuestion.substring(0, 250)
    }

    useEffect(() => {
        let mounted = true;
        if (mounted) {
            updateButtons()
        }
        return () => {
            mounted = false
        };
    });

    const reboot = () => {
        setCurrentQuiz(0)
        setQuizzes([])
        setScore(0)
        setInputs(new Map())
    }

    const storeResponse = (text) => {
        let newKey = new Map()
        newKey.set(currentQuiz, text)
        let merged = new Map([...inputs, ...newKey])
        setInputs(merged)
    }

    const getAuthorChipLabel = () => {
        return `Autor: ${getAuthorNameIfPossible()}`
    }

    const saveQuizzes = () => {
        saveQuestionnaire(quizzes)
    }

    const restoreQuizzes = async () => {
        let savedQuestionnaire = await checkIfSavedQuestionnaire()
        if (savedQuestionnaire) {
            if (inputs.size === 0) {
                getSavedQuestionnaireOrAlert(setQuizzes, setTimeLeft, setInputs)
            } else {
                await reconfirmRestore() ? getSavedQuestionnaireOrAlert(setQuizzes, setTimeLeft, setInputs) : noRestoreAtTheEnd()
            }
        } else {
            noSavedQuestionnaireAlert()
        }
    }

    return (
        <Stack spacing={2} style={styles.quizPadding} fill>

            <HStack style={styles.quizCentered} spacing={6}>
                <ResizableText style={styles.quizCentered} numberOfLines={2} text={safeQuizQuestion()} />
            </HStack>


            <HStack style={styles.quizCentered} spacing={6}>
                <Image source={getAttachmentURLIfPossible()} style={styles.quizMediumImage} />
                <VStack style={styles.quizCentered}>
                    <Countdown submit={submit} timeLeft={timeLeft} />
                </VStack>
            </HStack>

            <TextInput style={styles.quizTextInput} value={inputs.get(currentQuiz)} onChangeText={(text) => storeResponse(text)} placeholder="Escriba su respuesta..." />

            <HStack style={styles.quizCentered} spacing={1}>
                <Button title="Guardar" onPress={saveQuizzes} color={PINK} variant="outlined" uppercase={false} compact={true} leading={props => <Ionicons name="save" {...props} />} />
                <Button title="Restaurar" onPress={restoreQuizzes} color={PINK} variant="outlined" uppercase={false} compact={true} leading={props => <Ionicons name="folder-open" {...props} />} />
                <Button title="Eliminar" onPress={removeQuestionnaire} color={PINK} variant="outlined" uppercase={false} compact={true} leading={props => <Ionicons name="trash" {...props} />} />
            </HStack>

            <HStack style={styles.quizCentered} spacing={6}>
                <VStack style={styles.quizCentered}>
                    <Chip color={PINK} label={getAuthorChipLabel()} labelStyle={styles.quizAuthorText} trailing={props =>
                        <Avatar size={28} image={getAuthorPhotoIfPossible()} autoColor />} />
                </VStack>

            </HStack>

            <HStack style={styles.quizSpaceEvenly} spacing={6}>
                <Button title="Anterior" onPress={back} disabled={disabledBack} leading={props => <Ionicons name="arrow-back" {...props} />} />
                <Button title="Siguiente" onPress={next} disabled={disabledNext} trailing={props => <Ionicons name="arrow-forward" {...props} />} />
            </HStack>
            <Stack spacing={2} fill >
                <Button title="Enviar" color={TEAL} tintColor="white" onPress={submit} trailing={props => <Ionicons name="checkmark" {...props} />} />
                <Button title="Reiniciar" color={PINK} tintColor="white" onPress={reboot} trailing={props => <Ionicons name="color-wand-outline" {...props} />} />
            </Stack>

        </Stack>
    )
}

export default Play
