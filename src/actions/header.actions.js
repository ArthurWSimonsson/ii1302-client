import { headerConstants } from '../constants';

/**
 * @author Arthur Simonsson
 * @description Redux action related to the application's header.
 */
export const headerActions = {
    noHeader
};

function noHeader () {
    return {type: headerConstants.NO_HEADER}
}

