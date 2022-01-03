import { useState, useEffect } from "react";
import jordi from './img/jordi.jpeg'
import mrx from './img/mrx.jpeg'
import { TouchableHighlight, Text, View, Image, TextInput } from 'react-native';
import { styles } from './styles';

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
        return quizzes[currentQuiz].attachment ? quizzes[currentQuiz].attachment.url : jordi
    }

    const getAuthorPhotoIfPossible = () => {
        // TODO reinstaurar todo esto
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

    useEffect(() => {
        updateButtons()
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
        <View style={styles.container}>
            <Text style={styles.headline}>Trivial</Text>
            <Text style={styles.headline}>Pregunta {currentQuiz + 1}</Text>
            <Text style={styles.quizQuestion}>{truncate(quizzes[currentQuiz].question)}</Text>
            <Image source={getAttachmentURLIfPossible()} onError={e => fallbackAttachmentPhoto(e)} alt='' />
            <TextInput id="answer" value={inputs.get(currentQuiz)} onChange={e => onChangeDo(e)} onKeyPress={event => onEnterKey(event)} placeholder="Escriba su respuesta" />
            <View  style={styles.container}>
                <Text>Autor: {getAuthorNameIfPossible()}</Text>
                <Image style={styles.tinyImage} source={mrx} onError={e => fallbackAuthorPhoto(e)} alt='' />
                <Text>Tiempo restante para acabar el cuestionario: {timeLeft}</Text>
            </View>
            <View style={{flexDirection: 'row'}}>
                <TouchableHighlight style={styles.quizActionTouchable} onPress={back} disabled={disabledBack}><Text style={styles.quizActionTouchableText}>Anterior</Text></TouchableHighlight>
                <TouchableHighlight style={styles.quizActionTouchable} onClick={next} disabled={disabledNext}><Text style={styles.quizActionTouchableText}>Siguiente</Text></TouchableHighlight>
            </View>
            <TouchableHighlight style={styles.quizActionTouchable} onClick={submit}><Text style={styles.quizActionTouchableText}>Enviar</Text></TouchableHighlight>
            <TouchableHighlight style={styles.quizActionTouchable} onClick={reboot}><Text style={styles.quizActionTouchableText}>Reiniciar</Text></TouchableHighlight>
        </View>
    )
}

export default Play
