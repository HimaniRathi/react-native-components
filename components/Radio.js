import React from 'react';
import { StyleSheet, View, TouchableOpacity, Text} from 'react-native';
import PropTypes from 'prop-types';

export default class Radio extends React.Component{ 
    static propTypes = {
        value: PropTypes.bool,
        text: PropTypes.string.isRequired,
        textStyle: PropTypes.object,
        onChange: PropTypes.func,
        // key: PropTypes.number.isRequired
    }
    static defaultProps = {
        value: true,
        textStyle: null,
        onChange: null,
    }
    state = {
        isSelected: this.props.value
    }
    onPressHandler = () => {
        this.setState(state => {state.isSelected = !state.isSelected; return state;})
        this.props.onChange && this.props.onChange(this.state.isSelected)
    }
    render(){
        return(
            <View style = {{flexDirection: "row"}}>
                <TouchableOpacity 
                    style = {[styles.outerCircle, this.state.isSelected ? {backgroundColor: "green"} : {backgroundColor: "#a3a3a3"}]}
                    onPress = {this.onPressHandler}
                >
                    <View style = {[styles.innerCircle, {backgroundColor: "white"}]}/>
                </TouchableOpacity>
                <Text style = {[styles.textStyle, this.props.textStyle]}>{this.props.text}</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    outerCircle: {
        borderRadius: 20, 
        height: 20, 
        width: 20,
        alignItems: 'center', 
        justifyContent: 'center'
    },
    innerCircle: {
        borderRadius: 10, 
        height: 10, 
        width: 10,
    },
    textStyle: {
        marginLeft: 5
    }
})