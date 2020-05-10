import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import MapboxGL from "@react-native-mapbox-gl/maps";
import Geolocation from '@react-native-community/geolocation';

MapboxGL.setAccessToken("pk.eyJ1IjoiZmFoYWQtYWhtZWQiLCJhIjoiY2s1bnBsN3cwMDZocTNtczVsbmQyMmpkZiJ9.iakFPfswidyCQJmdLFsWYA");

const styles = StyleSheet.create({
    page: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#F5FCFF"
    },
    container: {
        flex: 1,
        // height: 300,
        // width: 300,
        backgroundColor: "tomato"
    },
    map: {
        flex: 1
    }
});

export default class App extends Component {

    // pointInView = this._map.getPointInView([24.8724076, 67.0559635]);

    // getLocationHandler = () => {
    //     console.log(Geolocation, "Geolocationnnnnnnnnnnnnnnnnnnnnnnnnn")
    //     Geolocation.getCurrentPosition(pos => {
    //         console.log(pos, "possssssssssssssssssssssssssssss")
    //         const coordsEvent = {
    //             nativeEvent: {
    //                 coordinate: {
    //                     latitude: pos.coords.latitude,
    //                     longitude: pos.coords.longitude,
    //                 }
    //             }
    //         };
    //         this.pickLocationHandler(coordsEvent);
    //     }, err => {
    //         console.log(err, "errrrrrrrrrrrrrrrrrrrrr")
    //         Alert.alert('Error', err.message)
    //     })
    // }
    
    componentDidMount() {
        MapboxGL.setTelemetryEnabled(false);
        // this.getLocationHandler()
    }
    
    render() {
        // console.log(pointInView, "pointInViewwwwwwwwwwwwwwwww")
        return (
            //   <View style={styles.page}>
            <View style={styles.container}>
                <MapboxGL.MapView
                    style={styles.map}
                >
                    <MapboxGL.Camera centerCoordinate={[24.8724076, 67.0559635]} zoomLevel={5} />
                </MapboxGL.MapView>
            </View>
            //   </View>
        );
    }
}