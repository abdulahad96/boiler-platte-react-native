// @flow
import { StyleSheet, Dimensions } from "react-native";

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
    },
    searchBarView: {
        backgroundColor: '#fff',
        position: 'absolute',
        top: 30,
        left: 15,
        right: 15,
        zIndex: 99,
        borderRadius: 4,
        shadowColor: "rgba(255, 22, 84, 0.24)",
        shadowOffset: { width: 0, height: 9 },
        shadowOpacity: 1,
        shadowRadius: 20,
        elevation: 5
    },
    text: {
        fontFamily: 'Avenir Next',
        color: "#1D2029"
    },
    darkModeBtn: {
        backgroundColor: '#fff',
        position: 'absolute',
        top: Dimensions.get('window').height * 0.8,
        left: Dimensions.get('window').width * 0.85,
        // right: Dimensions.get('window').width *0.8,
        width: 40,
        height: 40,
        alignItems: "center",
        justifyContent: "center",
        zIndex: 99,
        borderRadius: 50,
        shadowColor: "rgba(255, 22, 84, 0.24)",
        shadowOffset: { width: 0, height: 9 },
        shadowOpacity: 1,
        shadowRadius: 20,
        elevation: 5
    },
    actionButtonIcon: {
        fontSize: 20,
        height: 22,
    },
});
