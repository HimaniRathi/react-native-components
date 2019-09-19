import {View} from 'react-native';
import React from 'react';
import { shallow } from './src/enzyme';
import CardForView from '../CardForView.js';

describe(`Component: CardForView`, () => {
    test(`CardForView renders with default props`, () => {
        const wrapper = shallow(<CardForView headerTitle = "Header Title"/>);
        expect(wrapper).toMatchSnapshot();
        expect(wrapper.props().children[0].props.children[0].props.children[1].props.children).toBeTruthy();
    });
    test(`test children prop without value`,() => {
        const wrapper = shallow(<CardForView headerTitle = "Header Title"/>);
        expect(wrapper.props().children[1]).toBeNull();
    });
    test(`test children prop with value`,() => {
        const wrapper = shallow(
            <CardForView headerTitle = "Header Title">
                <View></View>
            </CardForView>
        );
        expect(wrapper.props().children[1]).toBeTruthy();
    });
    test(`test showHeader prop as false`,() => {
        const wrapper = shallow(<CardForView headerTitle = "Header Title" showHeader = {false}/>);
        expect(wrapper.props().children[0]).toBeNull();
    });
    test(`test showHeader prop as true`,() => {
        const wrapper = shallow(<CardForView headerTitle = "Header Title" showHeader = {true}/>);
        expect(wrapper.props().children[0]).toBeTruthy();
    });
    test(`test withSearch prop as false`,() => {
        const wrapper = shallow(<CardForView headerTitle = "Header Title" withSearch = {false}/>);
        expect(wrapper.props().children[0].props.children[1]).toBeNull();
    });
    test(`test withSearch prop as true`,() => {
        const wrapper = shallow(<CardForView headerTitle = "Header Title" withSearch = {true}/>);
        expect(wrapper.props().children[0].props.children[1]).toBeTruthy();
    });
});