// @flow
import { StyleSheet } from "react-native";

export default StyleSheet.create({
    image: {
        width: 50,
        height: 45,
        borderRadius: 50,
    },
    text: {
        fontFamily: 'Avenir Next',
        color: "#1D2029"
    },
    author: {
        fontSize: 13,
        fontWeight: '700',
        color: "#ccc",
        // color: 'rgba(0, 0, 0, 0.3)',
    },
    title: {
        fontSize: 14,
        fontWeight: '600',
        marginBottom: 10
    },
    iconBtn: {
        justifyContent: 'center',
        alignItems: 'center',
        width: 40,
        height: 40,
        borderRadius: 100,
    },



    leftAction: {
        flex: 1,
        backgroundColor: '#497AFC',
        justifyContent: 'center',
      },
      actionText: {
        color: 'white',
        fontSize: 16,
        backgroundColor: 'transparent',
        padding: 10,
      },
      rightAction: {
        alignItems: 'center',
        flex: 1,
        justifyContent: 'center',
      },
});


