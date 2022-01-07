import { StyleSheet, Platform } from "react-native";

export const PURPLE = '#6200ee'
export const PINK = '#FF4081'
export const TEAL = "#009688"
export const ORANGE = "#FF5252"
export const BLUE = "#303F9F"
export const PALE_PINK = "#F8BBD0"

export const styles = StyleSheet.create({
    AndroidSafeArea: {
        flex: 1,
        backgroundColor: PURPLE,
        paddingTop: Platform.OS === 'android' ? 25 : 0
    },
    quizPadding: {
        paddingHorizontal: 20,
        paddingVertical: Platform.OS === 'android' ? 20 : 35
    },
    quizAppBar: {
        height: 100
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
        borderRadius: 5
    },
    quizAvatarContainer: {
        flex: 1,
        alignContent: 'center',
        justifyContent: 'center',
        marginRight: 15
    },
    quizAvatar: {
        paddingRight: 65
    },
    quizAuthorText: {
        fontWeight: 'bold'
    },
    quizTextInput: {
        backgroundColor: 'rgb(245, 245, 245)',
        borderRadius: 4,
        borderBottomWidth: 1,
        borderBottomColor: PURPLE,
        padding: 10
    },
    quizCountdown: {
        fontSize: 10,
        textAlign: 'center'
    },
    emoji: {
        fontSize: 25,
        flex: 1,
        alignContent: 'center',
        justifyContent: 'center'
    },
    homeGraffiti: {
        flex: 1,
        resizeMode: 'contain'
    },
    homeMargin: {
        margin: 16
    },
    tictactoeText: {
        fontSize: 25,
        padding: 30,
        textAlign: 'center'
    },
    tictactoeMargin: {
        flex: 1,
        margin: 25
    }
})

