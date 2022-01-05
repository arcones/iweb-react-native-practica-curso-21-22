import { useState, useEffect } from "react";
import jordi from './img/jordi.jpeg'
import mrx from './img/mrx.jpeg'
import { Image, TextInput } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Text, Stack, HStack, Button } from "@react-native-material/core";
import { styles } from './css/QuizStyles'

const Play = ({ setScore, currentQuiz, setCurrentQuiz, quizzes, setFinished, setQuizzes, answers, setAnswers }) => {

    const [disabledNext, setDisabledNext] = useState(false);
    const [disabledBack, setDisabledBack] = useState(true);
    const [timeLeft, setTimeLeft] = useState(60)
    const [inputs, setInputs] = useState(new Map())

    const answerSave = () => {
        //TODO reinstaurar todo esto!!!
        var answersCopy = answers
        //answersCopy[quizzes[currentQuiz].id] = document.getElementById("answer").value.toLowerCase()
        setAnswers(answersCopy)
        //document.getElementById("answer").value = "";
    }

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
        answerSave()
        setCurrentQuiz(currentQuiz + 1)
    }

    const back = () => {
        answerSave()
        setCurrentQuiz(currentQuiz - 1)
    }

    const submit = () => {
        answerSave(currentQuiz)
        setFinished(true)
        let scoreObtained = 0
        Object.keys(answers).forEach((key) => {
            let keyNumber = Number(key)
            const filtered = quizzes.filter((quiz) => quiz.id === keyNumber)[0];
            if (filtered.answer.toLowerCase() === answers[key].toLowerCase()) {
                scoreObtained++
            }
        });
        setScore(scoreObtained)
    }

    const getAttachmentURLIfPossible = () => {
        return quizzes[currentQuiz].attachment ? { uri: quizzes[currentQuiz].attachment.url } : jordi
    }

    const getAuthorPhotoIfPossible = () => {
        return quizzes[currentQuiz]?.author?.photo ?? mrx ?? { uri: quizzes[currentQuiz].author.photo.url }
    }

    const getAuthorNameIfPossible = () => {
        return quizzes[currentQuiz]?.author?.username ?? "Anónimo" ?? quizzes[currentQuiz].author.username
    }

    const truncate = (question) => {
        return question.substring(0, 75)
    }

    useEffect(() => {
        let mounted = true;
        let interval;
        if (mounted) {
            interval = setInterval(() => {
                setTimeLeft((prevTimeLeft) => prevTimeLeft === 0 ? submit() : prevTimeLeft - 1);
            }, 1000);
        }
        return () => {
            clearInterval(interval);
            mounted = false
        };
    });

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
        setQuizzes([])
        setScore(0)
    }

    const storeResponse = (e) => {
        console.log("EL EVENTO")
        console.log(e)
        console.log("---------------------")
        let newKey = new Map()
        newKey.set(currentQuiz, e.target.value)
        let merged = new Map([...inputs, ...newKey])
        setInputs(merged)
        console.log("ESTOS SON LOS INPUTS")
        console.log(inputs)
        console.log("-----------------------")
    }

    return (
        <Stack spacing={2} style={styles.topMargin} fill>

            <HStack style={styles.centered} spacing={6}>
                <Text variant="h5">Pregunta {currentQuiz + 1} </Text>
            </HStack>
            <HStack style={styles.centered} spacing={6}>
                <Text variant="subtitle1">{truncate(quizzes[currentQuiz].question)}</Text>
            </HStack>

            <HStack style={styles.centered} spacing={6}>
                <Image style={styles.mediumImage} source={getAttachmentURLIfPossible()} alt='' />
            </HStack>

            <TextInput style={styles.textInput} value={inputs.get(currentQuiz)} onSubmitEditing={e => storeResponse(e)} placeholder="Escriba su respuesta..." />

            <HStack style={styles.centered} spacing={6}>
                <Text variant="h5">Autor: {getAuthorNameIfPossible()}</Text>
                <Image style={styles.smallImage} source={getAuthorPhotoIfPossible()} alt='' />
            </HStack>

            <HStack style={styles.centered} spacing={6}>
                <Text variant="subtitle2">Tiempo restante para acabar el cuestionario: {timeLeft}</Text>
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
