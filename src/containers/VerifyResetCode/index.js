import { connect } from 'react-redux';

import React, { Component } from 'react';
import { Text, View, TouchableOpacity, ScrollView, TextInput, Alert } from 'react-native';
import FloatingLabel from "react-native-floating-labels"

import styles from "./styles";
import CustomTextInput from '../../components/CustomTextInput';
import { request as userVerifyResetCode } from '../../redux/actions/VerifyResetCode';

class VerifyResetCode extends Component {
    constructor(props) {
        super(props);
        this.state = {
            code: '',
            email: '',
            btnDisabled: false,
            formErrors: {
                codeError: false,
            }
        }
    }

    onChangeCode = (value) => this.setState({ code: value });

    componentDidMount() {
        this.setState({
            email: this.props.navigation.state.params.email
        })
    }

    UNSAFE_componentWillReceiveProps(nextProps) {
        const { email, code } = this.state
        // console.log("nextProps ==>> ", nextProps)
        if (nextProps.verifyResetCode) {
            if (
                !nextProps.verifyResetCode.failure &&
                !nextProps.verifyResetCode.isFetching &&
                nextProps.verifyResetCode.data
                // this.state.newView === "abc"
            ) {
                this.setState({ isloading: false }, () => {
                    setTimeout(() => {
                        Alert.alert(
                            "Successfully",
                            "Successfully Verified",
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
                    nextProps.verifyResetCode.data,
                    " nextProps.verifyResetCode.data nextProps.verifyResetCode.data"
                );
                // this.props.stackNavigator("abc", 'ResetPassword')
                this.props.navigation.navigate('ResetPassword', { email, code })
            } else if (nextProps.verifyResetCode.failure && !nextProps.verifyResetCode.isFetching) {
                this.setState({ isloading: false });
            }
        }
    }

    checkValidation = () => {
        const { code } = this.state
        if (code == "" || code == " " || code.length < 3) {
            this.setState({
                formErrors: {
                    codeError: true,
                }
            })
            setTimeout(() => {
                this.setState({
                    formErrors: {
                        codeError: false,
                    }
                })
            }, 3000)
        } else {
            this.handleVerifyResetCode();
        }
    }

    handleVerifyResetCode = () => {
        const { code, } = this.state;
        const payload = { verification_code: Number(code) }

        console.log(payload, "PAYLOAD")

        this.props.userVerifyResetCode(payload)
    }

    render() {
        const { code, btnDisabled, formErrors, email } = this.state
        return (
            <ScrollView style={styles.container}>
                <View style={{ paddingBottom: 20 }}>
                    <View style={styles.titleView}>
                        <Text style={[styles.text, { fontSize: 30, fontWeight: "700" }]}>
                            Enter 4 digit code sent to you at{' '}<Text style={[styles.text, { fontSize: 30, fontWeight: "700", color: "#FF1654", }]} >Email</Text>
                        </Text>
                    </View>

                    {/* <FloatingLabel
                        keyboardType="numeric"
                        maxLength={4}
                        labelStyle={styles.labelInput}
                        inputStyle={styles.input}
                        style={styles.formInput}
                        onBlur={this.onBlur}
                        onChangeText={this.onChangeCode}
                        password
                    >Code</FloatingLabel> */}

                    <CustomTextInput
                        style={{ marginTop: 20, marginBottom: 10 }}
                        placeholderText="Enter your code."
                        isSecure={true}
                        autoCompleteType='off'
                        handleInput={this.onChangeCode}
                        inputValue={code}
                        maxLength={4}
                        keyboardType="numeric"
                    />
                    {formErrors.codeError ? <Text style={styles.errorMessage}>Enter a vaild varification code</Text> : null}


                    <TouchableOpacity
                        style={btnDisabled ? styles.submitContainerDisabled : styles.submitContainer}
                        onPress={() => this.checkValidation()}
                    // onPress={() => this.props.navigation.navigate('ResetPassword')}
                    >
                        <Text style={[styles.text, { color: "#FFF", fontWeight: "600", fontSize: 16 }]}>Verify</Text>
                    </TouchableOpacity>

                </View>
            </ScrollView>
        );
    }
}

const mapStateToProps = (state) => ({ verifyResetCode: state.verifyResetCode });

const action = { userVerifyResetCode };

export default connect(mapStateToProps, action)(VerifyResetCode);