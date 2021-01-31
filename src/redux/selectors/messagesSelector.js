export const getDialogsUsers = (state) => {
    return state.messagesReducer.dialogsData;
}
export const getActiveDisalogMessages = (state) => {
    return state.messagesReducer.activeDialogMessagesData;
}