import { connect } from "react-redux";
import ActiveDialog from "./ActiveDialog";
import {addNewMessageActionCreator} from '../../../redux/messagesPageReducer'
import { getActiveDisalogMessages } from "../../../redux/selectors/messagesSelector";

let mapStateToProps = (state) => {
    return {
        activeDialogMessagesData: getActiveDisalogMessages(state),
    }
}

let actionCreators = {
    addNewMessage: addNewMessageActionCreator,
}
const ActiveDialogContainer = connect(mapStateToProps, actionCreators)(ActiveDialog);

export default ActiveDialogContainer;
