import { createDrawerNavigator } from 'react-navigation-drawer';
import React from 'react';
import { Dimensions } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feeds from '../../containers/Feeds';
// import Chat from "../../containers/Chat";
import Empty from "../../containers/Empty";
import Sidebar from "../../containers/Sidebar";

// Stack navigator for main app
const AppNavigator = createDrawerNavigator({
    Feeds: {
        screen: Feeds,
        navigationOptions: {
            header: null,
            drawerIcon: ({ tintColor }) => <FontAwesome name='newspaper-o' size={20} color={tintColor} />,
        }
    },

 
}, {
    contentComponent: props => <Sidebar {...props} />,
    drawerWidth: Dimensions.get("window").width * 0.85,
    // hideStatusBar: true,
    contentOptions: {
        inactiveTintColor: 'rgba(0, 0, 0, 0.4)',
        inactiveBackgroundColor: 'transparent',
        activeBackgroundColor: "rgba(255, 22, 84, 0.1)",
        activeTintColor: "#FF1654",
        itemsContainerStyle: {
            marginTop: 16,
            marginHorizontal: 8
        },
        itemStyle: {
            borderRadius: 4
        }
    }
})


export default AppNavigator