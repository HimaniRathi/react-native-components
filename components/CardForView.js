import React from 'react';
import { StyleSheet, View, TouchableOpacity, Dimensions, Image, Text} from 'react-native';
import PropTypes from 'prop-types';
import SearchBar from './SearchBar';

export default class CardForView extends React.Component{ 
    static propTypes = {
      withSearch: PropTypes.bool,
      headerTitle: PropTypes.string.isRequired,
      showHeader: PropTypes.bool
    }
    static defaultProps = {
      withSearch: false,
      showHeader: true
    }
    render(){
        return(
          <View style = {styles.container}>
            {this.props.showHeader ? (
              <View style = {{backgroundColor: '#00acee', marginTop: 26}}>
                <View style = {{flexDirection: "row", alignItems: 'center', padding: 10}}>
                  <TouchableOpacity>
                    <Image source = {{uri: 'https://i.ibb.co/BwLd93R/left-arrow.png'}} style = {{ width: 20, height: 20, marginLeft: 5}}/>
                  </TouchableOpacity>
                  <Text style = {{marginLeft: 15, fontSize: 22, color: "white"}}>{this.props.headerTitle}</Text>
                </View>
                {this.props.withSearch ? (
                  <SearchBar
                    searchBarStyle = {{borderWidth: 0, backgroundColor: "white", marginBottom: 10}}
                  />
                ) : null}
              </View>
            ) : null}
            {this.props.children ? this.props.children : null}
          </View>
      );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#eaeaea',
        width: "100%"
        // margin: 10
    },
})