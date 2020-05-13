import React from 'react'
import * as redux from 'react-redux'
import {render, cleanup, getByTestId, getByText, screen} from '@testing-library/react'
import { useDispatch, useSelector } from 'react-redux';
import { Provider } from 'react-redux';
import { store } from '../helper';
import {HomePage} from '../HomePage'
import { BrowserRouter } from 'react-router-dom'

/* Author Arthur Simonsson */

/* Testing components loaded with redux store */
describe('HomePage',() => {

    it('has correct title and functioning <Link>', () => {
        const { getByText ,getByTestId } = render(
            <Provider store={store}>        
                <BrowserRouter>
                    <HomePage />
                </BrowserRouter>
            </Provider>
            )
    expect(getByText('Welcome')).toBeTruthy();
    expect(getByText('Leave a message').closest('a')).toHaveAttribute('href', '/visitor')
    });

});
