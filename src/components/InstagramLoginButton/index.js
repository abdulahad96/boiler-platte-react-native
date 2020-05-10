import { connect } from 'react-redux';
import React, { Component } from 'react';

import { Alert, Text, View, Image, TouchableOpacity, Platform } from 'react-native';
import styles from "./style";
import { Images } from '../../theme';
import { request as socialLogin } from '../../redux/actions/SocialLogin';
import InstagramLogin from 'react-native-instagram-login'
// import store from 'react-native-simple-store'


class InstagramLoginButton extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    handleFacebookLogin(data) {
        console.log("INSTAGRAM SIGN SUCCESSFULLY ", data)
    }

    render() {
        return (
            <>
                {/* <View>
                    <TouchableOpacity onPress={() => this.instagramLogin.show()}>
                        <Text style={styles.text}>Instagram</Text>
                    </TouchableOpacity>
                    <InstagramLogin
                        ref={ref => (this.instagramLogin = ref)}
                        appId='your-app-id'
                        appSecret='your-app-secret'
                        redirectUrl='your-redirect-Url'
                        scopes={['user_profile', 'user_media']}
                        onLoginSuccess={this.setIgToken}
                        onLoginFailure={(data) => console.log(data)}
                    />
                </View> */}

                <TouchableOpacity onPress={() => this.instagramLogin.show()} >
                    <View style={styles.socialButton}>
                        <Image source={Images.instagram} style={styles.socialLogo} />
                        <Text style={styles.text}>Instagram</Text>
                    </View>
                </TouchableOpacity>
                <InstagramLogin
                    ref={ref => (this.instagramLogin = ref)}
                    appId='463720441237639'
                    appSecret='34dfff620db9463aec8183bd3cafa6a1'
                    redirectUrl='your-redirect-Url'
                    scopes={['user_profile', 'user_media']}
                    onLoginSuccess={this.handleFacebookLogin}
                    onLoginFailure={(data) => console.log(data)}
                />
            </>
        );
    }
}

const mapStateToProps = (state) => ({ socialLogin: state.socialLogin });

const action = { socialLogin, };

export default connect(mapStateToProps, action)(InstagramLoginButton);