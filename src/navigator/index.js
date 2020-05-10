import { createAppContainer, createSwitchNavigator } from "react-navigation";
import { createStackNavigator, } from "react-navigation-stack";

import Login from '../containers/Login';
import Register from '../containers/Registration';
import ForgotPassword from '../containers/ForgotPassword';
import VerifyResetCode from '../containers/VerifyResetCode';
import ResetPassword from '../containers/ResetPassword';

import AppNavigator from './DrawerNavigator';

// Stack navigator for authentication
const AuthNavigator = createStackNavigator({
    Login: {
        screen: Login,
        navigationOptions: {
            header: null
        }
    },
    Register: {
        screen: Register,
        navigationOptions: {
            headerStyle: {
                backgroundColor: '#fff',
                shadowOpacity: 0,
                elevation: 0,
            },
        }
    },
    ForgotPassword: {
        screen: ForgotPassword,
        navigationOptions: {
            headerStyle: {
                backgroundColor: '#fff',
                shadowOpacity: 0,
                elevation: 0,
            },
        }
    },
    VerifyResetCode: {
        screen: VerifyResetCode,
        navigationOptions: {
            headerStyle: {
                backgroundColor: '#fff',
                shadowOpacity: 0,
                elevation: 0,
            },
        }
    },
    ResetPassword: {
        screen: ResetPassword,
        navigationOptions: {
            headerStyle: {
                backgroundColor: '#fff',
                shadowOpacity: 0,
                elevation: 0,
            },
        }
    }
});

// Switch navigator to switch from athutication to main app
const MainNavigator = createSwitchNavigator({
    Auth: {
        screen: AuthNavigator
    },
    App: {
        screen: AppNavigator
    }
})

export default createAppContainer(MainNavigator);