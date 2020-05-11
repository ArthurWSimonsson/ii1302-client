import { userConstants, headerConstants, messageConstants} from '../constants';
import {user} from '../reducers/userReducer';
import {header} from '../reducers/headerReducer';
import {message} from '../reducers/messageReducer';


describe('user reducer', () => {
    it('should return the initial state', () => {
      expect(user(undefined, {})).toEqual(
        {}
        )
    })

    it('should handle LOG_IN', () => {
        expect(
          user([], {
            type: userConstants.LOG_IN,
            user: 'test'
          })
        ).toEqual(
          {
            user: 'test',
          }
        )
    })

    it('should handle LOG_OUT', () => {
        expect(
          user([], {
            type: userConstants.LOG_OUT
          })
        ).toEqual(
          {}
        )
    })
})

describe('header reducer', () => {
    it('should return the initial state', () => {
      expect(header(undefined, {})).toEqual(
        {}
        )
    })

    it('should handle NO_HEADER', () => {
        expect(
          header([], {
            type: headerConstants.NO_HEADER,
            message : 'test'
          })
        ).toEqual(
          {
            visitor: true
          }
        )
    })

})


describe('message reducer', () => {
    it('should return the initial state', () => {
      expect(message(undefined, {})).toEqual(
        {}
        )
    })

    it('should handle WELCOME', () => {
        expect(
          message([], {
            type: messageConstants.WELCOME,
            message : {message: 'test'}
          })
        ).toEqual(
          {
            message: 'test'
          }
        )
    })
})