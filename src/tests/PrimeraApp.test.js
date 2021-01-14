import React from 'react';
// import { render } from "@testing-library/react";
import PrimeraApp from "../PrimeraApp";
import { shallow } from 'enzyme';


describe('Pruebas en <PrimeraApp />', () => {
    /* test('should return message Hola soy Goku', () => {
        const saludo = 'Hola, soy Goku';
        const { getByText } = render( <PrimeraApp saludo={ saludo } /> )
        expect( getByText(saludo) ).toBeInTheDocument();
    }) */
    test('should show <PrimeraApp /> correctly', () => {
        const saludo = 'Hola, soy Goku';
        const wrapper = shallow( <PrimeraApp saludo={ saludo }/>);

        expect( wrapper ).toMatchSnapshot();
    })

    test('should show subtitle send by props', () => {
        const saludo = 'Hola, soy Goku';
        const subtitulo = 'Soy un Subtitulo';
        const wrapper = shallow(
            <PrimeraApp
                saludo={ saludo }
                subtitulo={ subtitulo }
            />);
        const textoParrafo = wrapper.find('p').text();
        expect( textoParrafo ).toBe( subtitulo );
    })
    

})
