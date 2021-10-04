import {useFetchGifs} from '../../hooks/useFetchGifs'
import { renderHook } from '@testing-library/react-hooks'

describe('Pruebas en el hook useFetchGifs', () => {

    test('debe retornar el estado inicial', async() => {

        const { result, waitForNextUpdate } = renderHook(() => useFetchGifs( 'Garfield' ))
        const { data, loading } = result.current;

        await waitForNextUpdate();

        expect(data).toEqual([]);
        expect(loading).toBeTruthy();

    })

    test('debe retornar un arreglo de imágenes y el loading en false', async() => {
        const { result, waitForNextUpdate } = renderHook(() => useFetchGifs( 'Garfield' ))

        await waitForNextUpdate();

        const { data, loading } = result.current;

        expect(data.length).toBe(25);
        expect(loading).toBe(false);

    })

})