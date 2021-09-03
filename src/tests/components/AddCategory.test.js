import React from 'react'
import { AddCategory } from '../../components/AddCategory'
import { shallow } from 'enzyme'

describe('Pruebas en <AddCategory />', () => {

    const setCategories = jest.fn()
    let wrapper = shallow(<AddCategory setCategories={setCategories} />);

    beforeEach(() => {
        jest.clearAllMocks()
        wrapper = shallow(<AddCategory setCategories={setCategories} />);
    })

    test('debe de mostrarse correctamente', () => {
        expect( wrapper ).toMatchSnapshot()
    })

    test('debe cambiar la caja de texto', () => {
        
        const input = wrapper.find('input');
        const value = 'hola mundo'

        input.simulate('change', { target: { value } });

        expect(wrapper.find('p').text().trim()).toBe(value)
    })

    test('NO debe de postear la información onSubmit', () => {
        
        wrapper.find('form').simulate('submit', { preventDefault(){} })

        expect( setCategories ).not.toHaveBeenCalled()

    })

    test('debe de llamar setcategories y limpiar la caja de texto', () => {
        const value = 'Hola mundo'

        wrapper.find('input').simulate('change', { target: { value } });

        wrapper.find('form').simulate('submit', {preventDefault(){}});

        expect(setCategories).toHaveBeenCalled();
        expect(setCategories).toHaveBeenCalledWith( expect.any(Function) );
        
        expect(wrapper.find('input').prop('value')).toBe('')

    })
    
    
    

})