import React from 'react';
import { connect } from 'react-redux';
import Header from './Header';
import { unsetUserThunkCreator } from '../../redux/authReducer';

class HeaderContainer extends React.Component 
{
    onLogout = () => {
        this.props.unsetUser();
    }

    render () {
        return <Header {...this.props} userId={this.props.userId} onLogout={this.onLogout}/>
    }
}

let mapStateToProps = (state) => {
    return {
        isAuth: state.authReducer.isAuth,
        userData: state.authReducer.userData,
    }
}

let actionCreators = {
    unsetUser: unsetUserThunkCreator,
}

export default connect(mapStateToProps, actionCreators)(HeaderContainer);

