import { connect } from "react-redux";
import React, { Component } from 'react';
import { Text, View, TouchableOpacity, ScrollView, Platform, Alert } from 'react-native';
import FloatingLabel from "react-native-floating-labels"

import styles from "./styles";
// import CustomTextInput from '../../components/CustomTextInput';
import { request as userRegister } from '../../redux/actions/Register';
import SpinnerLoader from '../../components/SpinnerLoader';



class Register extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            password: '',
            confirmPassword: '',
            companyName: '',
            countryName: '',
            btnDisabled: false,
            isLoading: false,

            formErrors: {
                nameError: false,
                emailError: false,
                passwordError: false,
                confirmPasswordError: false,
                companyNameError: false,
                countryNameError: false,
            }
        }
    }

    onChangeName = (value) => this.setState({ name: value });
    onChangeEmail = (value) => this.setState({ email: value });
    onChangePassword = (value) => this.setState({ password: value });
    onChangeConfirmPassword = (value) => this.setState({ confirmPassword: value });
    onChangeCompanyName = (value) => this.setState({ companyName: value });
    onChangeCountryName = (value) => this.setState({ countryName: value });

    UNSAFE_componentWillReceiveProps(nextProps) {
        if (nextProps.register) {
            if (
                !nextProps.register.failure &&
                !nextProps.register.isFetching &&
                nextProps.register.data
            ) {
                this.setState({ isloading: false }, () => {
                    setTimeout(() => {
                        Alert.alert(
                            "Successfully",
                            "Successfully Registered",
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
                    nextProps.register.data,
                    " nextProps.register.data nextProps.register.data"
                );
                this.props.navigation.navigate('Login')
            } else if (nextProps.register.failure && !nextProps.register.isFetching) {
                this.setState({ isloading: false });
                console.log("Errrrrrrrrrrr")
            }
        }
    }

    _renderOverlaySpinner = () => {
        const { isloading } = this.state;
        return <SpinnerLoader isloading={isloading} />;
    };

    checkValidation = () => {
        const { name, email, password, confirmPassword, companyName, countryName } = this.state
        const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

        if (name == "" || name == " " || name.length < 3) {
            this.setState({
                formErrors: {
                    nameError: true,
                    emailError: false,
                    passwordError: false,
                    confirmPasswordError: false,
                    companyNameError: false,
                    countryNameError: false,
                }
            })
            setTimeout(() => {
                this.setState({
                    formErrors: {
                        nameError: false,
                        emailError: false,
                        passwordError: false,
                        confirmPasswordError: false,
                        companyNameError: false,
                        countryNameError: false,
                    }
                })
            }, 3000)
        } else if (!email.match(emailRegex)) {
            this.setState({
                formErrors: {
                    nameError: false,
                    emailError: true,
                    passwordError: false,
                    confirmPasswordError: false,
                    companyNameError: false,
                    countryNameError: false,
                }
            })
            setTimeout(() => {
                this.setState({
                    formErrors: {
                        nameError: false,
                        emailError: false,
                        passwordError: false,
                        confirmPasswordError: false,
                        companyNameError: false,
                        countryNameError: false,
                    }
                })
            }, 3000)
        } else if (password.length < 6) {
            this.setState({
                formErrors: {
                    nameError: false,
                    emailError: false,
                    passwordError: true,
                    confirmPasswordError: false,
                    companyNameError: false,
                    countryNameError: false,
                }
            })
            setTimeout(() => {
                this.setState({
                    formErrors: {
                        nameError: false,
                        emailError: false,
                        passwordError: false,
                        confirmPasswordError: false,
                        companyNameError: false,
                        countryNameError: false,
                    }
                })
            }, 3000)
        } else if (confirmPassword !== password) {
            this.setState({
                formErrors: {
                    nameError: false,
                    emailError: false,
                    passwordError: false,
                    confirmPasswordError: true,
                    companyNameError: false,
                    countryNameError: false,
                }
            })
            setTimeout(() => {
                this.setState({
                    formErrors: {
                        nameError: false,
                        emailError: false,
                        passwordError: false,
                        confirmPasswordError: false,
                        companyNameError: false,
                        countryNameError: false,
                    }
                })
            }, 3000)
        } else if (companyName.length < 3) {
            this.setState({
                formErrors: {
                    nameError: false,
                    emailError: false,
                    passwordError: false,
                    confirmPasswordError: false,
                    companyNameError: true,
                    countryNameError: false,
                }
            })
            setTimeout(() => {
                this.setState({
                    formErrors: {
                        nameError: false,
                        emailError: false,
                        passwordError: false,
                        confirmPasswordError: false,
                        companyNameError: false,
                        countryNameError: false,
                    }
                })
            }, 3000)
        } else if (countryName.length < 3) {
            this.setState({
                formErrors: {
                    nameError: false,
                    emailError: false,
                    passwordError: false,
                    confirmPasswordError: false,
                    companyNameError: false,
                    countryNameError: true,
                }
            })
            setTimeout(() => {
                this.setState({
                    formErrors: {
                        nameError: false,
                        emailError: false,
                        passwordError: false,
                        confirmPasswordError: false,
                        companyNameError: false,
                        countryNameError: false,
                    }
                })
            }, 3000)
        } else {
            this.setState({isLoading: true})
            this.handleRegister();
        }
    }

    handleRegister = () => {
        const { name, email, password, confirmPassword, companyName, countryName } = this.state;
        const payload = {
            name,
            email,
            password,
            password_confirmation: confirmPassword,
            // companyName,
            address: countryName,
            phone: "string",
            device_token: "string",
            device_type: Platform.OS,
        }
        // console.log("payload ==>> ", payload)
        this.props.userRegister(payload)
    }

    render() {
        const { name, email, password, confirmPassword, companyName, countryName, btnDisabled, formErrors, isLoading } = this.state
        return (
            <ScrollView style={styles.container}>
                <View>
                    <View style={styles.titleView}>
                        <Text style={[styles.text, { fontSize: 30, fontWeight: "700" }]}>Register to Demo</Text>
                    </View>

                    <FloatingLabel
                        labelStyle={styles.labelInput}
                        inputStyle={styles.input}
                        style={styles.formInput}
                        onBlur={this.onBlur}
                        onChangeText={this.onChangeName}
                    >Full Name</FloatingLabel>
                    {formErrors.nameError ? <Text style={styles.errorMessage}>Enter a vaild full name</Text> : null}

                    <FloatingLabel
                        labelStyle={styles.labelInput}
                        inputStyle={styles.input}
                        style={styles.formInput}
                        onBlur={this.onBlur}
                        autoCorrect={false}
                        onChangeText={this.onChangeEmail}
                    >Email</FloatingLabel>
                    {formErrors.emailError ? <Text style={styles.errorMessage}>Enter a vaild email address</Text> : null}

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

                    <FloatingLabel
                        labelStyle={styles.labelInput}
                        inputStyle={styles.input}
                        style={styles.formInput}
                        onBlur={this.onBlur}
                        onChangeText={this.onChangeCompanyName}
                    >Company Name</FloatingLabel>
                    {formErrors.companyNameError ? <Text style={styles.errorMessage}>Enter a vaild company name</Text> : null}

                    <FloatingLabel
                        labelStyle={styles.labelInput}
                        inputStyle={styles.input}
                        style={styles.formInput}
                        onBlur={this.onBlur}
                        onChangeText={this.onChangeCountryName}
                    >Country Name</FloatingLabel>
                    {formErrors.countryNameError ? <Text style={styles.errorMessage}>Enter a vaild country name</Text> : null}

                    <TouchableOpacity
                        style={btnDisabled ? styles.submitContainerDisabled : styles.submitContainer}
                        onPress={() => this.checkValidation()}
                    >
                        <Text style={[styles.text, { color: "#FFF", fontWeight: "600", fontSize: 16 }]}>Register</Text>
                    </TouchableOpacity>

                    <Text style={[styles.text, { fontSize: 14, color: "#ABB4BD", textAlign: "center", marginVertical: 24, lineHeight: 25 }]}>
                        By registering you agree to <Text style={[styles.text, styles.link]}> Terms &amp; Conditions {"\n"}</Text>
                        and <Text style={[styles.text, styles.link]}> Privacy Policy </Text> of the Demo
                    </Text>

                    {this._renderOverlaySpinner()}

                </View>
            </ScrollView>
        );
    }
}

const mapStateToProps = state => ({ register: state.register });

const actions = { userRegister };

export default connect(mapStateToProps, actions)(Register);