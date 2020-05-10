import { connect } from 'react-redux';
import React, { Component } from 'react';
import { View, Text, Dimensions, TextInput, TouchableOpacity, ScrollView, Alert, Share, Linking, Platform } from 'react-native';
import MapView from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions';
import Geolocation from '@react-native-community/geolocation';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';
import ActionButton from 'react-native-action-button';
import axios from 'axios';
import dynamicLinks from '@react-native-firebase/dynamic-links';

import { SilverMap, AubergineMap, UberOriginalMap, UberMap, Uber2018Map } from './MapStyles'
import styles from "./styles";

import { Metrics, Images } from '../../theme';
import { secret_Key, place_Autocomplete_URL, place_Details_URL } from '../../config/WebServices'
// import { getDistance } from 'geolib';
import { NavigationEvents, } from 'react-navigation';

import { get_All_Data_From_Table } from '../../config/simpleDbCalls'

const myPlaces = [
    {
        // Zanaib
        latitude: 24.8555336,
        longitude: 67.0263052,
    },
    {
        // Nipa
        latitude: 24.917755,
        longitude: 67.0949881,
    },
    {
        // Landhi
        latitude: 24.8316029,
        longitude: 67.1708103,
    },
    {
        // 4K Chowrangi
        latitude: 25.0064679,
        longitude: 67.0622293,
    },
]

class AwesomePlaces extends Component {
    constructor(props) {
        super(props);
        this.state = {
            focusedLocation: {
                latitude: 24.8724076,
                longitude: 67.0559635,
                latitudeDelta: 0.00122,
                longitudeDelta: Dimensions.get('window').width / Dimensions.get('window').height * 0.0122,
            },
            currentLocation: {
                latitude: 24.8724076,
                longitude: 67.0559635,
                latitudeDelta: 0.00122,
                longitudeDelta: Dimensions.get('window').width / Dimensions.get('window').height * 0.0122,
            },
            locationChosen: false,
            customMapStyle: Uber2018Map,
            standardMap: true,
            silverMap: false,
            nightModeMap: false,
            autoLocationData: [],
            locationText: '',
            shortLink: '',
        }
    }

    componentDidMount() {
        this.getLocationHandler()
        // this.getLocationFromDb()
        // if (Platform.OS === 'android') {
        //     Linking.getInitialURL().then(url => {
        //         if (url) {
        //             console.log(url, "urllllllllllllllllllllllllllllll")
        //             const route = url.replace(/.*?:\/\//g, '');
        //             const para = route.split('/')[1];
        //             const routeName = para.split('?')[0];
        //             const latitude = parseFloat(para.split('?')[1].split('&')[0].split('=')[1])
        //             const longitude = parseFloat(para.split('?')[1].split('&')[1].split('=')[1])
        //             if (routeName === 'geo') {
        //                 const coordsEvent = {
        //                     nativeEvent: {
        //                         coordinate: {
        //                             latitude: latitude,
        //                             longitude: longitude,
        //                         }
        //                     }
        //                 };
        //                 // console.log(coordsEvent, "coordsEventcoordsEventcoordsEvent")
        //                 this.pickLocationHandler(coordsEvent)
        //             }
        //         }
        //         // this.navigate(url);
        //     });
        // } else {
        //     Linking.addEventListener('url', this.handleOpenURL);
        // }
    }

    getLocationFromDb = async () => {
        try {
            let result = await get_All_Data_From_Table()
            if (result.length > 0) {
                console.log(result, "resultttttttttttttttttttttttttttt")
                const coordsEvent = {
                    nativeEvent: {
                        coordinate: {
                            latitude: result[result.length - 1].user_lat,
                            longitude: result[result.length - 1].user_long,
                        }
                    }
                }
                this.pickLocationHandler(coordsEvent)
            }
        } catch (err) {
            console.log(err, 'errrrrrrrrrrrrrrrrrrrrrr')
        }
    }

    getDistanceAndTime = () => {
        const { currentLocation, focusedLocation } = this.state
        // let apiKey = 'gakuxByYEFeTnvwsASJ0acSgMovLmPm5';
        let originLat = currentLocation.latitude;
        let originLong = currentLocation.longitude;
        let destinationLat = focusedLocation.latitude;
        let destinationLong = focusedLocation.longitude;
        return new Promise((resolve, reject) => {
            const GoogleAPI_Distance_Time = `https://maps.googleapis.com/maps/api/distancematrix/json?units=imperial&origins=${originLat},${originLong}&destinations=${destinationLat},${destinationLong}&key=${secret_Key}`
            // const mapquestapi = `https://www.mapquestapi.com/directions/v2/route?key=${apiKey}&from=${userLat},${userLang}&to=${machLat},${mecLang}&outFormat=json&ambiguities=ignore&routeType=bicycle&doReverseGeocode=false&enhancedNarrative=false&avoidTimedConditions=false`
            // fetch(`https://www.mapquestapi.com/directions/v2/route?key=${apiKey}&from=${userLat},${userLang}&to=${machLat},${mecLang}&outFormat=json&ambiguities=ignore&routeType=bicycle&doReverseGeocode=false&enhancedNarrative=false&avoidTimedConditions=false`)
            //     .then((response) => {
            //         return response.json();
            //     }).then((res) => {
            //         console.log(res, "Test Responseeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee")
            //     })
            fetch(GoogleAPI_Distance_Time)
                .then((response) => {
                    // console.log(response, "Test Responseeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee")
                    return response.json();
                })
                .then((res) => {
                    console.log(res, "Test Responseeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee")
                })
        })
    }

