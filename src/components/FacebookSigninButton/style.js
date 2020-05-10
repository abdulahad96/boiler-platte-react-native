// @flow
import { StyleSheet } from "react-native";

export default StyleSheet.create({
    text: {
        fontFamily: 'Avenir Next',
        color: "#1D2029"
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
});
