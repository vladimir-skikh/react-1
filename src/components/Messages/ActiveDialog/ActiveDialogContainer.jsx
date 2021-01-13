import { connect } from "react-redux";
import ActiveDialog from "./ActiveDialog";
import {addNewMessageCreator, changeNewMessageTextActionCreator} from '../../../redux/messagesPageReducer'

let mapStateToProps = (state) => {
    return {
        newMessageText: state.messagesReducer.newMessageText,
        activeDialogMessagesData: state.messagesReducer.activeDialogMessagesData,
    }
}

let actionCreators = {
    addNewMessage: addNewMessageCreator,
    changeMessageText: changeNewMessageTextActionCreator
}
const ActiveDialogContainer = connect(mapStateToProps, actionCreators)(ActiveDialog);

export default ActiveDialogContainer;
