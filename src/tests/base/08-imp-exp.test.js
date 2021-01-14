import { getHeroeById, getHeroesByOwner } from "../../base/08-imp-exp"
import heroes from "../../data/heroes";


describe('Pruebas en funciones de heroes', () => {
    test('should return hero per id', () => {
        const id = 1;
        const heroe = getHeroeById( id );
        const heroeData = heroes.find( h => h.id === id );

        expect( heroe ).toEqual( heroeData );
    })

    test('should return undefined', () => {
        const id = 10;
        const heroe = getHeroeById( id );
        expect( heroe ).toBe( undefined );
    })
    // tarea
    test('should return DC heroes', () => {
        const owner = 'DC';
        const heroeOwner = getHeroesByOwner( owner );

        const heroDataOwner = heroes.filter( h => h.owner === owner );
        expect( heroeOwner ).toEqual( heroDataOwner );
    })
    // tarea
    test('should return Marvel heroes, length = 2', () => {
        const owner = 'Marvel';
        const heroeOwner = getHeroesByOwner( owner );
        expect( heroeOwner.length ).toBe( 2 );
    })

})