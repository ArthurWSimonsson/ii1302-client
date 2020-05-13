import React from 'react';
import {render} from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from '../helper';
import { BrowserRouter } from 'react-router-dom';
import {Entry} from '../Entry';

/**
 * @author Botan Cosar
 */
describe('Entry',() => {
    it('accepts parameter and loads correctly', () => {
        const props = {
            location: {id: 'ef71fa788697621451df116e63592ed2'}
        };

        const { getByTestId } = render(
            <Provider store={store}>        
                <BrowserRouter>
                    <Entry {...props} />
                </BrowserRouter>
            </Provider>
            )

        expect(getByTestId('entry')).toBeTruthy();
    });

});