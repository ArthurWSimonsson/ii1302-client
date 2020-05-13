import { userActions, headerActions, messageActions, postsActions} from '../actions';
import { userConstants, headerConstants, messageConstants, postsConstants} from '../constants';
import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import fetchMock from 'fetch-mock'
import expect from 'expect' 

/**
 * Here redux actions are tested. First a mocked store is created. When an action is called that action is then 
 * compared to a template with desired structur. Test passes if equal.
 */

const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)

/**
 * @author Arthur Simonsson
 */
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

/**
 * @author Arthur Simonsson
 */
describe('Header actions', () => {
    it('should signal visitor header', () => {
        const expectedAction = {
            type: headerConstants.NO_HEADER
          }
          expect(headerActions.noHeader()).toEqual(expectedAction)
    })
})

/**
 * @author Arthur Simonsson
 */
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

/**
 * @author Botan Cosar
 */
describe('Posts actions', () => {
    afterEach(() => {
        fetchMock.restore()
    })

    it('it should fetch the full log', () => {
        fetchMock.getOnce('https://ii1302-server.eu-gb.mybluemix.net/api/message/all', {
            body: { 
                items: "test",
                item: {},
                sortKey: {},
                sortDirection: 1  
            },
            headers: { 'content-type': 'application/json' }
        })

        const expectedAction = [{
            type: postsConstants.POSTS,
            posts: {
                items: "test",
                item: {},
                sortKey: {},
                sortDirection: 1
            }
        }]

        const store = mockStore({
            posts: {
                items: [],
                item: {},
                sortKey: {},
                sortDirection: 1 
            }
        })
        
        return store.dispatch(postsActions.getPosts()).then(() => {
            expect(store.getActions()).toEqual(expectedAction)
        })
    })
    
    it('it should fetch a post from the log', () => {

        const id = 'ef71fa788697621451df116e63592ed2';

        fetchMock.getOnce(`https://ii1302-server.eu-gb.mybluemix.net/api/message/${id}`, {
            body: { item: 'testing message' },
            headers: { 'content-type': 'application/json' }
        })

        const expectedAction = [{
            type: postsConstants.POST,
            "posts": {"item": "testing message"}
        }]

        let store = mockStore({
                posts: {
                    items: [],
                    item: {},
                    sortKey: {},
                    sortDirection: 1 
                }
        })

        return store.dispatch(postsActions.getPost(id)).then(() => {
            expect(store.getActions()).toEqual(expectedAction)
        })
    })

    it('it should set sortKey and sortDirection', () => {
        const key = 'test'
        const expectedAction = {
        type: postsConstants.SORT_POST,
        key
        }
        expect(postsActions.sortPosts(key)).toEqual(expectedAction)
    })
})