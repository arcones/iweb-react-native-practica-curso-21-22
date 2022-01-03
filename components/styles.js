import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        paddingTop: 150,
        padding: 15,
        alignItems: "center",
    },
    headline: {
        color: 'steelblue',
        fontSize: 25,
        textAlign: 'center',
        fontWeight: 'bold'
    },
    tinyImage: {
        width: 50,
        height: 50
    },
    image: {
        width: 250,
        height: 250
    },
    touchable: {
        borderWidth: 1,
        borderColor: 'black',
        borderRadius: 5,
        backgroundColor: 'teal',
        fontSize: 20,
        textAlign: 'center',
        padding: 5,
    },
    touchableText: {
        color: 'white',
        fontSize: 20,
        padding: 10,
        fontWeight: 'bold'
    },
    quizActionTouchable: {
        borderWidth: 1,
        margin: 1,
        borderRadius: 5,
        borderColor: 'black',
        backgroundColor: 'teal',
        fontSize: 20,
        textAlign: 'center',
        padding: 5,
    },
    quizActionTouchableText: {
        color: 'white',
        fontSize: 20,
        padding: 10,
        fontWeight: 'bold'
    },
    quizQuestion: {
        padding: 10,
        color: 'teal',
        fontSize: 20,
        textAlign: 'center',
        fontWeight: 'bold'
    }
});
