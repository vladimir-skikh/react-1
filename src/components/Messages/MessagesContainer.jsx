import { connect } from "react-redux";
import Messages from "./Messages";
import AuthRedirect from '../hoc/AuthRedirect';


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

let AuthRedirectComponent = AuthRedirect(Messages)

const MessagesContainer = connect(mapStateToProps, mapDispatchToProps)(AuthRedirectComponent);

export default MessagesContainer;
