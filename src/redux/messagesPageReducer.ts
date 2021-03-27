import { InferActionsTypes } from './reduxStore';
import { MessagesReducerInitialStateType, MessageType } from './types/types';

let initialState: MessagesReducerInitialStateType = {
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

const messagesReducer = (state = initialState, action: ActionsTypes): MessagesReducerInitialStateType => {

    let stateCopy: MessagesReducerInitialStateType;

    switch (action.type) {
        case 'messege-me/messagesPageReducer/ADD-NEW-MESSAGE': {

            let newMessage: MessageType = {
                author: "me",
                avatar: "https://invisionbyte.ru/test/uploads/monthly_2018_01/Wmug__uf.thumb.jpg.eca0349ccc67dd24370df4c7e452e924.jpg",
                message: action.message,
            };

            stateCopy = { 
                ...state,
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

/** -------Action types--------- */
export const actions = {
    addNewMessageActionCreator: (message: string) => ({type: 'messege-me/messagesPageReducer/ADD-NEW-MESSAGE', message: message} as const)
}

type ActionsTypes = InferActionsTypes<typeof actions>
/** ---------------------------- */

export default messagesReducer;
