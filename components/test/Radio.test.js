import {Alert} from 'react-native';
import React from 'react';
import { shallow } from './src/enzyme';
import Radio from '../Radio.js';

describe(`Component: Radio`, () => {
    test(`Radio renders with default props`, () => {
        const wrapper = shallow(<Radio text= "Female"/>);
        expect(wrapper).toMatchSnapshot();
        expect(wrapper.props().children[1].props.children).toBeTruthy();
    });
    test(`test onPressHandler function with onChange null`,() => {
        const wrapper = shallow(<Radio text= "Female"/>);
        const componentInstance = wrapper.instance();
        componentInstance.onPressHandler();
        expect(componentInstance.props.onChange).toBeNull();
        expect(wrapper.state('isSelected')).toEqual(false);
    });
    test(`test onPressHandler function with onChange in prop`,() => {
        const wrapper = shallow(
            <Radio 
                text= "Female" 
                onChange = {(isSelected) => {
                    !isSelected ? Alert.alert("Correct Answer", "Yayy you did it", [{ text: "OK", onPress: () => {console.log("bravo")} }]): null
                }}
            />);
        const componentInstance = wrapper.instance();
        componentInstance.onPressHandler();
        expect(componentInstance.props.onChange).toBeTruthy();
        expect(wrapper.state('isSelected')).toEqual(false);
    });
    test(`test textStyle prop with null or without passing the prop`,() => {
        const wrapper = shallow(<Radio text= "Female"/>);
        expect(wrapper.props().children[1].props.style[1]).toBeNull();
    });
    test(`test textStyle prop with null or without passing the prop`,() => {
        const wrapper = shallow(<Radio text= "Female" textStyle = {{color: 'red'}} />);
        expect(wrapper.props().children[1].props.style[1]).toBeTruthy();
    });
});
