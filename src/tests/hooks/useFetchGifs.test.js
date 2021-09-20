import {useFetchGifs} from '../../hooks/useFetchGifs'
import { renderHook } from '@testing-library/react-hooks'

describe('Pruebas en el hook useFetchGifs', () => {

    test('debe retornar el estado inicial', () => {

        const { result } = renderHook(() => useFetchGifs( 'Garfield' ))

        const { data, loading } = result.current;

        expect(data).toEqual([]);
        expect(loading).toBeTruthy();

    })

})