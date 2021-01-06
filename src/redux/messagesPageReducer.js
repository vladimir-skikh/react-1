const ADD_NEW_MESSAGE = 'ADD-NEW-MESSAGE';
const CHANGE_NEW_MESSAGE_TEXT = 'CHANGE-NEW-MESSAGE-TEXT';

let initialState = {
    dialogsData: [
        {
            id: 2,
            name: 'Linda Lohan',
            avatar: 'https://themified.com/friend-finder/images/users/user-2.jpg',
            lastMessage: 'Hi there, how are you',
        },
        {
            id: 10,
            name: 'Julia Cox',
            avatar: 'https://themified.com/friend-finder/images/users/user-10.jpg',
            lastMessage: 'see you soon',
        },
        {
            id: 3,
            name: 'Sophia Lee',
            avatar: 'https://themified.com/friend-finder/images/users/user-3.jpg',
            lastMessage: 'Hi there, how are you',
        }
    ],
    activeDialogMessagesData: [
        {
            author: "other",
            avatar: "https://themified.com/friend-finder/images/users/user-2.jpg",
            message: "Hi honey, how are you doing???? Long time no see. Where have you been?",
        },
        {
            author: "me",
            avatar: "https://invisionbyte.ru/test/uploads/monthly_2018_01/Wmug__uf.thumb.jpg.eca0349ccc67dd24370df4c7e452e924.jpg",
            message: "I'm fine, thanks! What about you?",
        },
    ],
    newMessageText: 'My new message',
}

const messagesReducer = (state = initialState, action) => {

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
