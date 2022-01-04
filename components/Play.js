import { useState, useEffect } from "react";
import jordi from './img/jordi.jpeg'
import mrx from './img/mrx.jpeg'
import { Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Text, Stack, TextInput, HStack, Button } from "@react-native-material/core";

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
        return quizzes[currentQuiz].author && quizzes[currentQuiz].author.photo ? { uri: quizzes[currentQuiz].author.photo.url } : mrx
    }

    const getAuthorNameIfPossible = () => {
        return quizzes[currentQuiz].author && quizzes[currentQuiz].author.username ? quizzes[currentQuiz].author.username : "Anónimo"
    }

    const renderSpecificQuiz = (index) => {
        answerSave()
        setCurrentQuiz(index)
        updateButtons()
    }

    const truncate = (question) => {
        return question.substring(0, 75)
    }

    const fallbackAuthorPhoto = (e) => {
        e.target.onerror = null
        e.target.src = mrx
    }

    const fallbackAttachmentPhoto = (e) => {
        e.target.onerror = null
        e.target.src = jordi
    }

    const onEnterKey = (event) => {
        if (event.key === "Enter") {
            currentQuiz === (quizzes.length - 1) ? submit() : next()
        }
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

    const onChangeDo = (e) => {
        let newKey = new Map()
        newKey.set(currentQuiz, e.target.value)
        let merged = new Map([...inputs, ...newKey])
        setInputs(merged)
    }



    return (
        <Stack spacing={2} style={{ marginTop: 50, margin: 26 }} fill>

            <HStack style={{ justifyContent: 'center' }} spacing={6}>
                <Text variant="h5">Pregunta {currentQuiz + 1}</Text>
            </HStack>
            <HStack style={{ justifyContent: 'center' }} spacing={6}>
                <Text variant="subtitle1">{truncate(quizzes[currentQuiz].question)}</Text>
            </HStack>

            <HStack style={{ justifyContent: 'center' }} spacing={6}>
                <Image style={{ width: 150, height: 150 }} source={getAttachmentURLIfPossible()} alt='' />
            </HStack>

            <TextInput label="Escriba su respuesta" value={inputs.get(currentQuiz)} onChange={e => onChangeDo(e)} onKeyPress={event => onEnterKey(event)} />

            <HStack style={{ justifyContent: 'center' }} spacing={6}>
                <Text variant="h5">Autor: {getAuthorNameIfPossible()}</Text>
                <Image style={{ width: 25, height: 25 }} source={getAuthorPhotoIfPossible()} alt='' />
            </HStack>

            <HStack style={{ justifyContent: 'center' }} spacing={6}>
                <Text variant="subtitle2">Tiempo restante para acabar el cuestionario: {timeLeft}</Text>
            </HStack>

            <HStack style={{ justifyContent: 'space-evenly' }} spacing={6}>
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
