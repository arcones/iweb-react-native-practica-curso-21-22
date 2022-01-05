import { useState, useEffect } from "react";
import jordi from './img/jordi.jpeg'
import mrx from './img/mrx.jpeg'
import { TextInput, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Text, Stack, HStack, Button, VStack, Avatar, Chip } from "@react-native-material/core";
import { styles } from '../css/Styles'
import Countdown from "./Countdown";

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
            if (value.toLowerCase() === quizzes[key].answer.toLowerCase()) {
                scoreObtained++
            }
        });

        setScore(scoreObtained)
    }

    const randomEmojiPeople = () => {
        var peopleEmojis = Array("🧝‍♀️", "🧙‍♂️", "🧛‍♀️", "🧟‍♂️", "🦸‍♀️", "🦹‍♀️", "🧞", "🧜‍♀️", "🧜‍♂️", "🧚", "🤶", "👨‍✈️", "👨‍🦰");
        var chosenEmoji = peopleEmojis[Math.floor(Math.random() * peopleEmojis.length)]
        return chosenEmoji
    }

    const getAttachmentURLIfPossible = () => {
        return quizzes[currentQuiz]?.attachment ? { uri: quizzes[currentQuiz].attachment.url } : jordi
    }

    const getAuthorPhotoIfPossible = () => {
        return quizzes[currentQuiz] && quizzes[currentQuiz].author && quizzes[currentQuiz].author.photo ? { uri: quizzes[currentQuiz].author.photo.url } : mrx
    }

    const getAuthorNameIfPossible = () => {
        var authorName = quizzes[currentQuiz]?.author?.username ?? "Anónimo" ?? quizzes[currentQuiz].author.username
        return authorName + ` ${randomEmojiPeople()}`
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



    const getAuthorChipLabel = () => {
        return `Autor: ${getAuthorNameIfPossible()}`
    }

    return (
        <Stack spacing={2} style={styles.quizMargins} fill>

            <HStack style={styles.quizCentered} spacing={6}>
                <Text variant="subtitle1">{truncate(quizzes[currentQuiz].question)}</Text>
            </HStack>


            <HStack style={styles.quizCentered} spacing={6}>

                <Image source={getAttachmentURLIfPossible()} style={styles.quizMediumImage} />
                <VStack style={styles.quizCentered}>
                    <Countdown submit={submit} />
                </VStack>
            </HStack>

            <TextInput style={styles.quizTextInput} value={inputs.get(currentQuiz)} onChangeText={(text) => storeResponse(text)} placeholder="Escriba su respuesta..." />

            <HStack style={styles.quizCentered} spacing={6}>
                <VStack style={styles.quizCentered}>
                    <Chip variant="outlined" label={getAuthorChipLabel()} />
                </VStack>
                <Avatar image={getAuthorPhotoIfPossible()} autoColor />
            </HStack>

            <HStack style={styles.quizSpaceEvenly} spacing={6}>
                <Button title="Anterior" onPress={back} disabled={disabledBack} leading={props => <Ionicons name="arrow-back" {...props} />} />
                <Button title="Siguiente" onPress={next} disabled={disabledNext} trailing={props => <Ionicons name="arrow-forward" {...props} />} />
            </HStack>
            <Stack spacing={2} fill >
                <Button title="Enviar" color="#009688" tintColor="white" onPress={submit} trailing={props => <Ionicons name="checkmark" {...props} />} />
                <Button title="Reiniciar"  color="#FF4081" tintColor="white" onPress={reboot} trailing={props => <Ionicons name="color-wand-outline" {...props} />} />
            </Stack>
        </Stack>
    )
}

export default Play
