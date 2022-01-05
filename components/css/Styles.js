import { StyleSheet, Platform} from "react-native";

export const styles = StyleSheet.create({
    quizMargins: {
        marginTop: (Platform.OS === 'ios') ? 16 : 6,
        marginHorizontal: 16
    },
    quizCentered: {
        justifyContent: 'center',
        alignSelf: 'center'
    },
    quizSpaceEvenly: {
        justifyContent: 'space-evenly'
    },
    quizBigImage: {
        width: 250,
        height: 250,
    },
    quizMediumImage: {
        width: 120,
        height: 120,
    },
    quizTextInput: {
        backgroundColor: 'rgb(245, 245, 245)',
        borderRadius: 4,
        borderBottomWidth: 1,
        borderBottomColor: '#6200ee',
        padding: 10
    }
})