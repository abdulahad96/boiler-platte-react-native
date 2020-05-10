// @flow
import { StyleSheet } from "react-native";
import { Fonts, Metrics, Images } from "../../theme";
export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        // paddingHorizontal: 30
    },
    openDrawer: {
        position: 'absolute',
        top: 12,
        right: 15,
        zIndex: 99,
        shadowColor: "rgba(255, 22, 84, 0.24)",
        shadowOffset: { width: 0, height: 9 },
        shadowOpacity: 1,
        shadowRadius: 20,
        elevation: 5
    },
    profileImage: {
        width: 100,
        height: 100,
        borderRadius: 100,
        borderWidth: 5,
        borderColor: "white",
        alignSelf: "center",
        position: "relative",
        top: -50,
    },
    text: {
        fontFamily: 'Avenir Next',
        color: "#1D2029"
    },
    profileName: {
        textAlign: 'center',
        fontWeight: "700",
        fontSize: 20,
    },
    profileStatus: {
        textAlign: 'center',
        fontWeight: "700",
        fontSize: 14,
        color: "#ccc",
        marginTop: 3,
    }

});
