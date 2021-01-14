import CounterApp from "../CounterApp"
import { shallow } from 'enzyme';
import React from 'react';


describe('Counter App test', () => {

    let wrapper = shallow( <CounterApp/> ); // undefined

    beforeEach( () => {
        wrapper = shallow( <CounterApp/> );
    })

    // Testing CounterApp working

    test('should test counterApp', () => {
        expect( wrapper ).toMatchSnapshot();
    })

    // Checks for the initial value on CounterApp

    test('should show 100 as the initial counter point', () => {
        const wrapper = shallow(<CounterApp value={ 100 } />);
        const counterText = wrapper.find('h2').text().trim();
        expect( counterText ).toBe('100');
    })

    // Testing Clicks

    test('should increment with +1 button', () => {
        const bt1 = wrapper.find('button').at(0).simulate('click'); // First Button finded on position
        const counterText = wrapper.find('h2').text().trim();
        expect( counterText ).toBe('11');
    })

    test('should reduce with -1 button', () => {
        const bt2 = wrapper.find('button').at(2).simulate('click'); // First Button finded on position
        const counterText = wrapper.find('h2').text().trim();
        expect( counterText ).toBe('9');
    })

    // Testing reset

    test('should reset value', () => {
        const wrapper = shallow(<CounterApp value={ 105 } />);

        wrapper.find('button').at(0).simulate('click');
        wrapper.find('button').at(0).simulate('click');
        wrapper.find('button').at(1).simulate('click');

        const counterText = wrapper.find('h2').text().trim();
        expect( counterText ).toBe('105');
    })

})
