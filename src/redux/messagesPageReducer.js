const ADD_NEW_MESSAGE = 'messege-me/messagesPageReducer/ADD-NEW-MESSAGE';

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
}

const messagesReducer = (state = initialState, action) => {

    let stateCopy;

    switch (action.type) {
        case ADD_NEW_MESSAGE: {

            let newMessage = {
                author: "me",
                avatar: "https://invisionbyte.ru/test/uploads/monthly_2018_01/Wmug__uf.thumb.jpg.eca0349ccc67dd24370df4c7e452e924.jpg",
                message: action.message,
            };

            stateCopy = { 
                ...state,
                newMessageText: '',
                activeDialogMessagesData: [...state.activeDialogMessagesData, newMessage],
            };

            break;
        }
        default: {
            stateCopy = {...state}
            break;
        }
    }

    return stateCopy;
}

export const addNewMessageCreator = (message) => {
    let action = {
        type: ADD_NEW_MESSAGE,
        message: message,
    }
    return action;
}

export default messagesReducer;
