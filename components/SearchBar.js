import React from 'react';
import { StyleSheet, Image, View, TextInput, TouchableOpacity} from 'react-native';
import PropTypes from 'prop-types';

export default class SearchBar extends React.Component{ 
    static propTypes = {
        searchBarStyle: PropTypes.object,
        searchBarHighlightStyle: PropTypes.object,
        placeholderText: PropTypes.string,
        onSearchTextChange: PropTypes.func,
        onSearchPress: PropTypes.func,
        placeholderTextStyle: PropTypes.object,
        searchIconStyle: PropTypes.object
    }

    static defaultProps = {
        placeholderText: "Search...",
        onSearchTextChange: null,
        searchBarStyle: null,
        searchBarHighlightStyle: null,
        onSearchPress: null,
        placeholderTextStyle: null,
        searchIconStyle: null
    }
    state = {
        selected: false
    }
    onFocus = () => {
        this.setState({selected: true})
    }
    onBlur = () => {
        this.setState({selected: false})
    }
    render(){
        return(
            <View style = {this.state.selected ? [styles.filterInput, this.props.searchBarStyle, this.props.searchBarHighlightStyle]: [styles.filterInput, this.props.searchBarStyle]}>
                <TouchableOpacity style = {[styles.searchIconStyle, this.props.searchIconStyle]} onPress = {this.props.onSearchPress}>
                    <Image source = {{uri: 'https://i.ibb.co/825hncV/search-icon.png'}}/>
                </TouchableOpacity>
                <TextInput
                    style = {[styles.placeholderStyle, this.props.placeholderTextStyle]}
                    placeholder={this.props.placeholderText}
                    onChangeText={this.props.onSearchTextChange}
                    onFocus = {this.onFocus}
                    onBlur = {this.onBlur}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    filterInput: {
        padding: 5,
        flexDirection: 'row',
        borderWidth: 1,
        borderRadius: 3,
        marginHorizontal: 10,
        alignItems: 'center',
    },
    placeholderStyle: {
        marginLeft: 5, 
        width: '90%'
    },
    searchIconStyle: {
        width: 20, 
        height: 20,
        margin: 10,
        // borderWidth: 1,
        // height: 50,
        // width: 50,
        // backgroundColor: "black"
    }
})