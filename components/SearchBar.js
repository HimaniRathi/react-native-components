import React from 'react';
import { StyleSheet, Image, View, TextInput, Dimensions, TouchableOpacity} from 'react-native';
import PropTypes from 'prop-types'
import searchIcon from '../assets/search_icon.png'

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
    render(){
        return(
            <View style = {this.state.selected ? [styles.filterInput, this.props.searchBarStyle, this.props.searchBarHighlightStyle]: [styles.filterInput, this.props.searchBarStyle]}>
                <TouchableOpacity style = {[styles.searchIconStyle, this.props.searchIconStyle]} onPress = {() => {this.props.onSearchPress && this.props.onSearchPress()}}>
                    <Image source = {searchIcon} />
                </TouchableOpacity>
                <TextInput
                    style = {[styles.placeholderStyle, this.props.placeholderTextStyle]}
                    placeholder={this.props.placeholderText}
                    onChangeText={searchTerm => {
                        this.props.onSearchTextChange && this.props.onSearchTextChange(searchTerm);
                    }}
                    onFocus = {() => {
                        this.setState({selected: true})
                    }}
                    onBlur = {() => {
                        this.setState({selected: false})
                    }}
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
        width: Dimensions.get("window").width-20,
        alignItems: 'center',
    },
    placeholderStyle: {
        marginLeft: 5, 
        width: '90%'
    },
    searchIconStyle: {
        margin: 10
    }
})