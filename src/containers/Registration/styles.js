// @flow
import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        paddingHorizontal: 30
    },
    titleView: {
        marginBottom: 40,
        // alignItems: 'center',
        // justifyContent: 'center',
    },
    text: {
        fontFamily: 'Avenir Next',
        color: "#1D2029"
    },
    link: {
        color: "#FF1654",
        fontSize: 14,
        fontWeight: "500"
    },
    submitContainer: {
        backgroundColor: "#FF1654",
        fontSize: 16,
        borderRadius: 4,
        paddingVertical: 12,
        marginTop: 32,
        alignItems: "center",
        justifyContent: "center",
        color: "#FFF",
        shadowColor: "rgba(255, 22, 84, 0.24)",
        shadowOffset: { width: 0, height: 9 },
        shadowOpacity: 1,
        shadowRadius: 20,
        elevation: 5
    },
    submitContainerDisabled: {
        backgroundColor: "#ccc",
        fontSize: 16,
        borderRadius: 4,
        paddingVertical: 12,
        marginTop: 32,
        alignItems: "center",
        justifyContent: "center",
        color: "#FFF",
        shadowColor: "rgba(255, 22, 84, 0.24)",
        shadowOffset: { width: 0, height: 9 },
        shadowOpacity: 1,
        shadowRadius: 20,
        elevation: 5
    },
    labelInput: {
        color: '#ABB4BD',
        fontSize: 14,
        fontFamily: 'Avenir Next',
    },
    formInput: {
        borderBottomWidth: StyleSheet.hairlineWidth,
        borderColor: '#ABB4BD',
        marginBottom: 10,
    },
    input: {
        borderWidth: 0,
        fontSize: 16,
        fontFamily: 'Avenir Next',
        color: "#1D2029"
    },
    errorMessage: {
        fontFamily: 'Avenir Next',
        color: "rgba(255, 22, 84, 0.8)",
        fontSize: 12,
        fontWeight: "500",
    },
});
