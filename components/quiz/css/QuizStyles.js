import { StyleSheet } from "react-native";
import { Platform } from "react-native";

export const styles = StyleSheet.create({
    margins: {
        marginTop: (Platform.OS === 'ios') ? 16 : 6,
        marginHorizontal: 16
    },
    centered: {
        justifyContent: 'center',
        alignSelf: 'center'
    },
    spaceEvenly: {
        justifyContent: 'space-evenly'
    },
    bigImage: {
        width: 250,
        height: 250,
    },
    mediumImage: {
        width: 120,
        height: 120,
    },
    textInput: {
        backgroundColor: 'rgb(245, 245, 245)',
        borderRadius: 4,
        borderBottomWidth: 1,
        borderBottomColor: '#6200ee',
        padding: 10
    }
})