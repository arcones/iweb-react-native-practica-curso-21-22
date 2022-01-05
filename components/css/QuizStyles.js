import { StyleSheet } from "react-native";
import { Platform } from "react-native";

export const styles = StyleSheet.create({
    margins: {
        marginTop: (Platform.OS === 'ios') ? 96 : 56,
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
    textInput: {
        backgroundColor: 'rgb(245, 245, 245)',
        borderRadius: 4,
        borderBottomWidth: 1,
        borderBottomColor: '#6200ee',
        padding: 10
    },
    vstackForImageBlurShadow: {
        backgroundColor: '#ffffff'
    }
})