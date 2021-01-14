import { getHeroeByIdAsync } from "../../base/09-promesas";
import heroes from "../../data/heroes";

describe('Pruebas con promesas', () => {
    test('getHeroeByIdAsync should return a async Heroe', ( done ) => {
        const id = 1;
        getHeroeByIdAsync( id )
            .then(heroe => {
                expect( heroe ).toBe( heroes[0] );
                done();
            })
    });

    test('should return an error if the id does not exits', ( done ) => {
        const id = 10;
        getHeroeByIdAsync( id )
            .catch( error => {
                expect( error ).toBe('No se pudo encontrar el héroe');
                done();
            });
    });

})
