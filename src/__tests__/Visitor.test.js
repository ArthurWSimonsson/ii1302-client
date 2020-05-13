import React from 'react'
import * as redux from 'react-redux'
import {render, cleanup, getByTestId, getByText, screen, fireEvent, getByPlaceholderText} from '@testing-library/react'
import { useDispatch, useSelector } from 'react-redux';
import { Provider } from 'react-redux';
import { store } from '../helper';
import {Visitor} from '../Visitor'
import { BrowserRouter } from 'react-router-dom'

/**
 * @author Arthur Simonsson
 * @description Testing components loaded with redux store.
 */
console.log(Visitor.handleSubmit)
Visitor.handleSubmit = jest.fn();

describe('Visitor',() => {
    it('contains title and functioning input', () => {
    const utils = render(
        <Provider store={store}>        
            <BrowserRouter>
                <Visitor/>
            </BrowserRouter>
        </Provider>
        )

    expect(utils.getByText('Leave a message')).toBeTruthy();

    let input = utils.getByPlaceholderText('Author')

    fireEvent.change(input, { target: { value: 'Name' } })
    expect(input.value).toBe('Name')

    input = utils.getByPlaceholderText('Title')

    fireEvent.change(input, { target: { value: 'Test' } })
    expect(input.value).toBe('Test')

    input = utils.getByPlaceholderText('Please leave a message.')

    fireEvent.change(input, { target: { value: 'Message' } })
    expect(input.value).toBe('Message')

    // const spy = jest.spyOn(Visitor, 'handleSubmit');
    // fireEvent.click(utils.getByText('Submit'))

    // expect(Visitor.handleSubmit).toBeCalled();
    });

});