    pickLocationHandler = (event) => {
        const coords = event.nativeEvent.coordinate;
        this.map.animateToRegion({
            ...this.state.focusedLocation,
            latitude: coords.latitude,
            longitude: coords.longitude,
        });
        this.setState(pervState => {
            return {
                focusedLocation: {
                    ...pervState.focusedLocation,
                    latitude: coords.latitude,
                    longitude: coords.longitude,
                },
                locationChosen: true,
                autoLocationData: [],
            }
        });
        this.getDistanceAndTime()
    }

    getLocationHandler = () => {
        Geolocation.getCurrentPosition(pos => {
            console.log(pos, "possssssssssssssssssssssssssssss")
            const coordsEvent = {
                nativeEvent: {
                    coordinate: {
                        latitude: pos.coords.latitude,
                        longitude: pos.coords.longitude,
                    }
                }
            };
            this.map.animateToRegion({
                ...this.state.currentLocation,
                latitude: pos.coords.latitude,
                longitude: pos.coords.longitude,
            });
            this.setState(pervState => {
                return {
                    currentLocation: {
                        ...pervState.currentLocation,
                        latitude: pos.coords.latitude,
                        longitude: pos.coords.longitude,
                    },
                    // locationChosen: false,
                    autoLocationData: [],
                }
            });
            // this.pickLocationHandler(coordsEvent);
        }, err => {
            console.log(err, "errrrrrrrrrrrrrrrrrrrrr")
            Alert.alert('Error', err.message)
        })
    }

    changeMapStyle = (value) => {
        if (value === "standard") {
            this.setState({ standardMap: true, silverMap: false, nightModeMap: false, customMapStyle: Uber2018Map })
        } else if (value === "silver") {
            this.setState({ standardMap: false, silverMap: true, nightModeMap: false, customMapStyle: SilverMap })
        } else if (value === "night mode") {
            this.setState({ standardMap: false, silverMap: false, nightModeMap: true, customMapStyle: AubergineMap })
        }

    }

    onChangeLocation = (text) => {
        if (text.length > 1) {
            axios.get(`${place_Autocomplete_URL}input=${text}&key=${secret_Key}`)
                .then(response => {
                    this.setState({ autoLocationData: response.data.predictions })
                })
                .catch(error => console.log("Failjax: ", error));
        } else {
            this.setState({ autoLocationData: [] })
        }
        this.setState({ locationText: text });
    };

    locationToCoordinate = (data) => {
        axios.get(`${place_Details_URL}key=${secret_Key}&placeid=${data.place_id}&language=en`)
            .then((res) => {
                console.log(res, "ressssssssssssssssssssssssssssssss")
                const coordsEvent = {
                    nativeEvent: {
                        coordinate: {
                            latitude: res.data.result.geometry.location.lat,
                            longitude: res.data.result.geometry.location.lng,
                        }
                    }
                };
                this.pickLocationHandler(coordsEvent);
                // this.props.getpicklatLng(res.data.result.geometry.location.lat, res.data.result.geometry.location.lat)
            }).catch((err) => { console.log(err) })
    }

    handleShareLocation = async () => {
        const { currentLocation } = this.state;
        const lat = currentLocation.latitude;
        const long = currentLocation.longitude;

        // Create Map Snapshot
        await this.map.takeSnapshot({
            width: 600,      // optional, when omitted the view-width is used
            height: 400,     // optional, when omitted the view-height is used
            region: { currentLocation },    // iOS only, optional region to render
            format: 'png',   // image formats: 'png', 'jpg' (default: 'png')
            quality: 0.8,    // image quality: 0..1 (only relevant for jpg, default: 1)
            result: 'file'   // result types: 'file', 'base64' (default: 'file')
        }).then(async (uri) => {
            console.log(uri, 'uriiiiiiiiiiiiiiiiiiiii')
            // Create Short Dynamic Link
            const link = await dynamicLinks().buildShortLink({
                link: `https://timelogger.io/?latlong=${lat},${long}&userId=${123456}`,
                domainUriPrefix: 'https://rnboilerplate.page.link/',
                android: {
                    packageName: 'com.rnboilerplate',
                    setPackageName: 'com.rnboilerplate',
                    minimumVersion: '18',
                    fallbackUrl: 'https://play.google.com/store/apps/details?id=com.time_logger',
                },
                // analytics: {
                //     campaign: 'banner',
                //     content: 'Click Me',
                //     medium: 'cpc',
                //     source: Platform.OS
                // },
                social: {
                    title: 'React Native Boilerplate',
                    descriptionText: 'Open source react native application to help other people.',
                    imageUrl: "https://snazzy-maps-cdn.azureedge.net/assets/90982-uber-2017.png",
                },
            }, dynamicLinks.ShortLinkType)
            console.log(link, 'linkkkkkkkkkkkkkkkkkkkkkkk')
            this.setState({ shortLink: link }, () => this.onShare())
        })

    }

