import React from 'react';
import { StyleSheet, View, TouchableOpacity, Text, Dimensions} from 'react-native';
import PropTypes from 'prop-types';

export default class Button extends React.Component{ 
    static propTypes = {
        buttonText: PropTypes.string,
        buttonType: PropTypes.string,
        handleButtonPress: PropTypes.func,
        style: PropTypes.object,
        buttonStretch: PropTypes.bool
    }
    static defaultProps = {
        buttonText: "Submit",
        buttonType: "btn-default",
        handleButtonPress: null,
        style: null,
        buttonStretch: false
    }
    render(){
        let {buttonType} = this.props;
        return(
            <View>
                <TouchableOpacity 
                    onPress = {() => {this.props.handleButtonPress && this.props.handleButtonPress()}}
                >
                    <Text 
                        style = {[
                            styles.buttonStyle,
                            this.props.buttonStretch ? {width: Dimensions.get("window").width} : {},
                            buttonType == 'btn-default' ? {borderWidth: 1} :
                            buttonType == 'btn-primary' ? {backgroundColor: "#337ab7", color: 'white'} : 
                            buttonType == 'btn-success' ? {backgroundColor: "#5cb85c", color: 'white'} : 
                            buttonType == 'btn-info' ? {backgroundColor: "#5bc0de", color: 'white'} : 
                            buttonType == 'btn-warning' ? {backgroundColor: "#f0ad4e", color: 'white'} : 
                            buttonType == 'btn-danger' ? {backgroundColor: "#d9534f", color: 'white'} : 
                            buttonType == 'btn-link' ? {color: '#337ab7'} : null,
                            this.props.style
                        ]}
                    >
                        {this.props.buttonText}
                    </Text>
                </TouchableOpacity>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    buttonStyle: {
        padding: 10,
        textAlign: 'center',
        borderRadius: 3
    }
})