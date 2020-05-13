import { messageConstants } from '../constants';
import { messageService } from '../services';

/**
 * @author Arthur Simonsson
 * @description Redux actions related to the main message.
 */
export const messageActions = {
    welcomeMessage
};

function welcomeMessage () {
    // let welcomeMessage = await messageService.getWelcome();
    // return {type: messageConstants.WELCOME, welcomeMessage}

    // messageService.getWelcome()
    return dispatch => {
        return messageService.getWelcome()
            .then(
                message => { 
                    // console.log('mes', message);
                    dispatch({type: messageConstants.WELCOME, message});
                },
            );
    };

}