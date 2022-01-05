import { StyleSheet } from "react-native";
import { Platform } from "react-native";

export const styles = StyleSheet.create({
    topMargin: {
        margin: (Platform.OS === 'ios') ? 76 : 56
    },
    centered: {
        justifyContent: 'center'
    },
    spaceEvenly: {
        justifyContent: 'space-evenly'
    },
    bigImage: {
        width: 250,
        height: 250,
    },
    mediumImage: {
        width: 150,
        height: 150,
    },
    smallImage: {
        width: 25,
        height: 25
    },
    textInput: {
        backgroundColor: 'rgb(245, 245, 245)',
        borderRadius: 4,
        borderBottomWidth: 1,
        borderBottomColor: '#6200ee',
        padding: 10
    }
})