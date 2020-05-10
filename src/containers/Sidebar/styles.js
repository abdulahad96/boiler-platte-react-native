// @flow
import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
        flex: 1
    },
    profile: {
        width: 80,
        height: 80,
        borderRadius: 40,
        borderWidth: 3,
        borderColor: "#FFF"
    },
    name: {
        color: "#FFF",
        fontSize: 20,
        fontWeight: "800",
        marginVertical: 8
    },
    followers: {
        color: "rgba(255, 255, 255, 0.8)",
        fontSize: 13,
        marginRight: 4
    },
    logOutBtn: {
        flexDirection: "row",
        marginHorizontal: 8,
        borderRadius: 4,
        paddingVertical: 14,
    },
    logOutText: {
        color: 'rgba(0, 0, 0, 0.4)',
        fontWeight: '700',
        marginLeft: 15
    }
});
