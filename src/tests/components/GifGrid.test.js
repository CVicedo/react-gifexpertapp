import React from 'react'
import { shallow } from "enzyme"
import { GifGrid } from '../../components/GifGrid'
import { useFetchGifs } from '../../hooks/useFetchGifs'
jest.mock('../../hooks/useFetchGifs')

describe('Pruebas en <GifGrid />', () => {
    const category = 'A category'
    
    test('debe mostrarse el componente correctamente', ()=> {
        useFetchGifs.mockReturnValue({
            data: [],
            loading: true
        })
        
        const wrapper = shallow(<GifGrid category={category} />)
        expect(wrapper).toMatchSnapshot();
    })

    test('debe de mostrar items cuando se cargan imágenes con useFetchGifs', () => {
        
        const gifs = [{
            id: 'Gif Id',
            url: 'https://localhost.4000/img.gif',
            title: 'Gif Title'
        },
        {
            id: '123456',
            url: 'https://localhost.4000/img.gif',
            title: 'Gif Title'
        }]

        useFetchGifs.mockReturnValue({
            data: gifs,
            loading: false
        })

        const wrapper = shallow(<GifGrid category={category} />)

        expect( wrapper ).toMatchSnapshot();
        expect( wrapper.find('p').exists()).toBeFalsy()
        expect( wrapper.find('GifGridItem').length).toBe(gifs.length)

    })
    
})