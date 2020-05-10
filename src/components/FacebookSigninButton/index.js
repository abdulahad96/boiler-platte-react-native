import { connect } from 'react-redux';
import React, { Component } from 'react';


import { Alert, Text, View, Image, TouchableOpacity, Platform } from 'react-native';
// import { LoginButton, AccessToken, LoginManager, GraphRequest, GraphRequestManager } from 'react-native-fbsdk';

import styles from "./style";
import { Images } from '../../theme';
import { request as socialLogin } from '../../redux/actions/SocialLogin';

class FacebookSigninButton extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }


    // onLoginFinished = (error, result) => {
    //     if (error) {
    //         console.log("login has error: ", result.error);
    //     } else if (result.isCancelled) {
    //         console.log("login is cancelled.");
    //     } else {
    //         console.log(result, "resultttttttttttt")
    //         AccessToken.getCurrentAccessToken().then(
    //             (data) => {
    //                 console.log(data.accessToken.toString(), "data accessToken")
    //                 console.log(data, "dataaaa")
    //             }
    //         )
    //     }
    // }

    // handleFacebookLogin = () => {
    //     LoginManager.logInWithPermissions(['public_profile', 'email',]).then(
    //         function (result) {
    //             if (result.isCancelled) {
    //                 console.log('Login cancelled')
    //             } else {
    //                 AccessToken.getCurrentAccessToken().then((data) => {
    //                     // console.log(data.accessToken.toString(), "data accessToken")
    //                     const req = new GraphRequest(
    //                         '/me',
    //                         {
    //                             httpMethod: 'GET',
    //                             version: 'v2.5',
    //                             parameters: {
    //                                 fields: {
    //                                     string: 'email,name',
    //                                 },
    //                             },
    //                         },
    //                         (err, res) => {
    //                             if (err) {
    //                                 console.error(err);
    //                             } else {
    //                                 console.log("FACEBOOK SIGN SUCCESSFULLY ", data, res)
    //                             }
    //                         }
    //                     );
    //                     new GraphRequestManager().addRequest(req).start();
    //                 })
    //                 // console.log('Login success with permissions: ', result.grantedPermissions.toString())
    //             }
    //         },
    //         function (error) {
    //             console.log('Login fail with error: ', error)
    //         }
    //     )
    // }

    render() {
        return (
            <>
                {/* <LoginButton
                    onLoginFinished={this.onLoginFinished}
                    onLogoutFinished={() => console.log("logout.")} /> */}
{/* 
                <TouchableOpacity onPress={this.handleFacebookLogin} >
                    <View style={styles.socialButton}>
                        <Image source={Images.facebook} style={styles.socialLogo} />
                        <Text style={styles.text}>Facebook</Text>
                    </View>
                </TouchableOpacity> */}
            </>
        );
    }
}

const mapStateToProps = (state) => ({ socialLogin: state.socialLogin });

const action = { socialLogin, };

export default connect(mapStateToProps, action)(FacebookSigninButton);