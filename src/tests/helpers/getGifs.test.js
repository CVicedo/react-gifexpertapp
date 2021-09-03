import { getGifs } from '../../helpers/getGifs'

describe('Pruebas con getGifs fetch', () => {
    test('debe de traer 25 elementos', async () => {

        const gifs = await getGifs('Garfield');

        expect(gifs.length).toBe(25)
    })

    test('debe de traer 0 elementos', async () => {

        const gifs = await getGifs('');

        expect(gifs.length).toBe(0)
    })
    
    
})