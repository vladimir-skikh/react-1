import { connect } from 'react-redux';
import { setUserThunkCreator } from '../../redux/authReducer';
import Login from './Login'

const mapStateToProps = (state) => {
    return {

    }
}

const actionCreators = {
    submitLogin: setUserThunkCreator
}

let LoginContainer = connect(mapStateToProps, actionCreators)(Login);

export default LoginContainer;