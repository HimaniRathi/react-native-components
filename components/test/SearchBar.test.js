import 'react-native';
import React from 'react';
import { shallow } from './src/enzyme';
import SearchBar from '../SearchBar.js';

describe(`Component: SearchBar`, () => {
    test(`SearchBar renders with default props`, () => {
        const wrapper = shallow(<SearchBar />);
        expect(wrapper).toMatchSnapshot();
    });
});

it('on Focus is setting the selected state to true',() => {
    const wrapper = shallow(<SearchBar />);
    const componentInstance = wrapper.instance();
    componentInstance.onFocus();
    expect(wrapper.state('selected')).toBe(true);
});
it('on Blur is setting the selected state to false',() => {
    const wrapper = shallow(<SearchBar />);
    const componentInstance = wrapper.instance();
    componentInstance.onBlur();
    expect(wrapper.state('selected')).toBe(false);
});
it('testing all props', () => {
    const wrapper = shallow(
        <SearchBar 
            searchBarStyle = {{borderColor: "#eaeaea"}} 
            // searchBarHighlightStyle = {{borderColor: "red"}}
            placeholderTextStyle = {{backgroundColor: 'blue'}}
            searchIconStyle = {{width: 30, height: 30}}
            placeholderText = "Search name of people..."
        />
    );
    expect(wrapper.props().children[1].props.placeholder).toEqual("Search name of people...");
    expect(wrapper.props().style[1]).toEqual({borderColor: "#eaeaea"});
    expect(wrapper.props().children[0].props.style[1]).toEqual({width: 30, height: 30});
    expect(wrapper.props().children[1].props.style[1]).toEqual({backgroundColor: 'blue'});
    expect(wrapper.props().children[0].props.onPress).toBeNull();
    expect(wrapper.props().children[1].props.onChangeText).toBeNull();
});