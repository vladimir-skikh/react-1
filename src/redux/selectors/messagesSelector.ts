import { AppStateType } from './../reduxStore';
import { DialogType, MessageType } from './../types/types';

export const getDialogsUsers = (state: AppStateType): Array<DialogType> => {
    return state.messagesReducer.dialogsData;
}
export const getActiveDisalogMessages = (state: AppStateType): Array<MessageType> => {
    return state.messagesReducer.activeDialogMessagesData;
}