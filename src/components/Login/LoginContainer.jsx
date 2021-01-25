import { connect } from 'react-redux';
import { setIsAuthThunkCreator } from '../../redux/authReducer';
import Login from './Login'

const mapStateToProps = (state) => {
    return {
        isAuth: state.authReducer.isAuth,
    }
}

const actionCreators = {
    submitLogin: setIsAuthThunkCreator
}

let LoginContainer = connect(mapStateToProps, actionCreators)(Login);

export default LoginContainer;