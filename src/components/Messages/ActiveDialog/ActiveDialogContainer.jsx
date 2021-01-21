import { connect } from "react-redux";
import ActiveDialog from "./ActiveDialog";
import {addNewMessageCreator} from '../../../redux/messagesPageReducer'

let mapStateToProps = (state) => {
    return {
        activeDialogMessagesData: state.messagesReducer.activeDialogMessagesData,
    }
}

let actionCreators = {
    addNewMessage: addNewMessageCreator,
}
const ActiveDialogContainer = connect(mapStateToProps, actionCreators)(ActiveDialog);

export default ActiveDialogContainer;
