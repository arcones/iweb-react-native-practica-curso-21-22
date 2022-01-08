import { Alert } from "react-native";

export const noSavedQuestionnaireAlert = () =>
    Alert.alert(
        "No hay questionarios guardados",
        "Pulse en el botón de guardar cuando le guste un conjunto de preguntas para guardarlo",
        [
            { text: "OK" }
        ]
    );

export const restoredQuestionnaireAlert = () =>
    Alert.alert(
        "Éxito",
        "Se ha restaurado el cuestionario guardado",
        [
            { text: "OK" }
        ]
    );

export const savedQuestionnaireAlert = () =>
    Alert.alert(
        "Éxito",
        "Se ha guardado el cuestionario actual",
        [
            { text: "OK" }
        ]
    );

export const removedQuestionnaireAlert = () =>
    Alert.alert(
        "Éxito",
        "Se ha eliminado el cuestionario guardado",
        [
            { text: "OK" }
        ]
    );


export const reconfirmRestore = async () => {
    console.log("estoy en reconfirm restore")
    const AsyncAlert = async () => new Promise((resolve) => {
        Alert.alert(
            "¿Seguro?",
            "Sus respuestas para el actual cuestionario se borrarán",
            [
                {
                    text: "Cancelar",
                    onPress: () => resolve(false),
                    style: "cancel"
                },
                {
                    text: "OK",
                    onPress: () => resolve(true)
                }
            ]
        );
    });
    return await AsyncAlert()
}

export const noRestoreAtTheEnd = () =>
    Alert.alert(
        "OK",
        "Siga jugando con el cuestionario actual",
        [
            { text: "OK" }
        ]
    );
