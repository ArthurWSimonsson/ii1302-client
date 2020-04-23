import { messageConstants } from '../constants';
import { messageService } from '../services';

export const messageActions = {
    welcomeMessage
};

function welcomeMessage () {
    // let welcomeMessage = await messageService.getWelcome();
    // return {type: messageConstants.WELCOME, welcomeMessage}

    // messageService.getWelcome()
    return dispatch => {
        messageService.getWelcome()
            .then(
                message => { 
                    console.log('mes', message);
                    dispatch({type: messageConstants.WELCOME, message});
                },
            );
    };

}