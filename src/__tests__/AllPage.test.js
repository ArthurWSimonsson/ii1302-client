import React from 'react';
import { Provider } from 'react-redux';
import {render, cleanup} from '@testing-library/react';
import { store } from '../helper';
import { BrowserRouter } from 'react-router-dom'
import {AllPage} from '../AllPage';

/**
 * @author Botan Cosar
 * @description Testing components loaded with redux store.
 */
describe('AllPage',()=>{

    afterEach(cleanup);

    it('has correct title and header attributes', () => {
        const { getByText } = render(
            <Provider store={store}>        
                <BrowserRouter>
                    <AllPage />
                </BrowserRouter>
            </Provider>
            )
        expect(getByText('Posts')).toBeTruthy();
        expect(getByText('Author').closest('th')).toHaveAttribute('class','arrow-down');
        expect(getByText('Title').closest('th')).toHaveAttribute('class','arrow-down');
        expect(getByText('Date').closest('th')).toHaveAttribute('class','arrow-down');
    });
})