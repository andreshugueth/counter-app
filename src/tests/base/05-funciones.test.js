import '@testing-library/jest-dom';
import { getUser, getUsuarioActivo } from "../../base/05-funciones"


describe('', () => {
    test('getUser should return an object', () => {
        const userTest = {
            uid: 'ABC123',
            username: 'El_Papi1502'
        }
        const user = getUser();

        expect( user ).toEqual( userTest );
    })

    test('getUsuarioActivo should return an object', () => {
        const nombre = 'Andres'
        const getUserTest = {
            uid: 'ABC567',
            username: nombre
        }
        const getUser = getUsuarioActivo('Andres');

        expect( getUser ).toEqual( getUserTest );
    })


})