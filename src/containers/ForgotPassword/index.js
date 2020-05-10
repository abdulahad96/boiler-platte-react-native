import { connect } from 'react-redux';

import React, { Component } from 'react';
import { Text, View, TouchableOpacity, ScrollView, Alert } from 'react-native';
import FloatingLabel from "react-native-floating-labels"

import styles from "./styles";
// import CustomTextInput from '../../components/CustomTextInput';
import { request as userForgotPassword } from '../../redux/actions/ForgotPassword';


class ForgotPassword extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            btnDisabled: false,
            formErrors: {
                emailError: false,
            }
        }
    }

    onChangeEmail = (value) => this.setState({ email: value });

    UNSAFE_componentWillReceiveProps(nextProps) {
        const { email } = this.state;
        console.log("nextProps ==>> ", nextProps)
        if (nextProps.forgotPassword) {
            if (
                !nextProps.forgotPassword.failure &&
                !nextProps.forgotPassword.isFetching &&
                nextProps.forgotPassword.data
            ) {
                this.setState({ isloading: false }, () => {
                    setTimeout(() => {
                        Alert.alert(
                            "Successfully",
                            "Successfully Code Sent.",
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
                    nextProps.forgotPassword.data,
                    " nextProps.forgotPassword.data nextProps.forgotPassword.data"
                );
                this.props.navigation.navigate('VerifyResetCode', { email })
            } else if (nextProps.forgotPassword.failure && !nextProps.forgotPassword.isFetching) {
                this.setState({ isloading: false });
            }
        }
    }

    checkValidation = () => {
        const { email, } = this.state
        const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

        if (!email.match(emailRegex)) {
            this.setState({
                formErrors: {
                    emailError: true,
                }
            })
            setTimeout(() => {
                this.setState({
                    formErrors: {
                        emailError: false,
                    }
                })
            }, 3000)
        } else {
            this.setState({ isLoading: true })
            this.handleForgotPassword();
        }
    }

    handleForgotPassword = () => {
        const { email } = this.state;
        const payload = { email }
        // console.log("payload ===>>   ", payload)
        this.props.userForgotPassword(payload)
    }

    render() {
        const { email, btnDisabled, formErrors } = this.state
        // console.log(this.state)
        return (
            <ScrollView style={styles.container}>
                <View style={{ paddingBottom: 20 }}>
                    <View style={styles.titleView}>
                        <Text style={[styles.text, { fontSize: 30, fontWeight: "700" }]}>Forgot Password</Text>
                    </View>

                    <Text style={[styles.text, { fontSize: 16, color: "#ABB4BD", marginBottom: 24, lineHeight: 25 }]}>
                        Please enter your register email to reset your password.
                    </Text>

                    <FloatingLabel
                        labelStyle={styles.labelInput}
                        inputStyle={styles.input}
                        style={styles.formInput}
                        onBlur={this.onBlur}
                        onChangeText={this.onChangeEmail}
                        value={email}
                    >Email</FloatingLabel>
                    {formErrors.emailError ? <Text style={styles.errorMessage}>Enter a vaild email address</Text> : null}


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

const mapStateToProps = (state) => ({ forgotPassword: state.forgotPassword });

const action = { userForgotPassword, };

export default connect(mapStateToProps, action)(ForgotPassword);