    onShare = async () => {
        const { shortLink } = this.state;
        try {
            const result = await Share.share({
                message:
                    `See my location on RN Boilerpate! ${shortLink}`,
            });
            console.log(result)
            console.log(Share.sharedAction)
            if (result.action === Share.sharedAction) {
                if (result.activityType) {
                    console.log(result, "activityType")
                    // shared with activity type of result.activityType
                } else {
                    // shared
                    alert("Shared Successfully")
                }
            } else if (result.action === Share.dismissedAction) {
                console.log(Share)
                // dismissed
            }
        } catch (error) {
            alert(error.message);
        }
    };

    renderDropdownList = (data) => {
        return (
            <View>
                {data.map((el, index) => {
                    return (
                        <TouchableOpacity
                            key={index}
                            style={{
                                //backgroundColor: "red",               
                                //   height: Metrics.ratio(40),            
                                marginVertical: Metrics.ratio(5),
                                borderBottomWidth: Metrics.ratio(1),
                                borderBottomColor: 'rgba(0, 0, 0, 0.1)',
                                flexDirection: 'row'
                            }}
                            onPress={() => this.setState({ locationText: el.description }, () => {
                                this.locationToCoordinate(el)
                            })}>
                            <Text
                                style={{
                                    fontSize: 16,
                                    marginVertical: Metrics.screenHeight * 0.01,
                                    marginLeft: Metrics.screenWidth * 0.02,
                                    // marginTop: Metrics.ratio(10),
                                    width: Metrics.screenWidth * 0.88,
                                    color: 'rgba(0, 0, 0, 0.4)',

                                }}>{el.description}</Text>
                        </TouchableOpacity>
                    );
                })}
            </View>
        )
    }

    renderDropdown = (data) => {
        let calculatedHeightFromRecords = data && data.length * Metrics.ratio(40);
        let maximumAllowedHeight = Metrics.ratio(40) * 3;
        return (
            <View style={{
                // width: Metrics.screenWidth * 0.9,
                height: calculatedHeightFromRecords < maximumAllowedHeight ? calculatedHeightFromRecords : maximumAllowedHeight,
                // marginLeft: Metrics.ratio(5),
                // marginLeft: Metrics.ratio(8),
                // marginTop: Metrics.ratio(-13),
                // marginBottom: Metrics.ratio(10),
                // borderBottomLeftRadius: Metrics.ratio(5),
                // borderBottomRightRadius: Metrics.ratio(5),
                // backgroundColor: "white",
                elevation: 4,
                // shadowColor: Colors.black,
                // shadowOffset: { width: 0, height: 1 },
                // shadowOpacity: 0.18, shadowRadius: 1.0,
                // backgroundColor: 'red'
            }}>
                <ScrollView showsVerticalScrollIndicator={false}>
                    {data && data && data.length > 0 && this.renderDropdownList(data)}
                </ScrollView>
            </View>
        )
    }

