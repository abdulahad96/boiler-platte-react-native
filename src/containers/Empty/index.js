import React, { Component } from 'react';
import { Animated, StyleSheet, View } from 'react-native';
import { PanGestureHandler, State, } from 'react-native-gesture-handler';
import { Metrics } from '../../theme'
import { LoremIpsum } from './common';

const circleRadius = 30;
export class Circle extends Component {
    _touchX = new Animated.Value(Metrics.screenWidth / 2 - circleRadius);
    // _touchY = new Animated.Value(Metrics.screenHeight / 5 - circleRadius);
    _onPanGestureEvent = Animated.event(
        [{
            nativeEvent: {
                x: this._touchX,
                // y: this._touchY
            }
        }],
        { useNativeDriver: true }
    );
    _onHandlerStateChange = (event) => {
        console.log(event.nativeEvent, 'eventttttttttttttttttttttttttttttt')
    }
    render() {
        return (
            <PanGestureHandler
                onGestureEvent={this._onPanGestureEvent}
                onHandlerStateChange={(event) => this._onHandlerStateChange(event)}
            >
                <Animated.View style={{
                    height: 150,
                    justifyContent: 'center',
                    backgroundColor: 'red'
                }}>
                    <Animated.View style={[
                        {
                            backgroundColor: '#42a5f5',
                            borderRadius: circleRadius,
                            height: circleRadius * 2,
                            width: circleRadius * 2,
                        },
                        {
                            transform: [{
                                translateX: Animated.add(this._touchX, new Animated.Value(-circleRadius)),
                                // translateY: Animated.add(this._touchY, new Animated.Value(-circleRadius))
                            }]
                        }
                    ]}
                    />
                </Animated.View>
            </PanGestureHandler>
        );
    }
}

export class DraggableBox extends Component {
    constructor(props) {
        super(props);
        this._translateX = new Animated.Value(0);
        this._translateY = new Animated.Value(0);
        this._lastOffset = { x: 0, y: 0 };
        this._onGestureEvent = Animated.event(
            [
                {
                    nativeEvent: {
                        translationX: this._translateX,
                        translationY: this._translateY,
                    },
                },
            ],
            { useNativeDriver: true }
        );
    }
    _onHandlerStateChange = event => {
        console.log(event.nativeEvent, "eventtttttttttttttttttttttttttttttttt")
        if (event.nativeEvent.oldState === State.ACTIVE) {
            this._lastOffset.x += event.nativeEvent.translationX;
            this._lastOffset.y += event.nativeEvent.translationY;
            this._translateX.setOffset(this._lastOffset.x);
            this._translateX.setValue(0);
            this._translateY.setOffset(this._lastOffset.y);
            this._translateY.setValue(0);
        }
    };
    render() {
        return (
            <PanGestureHandler
            activeOffsetX={event => console.log(event, "eventeventeventeventevent")}
                {...this.props}
                onGestureEvent={this._onGestureEvent}
                onHandlerStateChange={this._onHandlerStateChange}>
                <Animated.View
                    style={[
                        {
                            width: 150,
                            height: 150,
                            alignSelf: 'center',
                            backgroundColor: 'plum',
                            margin: 10,
                            zIndex: 200,
                        },
                        {
                            transform: [
                                { translateX: this._translateX },
                                { translateY: this._translateY },
                            ],
                        },
                        this.props.boxStyle,
                    ]}
                />
            </PanGestureHandler>
        );
    }
}

export default class Example extends Component {
    render() {
        return (
            <View style={{ flex: 1 }}>
                {/* <LoremIpsum words={40} /> */}
                <DraggableBox />
                <Circle />
                {/* <LoremIpsum /> */}
            </View>
        );
    }
}