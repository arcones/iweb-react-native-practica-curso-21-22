import { useState, useEffect } from "react";
import jordi from './img/jordi.jpeg'
import mrx from './img/mrx.jpeg'
import { TextInput } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Text, Stack, HStack, Button, VStack, Avatar } from "@react-native-material/core";
import { styles } from './css/QuizStyles'
import Countdown from "./Countdown";
import ImageBlurShadow from 'react-native-image-blur-shadow';

const Play = ({ setScore, currentQuiz, setCurrentQuiz, quizzes, setFinished, setQuizzes }) => {

    const [disabledNext, setDisabledNext] = useState(false);
    const [disabledBack, setDisabledBack] = useState(true);
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
            console.log(quizzes[key])
            if (value == quizzes[key].answer.toLowerCase()) {
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

    const truncate = (question) => {
        return question.substring(0, 75)
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
    }

    const storeResponse = (text) => {
        let newKey = new Map()
        newKey.set(currentQuiz, text)
        let merged = new Map([...inputs, ...newKey])
        setInputs(merged)
    }

    return (
        <Stack spacing={2} style={styles.margins} fill>

            <HStack style={styles.centered} spacing={6}>
                <Text variant="h5">Pregunta {currentQuiz + 1} </Text>
            </HStack>
            <HStack style={styles.centered} spacing={6}>
                <Text variant="subtitle1">{truncate(quizzes[currentQuiz].question)}</Text>
            </HStack>

            <HStack style={styles.centered} spacing={6}>
                <VStack style={styles.vstackForImageBlurShadow}>
                    <ImageBlurShadow source={getAttachmentURLIfPossible()} imageWidth={150} imageHeight={150} imageBorderRadius={12} shadowOffset={22} shadowBlurRadius={12} />
                </VStack>
                <VStack style={styles.centered}>
                    <Countdown submit={submit} />
                </VStack>
            </HStack>

            <TextInput style={styles.textInput} value={inputs.get(currentQuiz)} onChangeText={(text) => storeResponse(text)} placeholder="Escriba su respuesta..." />

            <HStack style={styles.centered} spacing={6}>
                <VStack style={styles.centered}>
                    <Text variant="h5">Autor: {getAuthorNameIfPossible()}</Text>
                </VStack>
                <Avatar image={getAuthorPhotoIfPossible()} />
            </HStack>

            <HStack style={styles.spaceEvenly} spacing={6}>
                <Button title="Anterior" onPress={back} disabled={disabledBack} leading={props => <Ionicons name="arrow-back" {...props} />} />
                <Button title="Siguiente" onPress={next} disabled={disabledNext} trailing={props => <Ionicons name="arrow-forward" {...props} />} />
            </HStack>
            <Stack spacing={2} fill >
                <Button title="Enviar" onPress={submit} trailing={props => <Ionicons name="checkmark" {...props} />} />
                <Button title="Reiniciar" onPress={reboot} trailing={props => <Ionicons name="color-wand-outline" {...props} />} />
            </Stack>
        </Stack>
    )
}

export default Play
