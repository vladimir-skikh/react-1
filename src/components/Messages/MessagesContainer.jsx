import { connect } from "react-redux";
import Messages from "./Messages"

let mapStateToProps = (state) => {
    return {
        dialogsData: state.messagesReducer.dialogsData,
        isAuth: state.authReducer.isAuth,
    }
}
let mapDispatchToProps = (dispatch) => {
    return {

    }
}
const MessagesContainer = connect(mapStateToProps, mapDispatchToProps)(Messages);

export default MessagesContainer;
