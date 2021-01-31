import { connect } from "react-redux";
import Messages from "./Messages";
import withAuthRedirect from "../hoc/withAuthRedirect";
import { compose } from "redux";
import { getDialogsUsers } from "../../redux/selectors/messagesSelector";

let mapStateToProps = (state) => {
    return {
        dialogsData: getDialogsUsers(state),
    };
};
let mapDispatchToProps = (dispatch) => {
    return {};
};

const MessagesContainer = compose(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect
)(Messages);

export default MessagesContainer;
