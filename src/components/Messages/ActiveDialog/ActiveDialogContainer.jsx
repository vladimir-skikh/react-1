import { connect } from "react-redux";
import ActiveDialog from "./ActiveDialog";
import {addNewMessageCreator} from '../../../redux/messagesPageReducer'
import { getActiveDisalogMessages } from "../../../redux/selectors/messagesSelector";

let mapStateToProps = (state) => {
    return {
        activeDialogMessagesData: getActiveDisalogMessages(state),
    }
}

let actionCreators = {
    addNewMessage: addNewMessageCreator,
}
const ActiveDialogContainer = connect(mapStateToProps, actionCreators)(ActiveDialog);

export default ActiveDialogContainer;
