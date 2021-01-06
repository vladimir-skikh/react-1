const ADD_NEW_MESSAGE = 'ADD-NEW-MESSAGE';
const CHANGE_NEW_MESSAGE_TEXT = 'CHANGE-NEW-MESSAGE-TEXT';

const messagesReducer = (state, action) => {

    switch (action.type) {
        case ADD_NEW_MESSAGE: 
            let newMessage = {
                author: "me",
                avatar: "https://invisionbyte.ru/test/uploads/monthly_2018_01/Wmug__uf.thumb.jpg.eca0349ccc67dd24370df4c7e452e924.jpg",
                message: state.newMessageText,
            };
            state.activeDialogMessagesData.push(newMessage);
            state.newMessageText = ''; 
            break;
        case CHANGE_NEW_MESSAGE_TEXT: 
            state.newMessageText = action.text;
            break;
        default:
            break;
    }

    return state;
}

export const addNewMessageCreator = () => {
    let action = {
        type: ADD_NEW_MESSAGE,
    }
    return action;
}

export const changeNewMessageTextActionCreator = (message) => {
    let action = {
        type: CHANGE_NEW_MESSAGE_TEXT,
        text: message,
    }
    return action;
}

export default messagesReducer;
