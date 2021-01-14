import { getSaludo } from "../../base/02-template-string";


describe('Pruebas en 02-template-string.js', () => {
    test('should run getSaludo', () => {
        const nombre = 'Andres';

        const saludo = getSaludo(nombre);
        expect( saludo ).toBe( 'Hola ' + nombre );
    })

    test('should return Hola Carlos without argument', () => {
        const saludo = getSaludo();
        expect( saludo ).toBe('Hola Carlos');
    })

})