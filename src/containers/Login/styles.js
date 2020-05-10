// @flow
import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        paddingHorizontal: 30
    },
    logoView: {
        marginTop: 40,
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        fontFamily: 'Avenir Next',
        color: "#1D2029"
    },
    loginWithView: {
        // marginTop: 30,
        flexDirection: "row",
        justifyContent: "center",
    },
    socialButton: {
        flexDirection: "row",
        alignItems: "center",
        marginHorizontal: 12,
        paddingVertical: 12,
        paddingHorizontal: 25,
        borderWidth: StyleSheet.hairlineWidth,
        borderColor: "rgba(171, 180, 189, 0.65)",
        borderRadius: 4,
        backgroundColor: "#fff",
        shadowColor: "rgba(171, 180, 189, 0.35)",
        shadowOffset: { width: 0, height: 10 },
        shadowOpacity: 1,
        shadowRadius: 20,
        elevation: 5
    },
    socialLogo: {
        width: 16,
        height: 16,
        marginRight: 8
    },
    link: {
        color: "#FF1654",
        fontSize: 14,
        fontWeight: "500"
    },
    submitContainer: {
        backgroundColor: "blue",
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
