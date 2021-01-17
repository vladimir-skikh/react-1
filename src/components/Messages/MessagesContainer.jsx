import { connect } from "react-redux";
import Messages from "./Messages";
import withAuthRedirect from "../hoc/withAuthRedirect";

let mapStateToProps = (state) => {
    return {
        dialogsData: state.messagesReducer.dialogsData,
    };
};
let mapDispatchToProps = (dispatch) => {
    return {};
};

let AuthRedirectComponent = withAuthRedirect(Messages);

const MessagesContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(AuthRedirectComponent);

export default MessagesContainer;
