import axios from 'axios';
import React from 'react';
import { connect } from 'react-redux';
import Header from './Header';
import { setUserDataActionCreator } from '../../redux/authReducer';

class HeaderContainer extends React.Component 
{
    componentDidMount() {
        let query = `https://social-network.samuraijs.com/api/1.0/auth/me`;
        axios.get(query, { withCredentials: true }).then( response => {
            if (response.data.resultCode === 0) {
                this.props.setUserData(response.data.data);
            }
        });
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
    setUserData: setUserDataActionCreator,
}

export default connect(mapStateToProps, actionCreators)(HeaderContainer);

