import React from 'react';
import { StyleSheet, View, TouchableOpacity, Text, Dimensions} from 'react-native';
import PropTypes from 'prop-types';

export default class Button extends React.Component{ 
    static propTypes = {
        buttonType: PropTypes.string,
        onPress: PropTypes.func,
        style: PropTypes.object,
        textStyle: PropTypes.object,
        children: PropTypes.string.isRequired,
        buttonStretch: PropTypes.bool
    }
    static defaultProps = {
        buttonType: "default",
        onPress: null,
        style: null,
        textStyle: null,
        buttonStretch: false
    }
    render(){
        let {buttonType} = this.props;
        return(
            <View>
                <TouchableOpacity 
                    disabled = {this.props.onPress ? false: true}
                    onPress = {this.props.onPress}
                    style = {[
                        this.props.buttonStretch ? {width: Dimensions.get("window").width} : null,
                        styles.buttonStyle,
                        buttonType == 'default' ? {borderWidth: 1} :
                        buttonType == 'primary' ? {backgroundColor: "#337ab7"} : 
                        buttonType == 'success' ? {backgroundColor: "#5cb85c"} : 
                        buttonType == 'info' ? {backgroundColor: "#5bc0de"} : 
                        buttonType == 'warning' ? {backgroundColor: "#f0ad4e"} : 
                        buttonType == 'danger' ? {backgroundColor: "#d9534f"} : null,
                        this.props.style
                    ]}
                >
                    <Text 
                        style = {[
                            buttonType == 'default' ? {color: 'black'} :
                            buttonType == 'link' ? {color: '#337ab7', borderBottomWidth: 1} : 
                            {color: 'white'},
                            this.props.textStyle
                        ]}
                    >
                        {this.props.children}
                    </Text>
                </TouchableOpacity>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    buttonStyle: {
        padding: 10,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 3
    }
})