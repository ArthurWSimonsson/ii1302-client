import { headerConstants } from '../constants';
// import { messageService } from '../services';

export const headerActions = {
    noHeader
};

function noHeader () {
    return {type: headerConstants.NO_HEADER}
}

