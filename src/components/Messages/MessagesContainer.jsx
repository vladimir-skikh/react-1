import { connect } from "react-redux";
import Messages from "./Messages";
import withAuthRedirect from "../hoc/withAuthRedirect";
import { compose } from "redux";

let mapStateToProps = (state) => {
    return {
        dialogsData: state.messagesReducer.dialogsData,
    };
};
let mapDispatchToProps = (dispatch) => {
    return {};
};

const MessagesContainer = compose(
    connect(mapStateToProps, mapDispatchToProps),
    //withAuthRedirect
)(Messages);

export default MessagesContainer;
