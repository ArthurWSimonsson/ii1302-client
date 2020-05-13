import { userConstants, headerConstants, messageConstants, postsConstants} from '../constants';
import {user} from '../reducers/userReducer';
import {header} from '../reducers/headerReducer';
import {message} from '../reducers/messageReducer';
import {posts} from '../reducers/postsReducer';

/**
 * Here redux reducers are tested. When an action is dispatched the store should contain desired information.
 */

/**
 * @author Arthur Simonsson
 */
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

/**
 * @author Arthur Simonsson
 */
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

/**
 * @author Arthur Simonsson
 */
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

/**
 * @author Botan Cosar
 */
describe('posts reducer', () => {
  it('should return the initial state', () => {
    expect(posts(undefined, {})).toEqual({
        items: [],
        item: {},
        sortKey: 'key',
        sortDirection: 1
      })
  })

  it('should handle POSTS', () => {
      expect(
        posts([], {
          type: postsConstants.POSTS,
          posts: ['test','test2','test3']
        })
      ).toEqual(
        {
          items: ['test','test2','test3']
        }
      )
  })

  it('should handle POST', () => {
    expect(
      posts([], {
        type: postsConstants.POST,
        posts: "test"
      })
    ).toEqual(
      {
        item: 'test'
      }
    )
  })

  it('should handle SORT_POST', () => {
    expect(
      posts([], {
        type: postsConstants.SORT_POST,
        key: "test"
      })
    ).toEqual(
      {
        sortKey: 'test',
      }
    )
  })
})