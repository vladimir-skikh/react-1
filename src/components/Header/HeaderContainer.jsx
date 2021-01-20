import React from 'react';
import { connect } from 'react-redux';
import Header from './Header';
import { setUserThunkCreator } from '../../redux/authReducer';

class HeaderContainer extends React.Component 
{
    render () {
        return <Header {...this.props} userId={this.props.userId}/>
    }
}

let mapStateToProps = (state) => {
    return {
        isAuth: state.authReducer.isAuth,
        userId: state.authReducer.userId
    }
}

let actionCreators = {
    setUserData: setUserThunkCreator,
}

export default connect(mapStateToProps, actionCreators)(HeaderContainer);

