import { connect } from "react-redux";
import ActiveDialog from "./ActiveDialog";
import { actions } from '../../../redux/messagesPageReducer'
import { getActiveDisalogMessages } from "../../../redux/selectors/messagesSelector";

let mapStateToProps = (state) => {
    return {
        activeDialogMessagesData: getActiveDisalogMessages(state),
    }
}

let actionCreators = {
    addNewMessage: actions.addNewMessageActionCreator,
}
const ActiveDialogContainer = connect(mapStateToProps, actionCreators)(ActiveDialog);

export default ActiveDialogContainer;
