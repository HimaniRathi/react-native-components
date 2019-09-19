import React from 'react';
import { StyleSheet, View, Dimensions, TouchableOpacity, Text, PanResponder, Animated} from 'react-native';
import PropTypes from 'prop-types';
// import {scale, moderateScale, verticalScale} from 'react-native-size-matters';

let screenHeight = Dimensions.get("window").height;
let screenWidth = Dimensions.get("window").width;
export default class AssistiveTouch extends React.Component{ 
    static propTypes = {
        comeBackToOriginalPosition: PropTypes.bool,
        onPress: PropTypes.func,
        text: PropTypes.string,
        textStyle: PropTypes.object,
        style: PropTypes.object,
        startPosition: PropTypes.object
    }

    static defaultProps = {
        style: null,
        startPosition: {x: 0, y: screenHeight/3},
        onPress: null,
        comeBackToOriginalPosition: false,
        text: '',
        textStyle: null
    }
    componentDidMount = () => {
        let {startPosition} = this.props;
        this.state.pan.setValue({x: startPosition.x, y: startPosition.y})
    }
    state = {
        pan: new Animated.ValueXY()
    }
    _panResponder = PanResponder.create({
        onMoveShouldSetResponderCapture: () => true,
        onMoveShouldSetPanResponderCapture: () => true,
        onPanResponderGrant: (e, gestureState) => {
                this.state.pan.setOffset({x: this.state.pan.x._value, y: this.state.pan.y._value});
                this.state.pan.setValue({x: 0, y: 0});
        },
        onPanResponderMove: Animated.event([
            null, {dx: this.state.pan.x, dy: this.state.pan.y},
        ]),
        
        onPanResponderRelease: (e, { dx, dy }) => {
            this.state.pan.flattenOffset();
            if(!this.props.comeBackToOriginalPosition){
                if(dx == 0 && dy == 0){
                    this.props.onPress && this.props.onPress()
                }
            }else{
                Animated.spring(this.state.pan, {
                    toValue: { x: this.props.startPosition.x, y: this.props.startPosition.y },
                    friction: 5
                }).start();
                this.props.onPress && this.props.onPress();
            }
            
        }
    });
    render(){
        const panStyle = {
            transform: this.state.pan.getTranslateTransform()
        }
        return(
            <Animated.View {...this._panResponder.panHandlers} style = {[panStyle, styles.draggableButton]}>
                <TouchableOpacity style = {[styles.innerCircle, this.props.style]} onPress = {() => {this.props.onPress && this.props.onPress()}}>
                    <Text style = {[styles.textStyle, this.props.textStyle]}>{this.props.text}</Text>
                </TouchableOpacity>
            </Animated.View>
        );
    }
}
const styles = StyleSheet.create({
    draggableButton: {
        position: 'absolute',
        width: 55, 
        height: 55, 
        backgroundColor: "#474747", 
        borderRadius: 55, 
        zIndex: 1000, 
        justifyContent: 'center', 
        alignItems: 'center'
    },
    innerCircle: {
        backgroundColor: "#eaeaea", 
        width: 50, 
        height: 50, 
        borderRadius: 50,
        justifyContent: 'center', 
        alignItems: 'center'
    },
    textStyle: {
        overflow: 'hidden'
    }
})