    rendersearchBar = () => {
        const { autoLocationData, locationText } = this.state
        return (
            <View style={styles.searchBarView}>
                <View style={{
                    flexDirection: 'row',
                    alignItems: "center",
                    justifyContent: 'space-between',
                    borderBottomWidth: (autoLocationData.length > 0) ? 1 : 0,
                    borderBottomColor: "rgba(0, 0, 0, 0.1)",
                }}>
                    <TouchableOpacity onPress={() => this.props.navigation.openDrawer()}>
                        <FontAwesome
                            name='bars'
                            size={20}
                            color="rgba(0, 0, 0, 0.4)"
                            style={{ paddingHorizontal: 15, }}
                        />
                    </TouchableOpacity>
                    <TextInput
                        placeholder={"Search"}
                        style={[styles.text, { flex: 1, fontSize: 16 }]}
                        // onChangeText={value => this.setState({ locationText: value })}
                        onChangeText={value => this.onChangeLocation(value)}
                        value={locationText}
                    />
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: 10 }}>
                        {locationText ? <TouchableOpacity
                            style={{ paddingHorizontal: 8, }}
                            onPress={() => this.setState({ locationChosen: false, autoLocationData: [], locationText: '' })}
                        >
                            {/* <Ionicons
                                name='md-locate'
                                size={20}
                                color="rgba(0, 0, 0, 0.4)"
                            /> */}
                            <Text style={{ color: "rgba(0, 0, 0, 0.4)", fontSize: 25, }}>&times;</Text>
                        </TouchableOpacity> : null}
                        <TouchableOpacity style={{ paddingHorizontal: 8, justifyContent: 'center' }} onPress={() => this.getLocationHandler()}>
                            <Ionicons
                                name='md-locate'
                                size={20}
                                color="rgba(0, 0, 0, 0.4)"
                            />
                        </TouchableOpacity>
                    </View>
                </View>
                {this.renderDropdown(autoLocationData)}
            </View>
        )
    }

    renderActionButton = () => {
        const { standardMap, silverMap, nightModeMap } = this.state;
        return (
            <ActionButton size={40} buttonColor="rgba(255, 22, 84, 1)">
                <ActionButton.Item
                    buttonColor={standardMap ? '#FF1654' : "#fff"}
                    title="Standard"
                    onPress={() => this.changeMapStyle("standard")}
                >
                    <FontAwesome
                        name="circle-o"
                        size={30}
                        style={[styles.actionButtonIcon, { color: `${standardMap ? "#fff" : 'rgba(0, 0, 0, 0.4)'}` }]}
                    />
                </ActionButton.Item>
                <ActionButton.Item
                    buttonColor={silverMap ? '#FF1654' : "#fff"}
                    title="Silver"
                    onPress={() => this.changeMapStyle("silver")}
                >
                    <FontAwesome
                        name="adjust"
                        size={30}
                        style={[styles.actionButtonIcon, { color: `${silverMap ? "#fff" : 'rgba(0, 0, 0, 0.4)'}` }]}
                    />
                </ActionButton.Item>
                <ActionButton.Item
                    buttonColor={nightModeMap ? '#FF1654' : "#fff"}
                    title="Night Mode"
                    onPress={() => this.changeMapStyle("night mode")}
                >
                    <FontAwesome
                        name="circle"
                        size={30}
                        style={[styles.actionButtonIcon, { color: `${nightModeMap ? "#fff" : 'rgba(0, 0, 0, 0.4)'}` }]}
                    />
                </ActionButton.Item>
            </ActionButton>
        )
    }

    renderLeftActionButton = () => {
        return (
            <TouchableOpacity onPress={() => this.handleShareLocation()} style={{
                position: 'absolute',
                bottom: Metrics.ratio(30),
                left: Metrics.ratio(30),
                width: Metrics.ratio(40),
                height: Metrics.ratio(40),
                backgroundColor: 'rgba(255, 22, 84, 1)',
                borderRadius: Metrics.ratio(20),
                justifyContent: 'center',
                alignItems: 'center'
            }}>
                <FontAwesome
                    name="share"
                    size={Metrics.ratio(20)}
                    style={[{ color: '#fff' }]}
                />
            </TouchableOpacity>
        )
    }

    renderMapViewDirections = () => {
        const { focusedLocation, currentLocation } = this.state
        return (
            <MapViewDirections
                origin={currentLocation}
                destination={focusedLocation}
                apikey={secret_Key} // Brain Washer
                strokeWidth={4}
                strokeColor="#FF1654"
                optimizeWaypoints={true}
                splitWaypoints={true}
            />
        )
    }

    render() {
        const { focusedLocation, locationChosen, currentLocation } = this.state
        return (
            <View style={styles.container}>
                {this.rendersearchBar()}
                <MapView
                    showsCompass={false}
                    // showsTraffic={true}
                    style={{ flex: 1, }}
                    initialRegion={locationChosen ? focusedLocation : currentLocation}
                    // region={focusedLocation}
                    // onPress={this.pickLocationHandler}
                    ref={ref => this.map = ref}
                    customMapStyle={this.state.customMapStyle}
                    showsUserLocation={true}
                    showsMyLocationButton={false}
                    maxZoomLevel={19}
                >
                    {locationChosen && <MapView.Marker coordinate={focusedLocation} />}
                    {locationChosen && this.renderMapViewDirections()}
                </MapView>
                {this.renderActionButton()}
                {this.renderLeftActionButton()}
                {/* <NavigationEvents
                    onWillFocus={payload => console.log('will focus', payload)}
                    onDidFocus={payload => console.log('did focus', payload)}
                    onWillBlur={payload => console.log('will blur', payload)}
                    onDidBlur={payload => console.log('did blur', payload)}
                /> */}
            </View>
        );
    }
}

const mapStateToProps = (state) => ({});

const action = {};

export default connect(mapStateToProps, action)(AwesomePlaces);