import { connect } from 'react-redux';
import React, { Component } from 'react';
import { Text, View, Image, TouchableOpacity, ScrollView, Alert, Platform, Linking } from 'react-native';
import FloatingLabel from "react-native-floating-labels"
import { request as userLogin, success } from '../../redux/actions/Login';
import styles from "./styles";
import { Images } from '../../theme';
import SpinnerLoader from '../../components/SpinnerLoader';
// import GoogleSigninBtn from '../../components/GoogleSigninButton';
// import FacebookSigninButton from '../../components/FacebookSigninButton';
// import InstagramLoginButton from '../../components/InstagramLoginButton';
// import { NavigationEvents, } from 'react-navigation';
// import firebase from '@react-native-firebase/app';
// import { create_Table, insert_Data_In_Table, get_Single_Data_From_Table, update_Data_In_Table, delete_Single_Data_From_Table } from '../../config/simpleDbCalls'

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            isloading: false,
            btnDisabled: false,
            formErrors: {
                emailError: false,
                passwordError: false,
            }
        }
        // this.handleOpenURL = this.handleOpenURL.bind(this);
    }

    componentDidMount() { // B
        // this.createTable();
        // this.getDynamicLink()
    }

    componentWillUnmount() { // C
        // Linking.removeEventListener('url', this.handleOpenURL);
    }

    UNSAFE_componentWillReceiveProps(nextProps) {
        if (nextProps.login) {
            if (
                !nextProps.login.failure &&
                !nextProps.login.isFetching &&
                nextProps.login.data
            ) {
                this.setState({ isloading: false }, () => {
                    setTimeout(() => {
                        Alert.alert(
                            "Successfully",
                            "Successfully Logged In",
                            [
                                {
                                    text: "ok",
                                    onPress: () => {
                                        console.log("ok");
                                    }
                                }
                            ],
                            { cancelable: false }
                        );
                    }, 500);
                });
                console.log(
                    nextProps.login.data,
                    " nextProps.login.data nextProps.login.data"
                );
                this.props.navigation.navigate('Feeds')
            } else if (nextProps.login.failure && !nextProps.login.isFetching) {
                this.setState({ isloading: false });
            }
        }
    }


    navigate = (url) => { // E
        console.log(url, 'navigateeeeeeeeeeeeeee')
  
    }

    checkValidation = () => {
        const { email, password, } = this.state
        const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

        if (!email.match(emailRegex)) {
            this.setState({
                formErrors: {
                    emailError: true,
                    passwordError: false,
                }
            })
            setTimeout(() => {
                this.setState({
                    formErrors: {
                        emailError: false,
                        passwordError: false,
                    }
                })
            }, 3000)
        } else if (password.length < 6) {
            this.setState({
                formErrors: {
                    emailError: false,
                    passwordError: true,
                }
            })
            setTimeout(() => {
                this.setState({
                    formErrors: {
                        emailError: false,
                        passwordError: false,
                    }
                })
            }, 3000)
        } else {
            this.handleLogin();
        }
    }

    handleLogin = () => {
        this.setState({ isLoading: true });
        const { email, password, } = this.state;
        const payload = {
            email,
            password,
            device_type: Platform.OS,
            device_token: "string"
        }
        // this.props.userLogin(payload)
    }

    onChangeEmail = (value) => this.setState({ email: value })
    onChangePassword = (value) => this.setState({ password: value });

    _renderOverlaySpinner = () => {
        const { isloading } = this.state;
        return <SpinnerLoader isloading={isloading} />;
    };

    render() {
        const { btnDisabled, formErrors } = this.state
        return (
            <ScrollView style={styles.container}>
                <View>
                    <View style={styles.logoView}>
                        <Image source={Images.logo} />
                        {/* <Text style={[styles.text, { marginTop: 5, fontSize: 25, fontWeight: "700" }]}>DEMO</Text> */}
                    </View>

                    <FloatingLabel
                        labelStyle={styles.labelInput}
                        inputStyle={styles.input}
                        style={styles.formInput}
                        onBlur={this.onBlur}
                        autoCorrect={false}
                        onChangeText={this.onChangeEmail}
                    >Email ID</FloatingLabel>
                    {formErrors.emailError ? <Text style={styles.errorMessage}>Enter a vaild email address</Text> : null}

                    <FloatingLabel
                        labelStyle={styles.labelInput}
                        inputStyle={styles.input}
                        style={styles.formInput}
                        onBlur={this.onBlur}
                        password
                        onChangeText={this.onChangePassword}
                    >Password</FloatingLabel>
                    {formErrors.passwordError ? <Text style={styles.errorMessage}>Password has must be atleast 6 characters</Text> : null}

                    <TouchableOpacity onPress={() => this.props.navigation.navigate('ForgotPassword')}>
                        <Text style={[styles.text, styles.link, { textAlign: "right" }]}>Forgot Password?</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={btnDisabled ? styles.submitContainerDisabled : styles.submitContainer}
                        // onPress={() => this.checkValidation()}
                        onPress={() => this.props.navigation.navigate('Feeds')}
                    >
                        <Text style={[styles.text, { color: "#FFF", fontWeight: "600", fontSize: 16 }]}>Login</Text>
                    </TouchableOpacity>

                    <Text style={[styles.text, { color: "#ABB4BD", fontSize: 18, textAlign: "center", marginVertical: 20 }]}>or</Text>

                    <View style={styles.loginWithView}>

                        {/* <FacebookSigninButton />
                        <GoogleSigninBtn /> */}

                        {/* <TouchableOpacity >
                            <View style={styles.socialButton}>
                                <Image source={Images.facebook} style={styles.socialLogo} />
                                <Text style={styles.text}>Facebook</Text>
                            </View>
                        </TouchableOpacity> */}

                        {/* <TouchableOpacity>
                            <View style={styles.socialButton}>
                                <Image source={Images.google} style={styles.socialLogo} />
                                <Text style={styles.text}>Google</Text>
                            </View>
                        </TouchableOpacity> */}

                    </View>
                    {/* <View style={[styles.loginWithView, { marginTop: 20 }]}>
                        <InstagramLoginButton />
                    </View> */}

                    <View style={{ flexDirection: "row", marginVertical: 24, justifyContent: "center" }}>
                        <Text style={[styles.text, { fontSize: 14, color: "#ABB4BD", fontWeight: "500" }]}>
                            Don't have an account?{" "}
                        </Text>
                        <TouchableOpacity onPress={() => this.props.navigation.navigate('Register')}>
                            <Text style={[styles.text, styles.link]}> Register Now </Text>
                        </TouchableOpacity>
                    </View>

                    {this._renderOverlaySpinner()}
                </View>
                {/* <NavigationEvents
                    onWillFocus={payload => console.log('will focus', payload)}
                    onDidFocus={payload => console.log('did focus', payload)}
                    onWillBlur={payload => console.log('will blur', payload)}
                    onDidBlur={payload => console.log('did blur', payload)}
                /> */}
            </ScrollView >
        );
    }
}

const mapStateToProps = (state) => ({ login: state.login });

const action = { userLogin, };

export default connect(mapStateToProps, action)(Login);