import { connect } from 'react-redux';

import React, { Component } from 'react';
import { Text, View, TouchableOpacity, ScrollView, } from 'react-native';
import FloatingLabel from "react-native-floating-labels"

import styles from "./styles";
// import CustomTextInput from '../../components/CustomTextInput';
import { request as userResetPassword } from '../../redux/actions/ResetPassword';
// import { stackNavigator } from '../../redux/actions/StackNavigator';


class ResetPassword extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            confirmPassword: '',
            code: '',
            btnDisabled: false,
            formErrors: {
                passwordError: false,
                confirmPasswordError: false,
            }
        }
    }

    onChangeEmail = (value) => this.setState({ email: value });
    onChangePassword = (value) => this.setState({ password: value });
    onChangeConfirmPassword = (value) => this.setState({ confirmPassword: value });

    componentDidMount() {
        // console.log("VerifyResetCode Render ", this.props.navigation.state.params.email)
        this.setState({
            email: this.props.navigation.state.params.email,
            code: this.props.navigation.state.params.code,
            // email: 'fahad@mailinator.com',
            // code: 6645,
        })
    }

    UNSAFE_componentWillReceiveProps(nextProps) {
        console.log("ResetPassword nextProps ==>> ", nextProps)

        if (nextProps.resetPassword) {
            if (
                !nextProps.resetPassword.failure &&
                !nextProps.resetPassword.isFetching &&
                nextProps.resetPassword.data
                // this.state.newView === "Login"
            ) {
                this.setState({ isloading: false }, () => {
                    setTimeout(() => {
                        Alert.alert(
                            "Successfully",
                            "Successfully Password Reset",
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
                    nextProps.resetPassword.data,
                    " nextProps.resetPassword.data nextProps.resetPassword.data"
                );
                this.props.navigation.navigate('Login')
                // this.props.stackNavigator("ResetPassword", 'Login')
            } else if (nextProps.resetPassword.failure && !nextProps.resetPassword.isFetching) {
                this.setState({ isloading: false });
            }
        }
    }

    checkValidation = () => {
        const { password, confirmPassword, } = this.state
        if (password.length < 6) {
            this.setState({
                formErrors: {
                    passwordError: true,
                    confirmPasswordError: false,
                }
            })
            setTimeout(() => {
                this.setState({
                    formErrors: {
                        passwordError: false,
                        confirmPasswordError: false,
                    }
                })
            }, 3000)
        } else if (confirmPassword !== password) {
            this.setState({
                formErrors: {
                    passwordError: false,
                    confirmPasswordError: true,
                }
            })
            setTimeout(() => {
                this.setState({
                    formErrors: {
                        passwordError: false,
                        confirmPasswordError: false,
                    }
                })
            }, 3000)
        } else {
            this.setState({ isLoading: true })
            this.handleResetPassword();
        }
    }

    handleResetPassword = () => {
        const { email, code, password, confirmPassword } = this.state;
        const payload = {
            email,
            verification_code: code,
            password,
            password_confirmation: confirmPassword
        }
        this.props.userResetPassword(payload)
    }

    render() {
        const { btnDisabled, formErrors } = this.state
        return (
            <ScrollView style={styles.container}>
                <View style={{ paddingBottom: 20 }}>
                    <View style={styles.titleView}>
                        <Text style={[styles.text, { fontSize: 30, fontWeight: "700" }]}>Reset Password</Text>
                    </View>

                    <Text style={[styles.text, { fontSize: 16, color: "#ABB4BD", marginBottom: 24, lineHeight: 25 }]}>
                        Please enter your new password and confirm the password.
                    </Text>

                    <FloatingLabel
                        labelStyle={styles.labelInput}
                        inputStyle={styles.input}
                        style={styles.formInput}
                        onBlur={this.onBlur}
                        password
                        onChangeText={this.onChangePassword}
                    >Password</FloatingLabel>
                    {formErrors.passwordError ? <Text style={styles.errorMessage}>Password must be atleast 6 characters or long</Text> : null}

                    <FloatingLabel
                        labelStyle={styles.labelInput}
                        inputStyle={styles.input}
                        style={styles.formInput}
                        onBlur={this.onBlur}
                        password
                        onChangeText={this.onChangeConfirmPassword}
                    >Confirm Password</FloatingLabel>
                    {formErrors.confirmPasswordError ? <Text style={styles.errorMessage}>Confirm password not match with password</Text> : null}


                    <TouchableOpacity
                        style={btnDisabled ? styles.submitContainerDisabled : styles.submitContainer}
                        onPress={() => this.checkValidation()}
                    // onPress={() => this.props.navigation.navigate('VerifyResetCode')}
                    >
                        <Text style={[styles.text, { color: "#FFF", fontWeight: "600", fontSize: 16 }]}>Recover Password</Text>
                    </TouchableOpacity>

                </View>
            </ScrollView>
        );
    }
}

const mapStateToProps = (state) => ({
    resetPassword: state.resetPassword,
    // stackNavigator: state.stackNavigator
});

const action = {
    userResetPassword,
    // stackNavigator
};

export default connect(mapStateToProps, action)(ResetPassword);