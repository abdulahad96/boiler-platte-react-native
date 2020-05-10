import React, { Component } from 'react';
import { StyleSheet, SafeAreaView, Text, View, Image, Animated, TouchableOpacity, Alert, ScrollView, ImageBackground } from 'react-native';
import { DrawerNavigatorItems, DrawerItems } from 'react-navigation-drawer';
import { Images } from '../../theme';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import styles from "./styles";



export default class Sidebar extends Component {

    render() {
        return (
            <ScrollView>
                <ImageBackground
                    source={Images.coverImage}
                    style={{ width: undefined, padding: 16, paddingTop: 48 }}
                >
                    <Image source={Images.profileImage} style={styles.profile} />
                    <Text style={styles.name}>Andrew Barker</Text>

                    <View style={{ flexDirection: "row" }}>
                        <Text style={styles.followers}>734 Followers</Text>
                        <FontAwesome name='user' size={16} color="rgba(255, 255, 255, 0.8)" />
                    </View>
                </ImageBackground>

                <View style={styles.container} forceInset={{ top: "always", horizontal: "never" }}>
                    {/* <DrawerNavigatorItems {...this.props} /> */}
                    <DrawerItems {...this.props} />
                    <TouchableOpacity
                        style={styles.logOutBtn}
                        onPress={() => this.props.navigation.navigate('Login')}
                    >
                        <FontAwesome name='sign-out' size={20} color="rgba(0, 0, 0, 0.4)" style={{ marginHorizontal: 20 }} />
                        <Text style={styles.logOutText}>Log Out</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        );
    }
}