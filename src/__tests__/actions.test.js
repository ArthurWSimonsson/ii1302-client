import { userActions, headerActions, messageActions} from '../actions';
import { userConstants, headerConstants, messageConstants} from '../constants';
import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import fetchMock from 'fetch-mock'
import expect from 'expect' 

const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)

describe('User actions', () => {
    it('should log in a user', () => {
        const user = 'user'
        const expectedAction = {
        type: userConstants.LOG_IN,
        user
        }
        expect(userActions.logIn(user)).toEqual(expectedAction)
    })

    it('should log out a user', () => {
        const expectedAction = {
          type: userConstants.LOG_OUT
        }
        expect(userActions.logOut()).toEqual(expectedAction)
      })
})

describe('Header actions', () => {
    it('should signal visitor header', () => {
        const expectedAction = {
            type: headerConstants.NO_HEADER
          }
          expect(headerActions.noHeader()).toEqual(expectedAction)
    })
})

describe('Message actions', () => {
    afterEach(() => {
        fetchMock.restore()
    })

    it('it should fetch main message', () => {
        fetchMock.getOnce('https://ii1302-server.eu-gb.mybluemix.net/api/message/welcome', {
            body: { message: 'testing message' },
            headers: { 'content-type': 'application/json' }
        })

        const expectedAction = [{
            type: messageConstants.WELCOME,
            "message": {"message": "testing message"}
        }]

        const store = mockStore({ message: {} })

        return store.dispatch(messageActions.welcomeMessage()).then(() => {
            expect(store.getActions()).toEqual(expectedAction)
        })
    })
})
