import React from 'react'
import {render, cleanup} from '@testing-library/react'
import { Provider } from 'react-redux';
import { store } from '../helper';
import App from '../App/App'
import { BrowserRouter } from 'react-router-dom'

afterEach(cleanup)
 
it('should take a snapshot', () => {
    const { asFragment } = render(  
    <Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>)
    
    expect(asFragment(<App />)).toMatchSnapshot()
})
// });

// import React from 'react';
// import { render } from '@testing-library/react';
// import App from './App';

// test('renders learn react link', () => {
//   const { getByText } = render(<App />);
//   const linkElement = getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });