import { connect } from 'react-redux';
import { setIsAuthThunkCreator } from '../../redux/authReducer';
import { AppStateType } from '../../redux/reduxStore';
import Login from './Login';

export type MapStatePropsType = {
    isAuth: boolean
    captchaUrl: string | null
}
export type MapDispatchPropsType = {
    submitLogin: (formData: any) => any
}
export type OwnPropsType = {}

const mapStateToProps = (state: AppStateType) => {
    return {
        isAuth: state.authReducer.isAuth,
        captchaUrl: state.authReducer.captchaUrl
    }
}

const actionCreators = {
    submitLogin: setIsAuthThunkCreator
}

let LoginContainer = connect<MapStatePropsType, MapDispatchPropsType, OwnPropsType, AppStateType>(mapStateToProps, actionCreators)(Login);

export default LoginContainer;