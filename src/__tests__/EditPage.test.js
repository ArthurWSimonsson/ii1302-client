import React from 'react'
import * as redux from 'react-redux'
import {render, cleanup, getByTestId, getByText, screen, fireEvent, getByPlaceholderText} from '@testing-library/react'
import { useDispatch, useSelector } from 'react-redux';
import { Provider } from 'react-redux';
import { store } from '../helper';
import {EditPage} from '../EditPage'
import { BrowserRouter } from 'react-router-dom'

/* Author Arthur Simonsson */

/* Testing components loaded with redux store */
describe('EditPage',() => {
    it('contains title and functioning input', () => {
    const utils = render(
        <Provider store={store}>        
            <BrowserRouter>
                <EditPage/>
            </BrowserRouter>
        </Provider>
        )
    expect(utils.getByText('Edit home message')).toBeTruthy();

    let input = utils.getByPlaceholderText('Leave new home screen message.')

    fireEvent.change(input, { target: { value: 'Message' } })
    expect(input.value).toBe('Message')
    });

});