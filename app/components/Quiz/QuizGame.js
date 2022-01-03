import { useState, useEffect } from "react";
import jordi from './img/jordi.jpeg'
import mrx from './img/mrx.jpeg'
import { StyleSheet, TouchableHighlight, Text, View, Image, TextInput } from 'react-native';

const QuizGame = ({ setScore, currentQuiz, setCurrentQuiz, quizzes, setFinished, setQuizzes, answers, setAnswers }) => {

    // const contextValue = useContext(LangContext);

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
        return quizzes[currentQuiz].attachment ? quizzes[currentQuiz].attachment.url : jordi
    }

    const getAuthorPhotoIfPossible = () => {
        // return quizzes[currentQuiz].author && quizzes[currentQuiz].author.photo ? quizzes[currentQuiz].author.photo.url : mrx
        return mrx
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
        return question.substring(0, 500)
    }

    const fallbackAuthorPhoto = (e) => {
        e.target.onerror = null
        e.target.src = mrx
    }

    const fallbackAttachmentPhoto = (e) => {
        e.target.onerror = null
        e.target.src = jordi
    }

    let quizButtons = quizzes.map((item, index) => {
        return <TouchableHighlight key={index} onPress={() => renderSpecificQuiz(index)}><Text>{index + 1}</Text></TouchableHighlight>
    })

    const onEnterKey = (event) => {
        if (event.key === "Enter") {
            currentQuiz === (quizzes.length - 1) ? submit() : next()
        }
    }

    useEffect(() => {
        const interval = setInterval(() => {
            setTimeLeft((prevTimeLeft) => prevTimeLeft === 0 ? submit() : prevTimeLeft - 1);
        }, 1000);
        return () => {
            clearInterval(interval);
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
            <View onLoad={updateButtons} className="contained-text">
                <Text>Trivial</Text>
                <View>
                    {quizButtons}
                </View>
                <Text>Pregunta {currentQuiz + 1}</Text>
                <Text>{truncate(quizzes[currentQuiz].question)}</Text>
                <Image source={getAttachmentURLIfPossible()} onError={e => fallbackAttachmentPhoto(e)} alt=''/>
                <TextInput id="answer" value={inputs.get(currentQuiz)} onChange={e => onChangeDo(e)} onKeyPress={event => onEnterKey(event)} placeholder="Escriba su respuesta" />
                <View>
                    <Text>Autor: {getAuthorNameIfPossible()}</Text>
                    <Image source={mrx} onError={e => fallbackAuthorPhoto(e)} alt=''/>
                    <Text>Tiempo restante para acabar el cuestionario: {timeLeft}</Text>
                </View>
                <View>
                    <TouchableHighlight onPress={back} disabled={disabledBack}><Text>Anterior</Text></TouchableHighlight>
                    <TouchableHighlight onClick={next} disabled={disabledNext}><Text>Siguiente</Text></TouchableHighlight>
                </View>
                <TouchableHighlight onClick={submit}><Text>Enviar</Text></TouchableHighlight>
                <TouchableHighlight onClick={reboot}><Text>Reiniciar</Text></TouchableHighlight>
            </View>
    )
}

export default QuizGame
