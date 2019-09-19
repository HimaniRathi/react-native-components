import 'react-native';
import React from 'react';
import { shallow } from './src/enzyme';
import Button from '../Button.js';

describe(`Component: Button`, () => {
    it(`Button renders with default props`, () => {
        const wrapper = shallow(<Button>Check</Button>);
        expect(wrapper).toMatchSnapshot();
        expect(wrapper.props().children.props.children.props.children).toBeTruthy();
    });
    it('testing onPress props with null', () => {
        const wrapper = shallow(<Button>Check</Button>);
        expect(wrapper.props().children.props.onPress).toBeNull();
    });
    it('testing onPress props with a function', () => {
        const wrapper = shallow(<Button onPress = {() => {console.log("yayy")}}>Check</Button>);
        expect(wrapper.props().children.props.onPress).toBeTruthy();
    });
    it('testing buttonType prop with default value', () => {
        const wrapper = shallow(<Button>Check</Button>);
        expect(wrapper.props().children.props.style[2]).toEqual({borderWidth: 1});
        expect(wrapper.props().children.props.children.props.style[0]).toEqual({color: 'black'});
    });
    it('testing buttonType prop with value as primary', () => {
        const wrapper = shallow(<Button buttonType = "primary">Check</Button>);
        expect(wrapper.props().children.props.style[2]).toEqual({backgroundColor: "#337ab7"});
        expect(wrapper.props().children.props.children.props.style[0]).toEqual({color: 'white'});
    });
    it('testing buttonType prop with value as success', () => {
        const wrapper = shallow(<Button buttonType = "success">Check</Button>);
        expect(wrapper.props().children.props.style[2]).toEqual({backgroundColor: "#5cb85c"});
        expect(wrapper.props().children.props.children.props.style[0]).toEqual({color: 'white'});
    });
    it('testing buttonType prop with value as info', () => {
        const wrapper = shallow(<Button buttonType = "info">Check</Button>);
        expect(wrapper.props().children.props.style[2]).toEqual({backgroundColor: "#5bc0de"});
        expect(wrapper.props().children.props.children.props.style[0]).toEqual({color: 'white'});
    });
    it('testing buttonType prop with value as warning', () => {
        const wrapper = shallow(<Button buttonType = "warning">Check</Button>);
        expect(wrapper.props().children.props.style[2]).toEqual({backgroundColor: "#f0ad4e"});
        expect(wrapper.props().children.props.children.props.style[0]).toEqual({color: 'white'});
    });
    it('testing buttonType prop with value as danger', () => {
        const wrapper = shallow(<Button buttonType = "danger">Check</Button>);
        expect(wrapper.props().children.props.style[2]).toEqual({backgroundColor: "#d9534f"});
        expect(wrapper.props().children.props.children.props.style[0]).toEqual({color: 'white'});
    });
    it('testing buttonType prop with value as link', () => {
        const wrapper = shallow(<Button buttonType = "link">Check</Button>);
        expect(wrapper.props().children.props.style[2]).toBeNull();
        expect(wrapper.props().children.props.children.props.style[0]).toEqual({color: '#337ab7', borderBottomWidth: 1});
    });
    it('testing buttonType prop', () => {
        const wrapper = shallow(<Button>Check</Button>);
        const componentInstance = wrapper.instance();
        componentInstance.props.buttonType == 'default' ? expect(wrapper.props().children.props.style[2]).toEqual({borderWidth: 1}): 
        componentInstance.props.buttonType == 'primary' ? expect(wrapper.props().children.props.style[2]).toEqual({backgroundColor: "#337ab7"}) :
        componentInstance.props.buttonType == 'success' ? expect(wrapper.props().children.props.style[2]).toEqual({backgroundColor: "#5cb85c"}) :
        componentInstance.props.buttonType == 'info' ? expect(wrapper.props().children.props.style[2]).toEqual({backgroundColor: "#5bc0de"}) :
        componentInstance.props.buttonType == 'warning' ? expect(wrapper.props().children.props.style[2]).toEqual({backgroundColor: "#f0ad4e"}) :
        componentInstance.props.buttonType == 'danger' ? expect(wrapper.props().children.props.style[2]).toEqual({backgroundColor: "#d9534f"}) : expect(wrapper.props().children.props.style[2]).toBeNull();
    });
    it(`testing buttonStretch prop with default (false)`,() => {
        const wrapper = shallow(<Button buttonStretch = {false}>Check</Button>);
        expect(wrapper.props().children.props.style[0]).toBeNull();
    });
    it(`testing buttonStretch prop with value as true`,() => {
        const wrapper = shallow(<Button buttonStretch = {true}>Check</Button>);
        expect(wrapper.props().children.props.style[0]).toBeTruthy();
    });
});