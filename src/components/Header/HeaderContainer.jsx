import React from 'react';
import { connect } from 'react-redux';
import Header from './Header';
import { setUserThunkCreator } from '../../redux/authReducer';

class HeaderContainer extends React.Component 
{
    componentDidMount() {
        this.props.setUserData();
    }

    render () {
        return <Header {...this.props} userData={this.props.userData}/>
    }
}

let mapStateToProps = (state) => {
    return {
        isAuth: state.authReducer.isAuth,
        userData: state.authReducer.userData
    }
}

let actionCreators = {
    setUserData: setUserThunkCreator,
}

export default connect(mapStateToProps, actionCreators)(HeaderContainer);

