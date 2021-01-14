import { retornaArreglo } from "../../base/07-deses-arr";

describe('Pruebas de desestructuración', () => {
    test('should return an array', () => {
        const arr = retornaArreglo();

        expect( arr ).toEqual( ['ABC', 123] );
    })

})