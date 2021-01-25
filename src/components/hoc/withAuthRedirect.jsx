import React from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

const withAuthRedirect = (Component) => {
    class RedirectComponent extends React.Component {
        render() {
            if (!this.props.isAuth) return <Redirect to="/login" />;

            return <Component {...this.props} isAuth={this.props.isAuth} userData={this.props.userData}/>;
        }
    };

    let mapStateToProps = (state) => {
        return {
            isAuth: state.authReducer.isAuth,
            userData: state.authReducer.userData,
        }
    };
    let actionCreators = {};

    let ConnectedRedirectComponent = connect(
        mapStateToProps,
        actionCreators
    )(RedirectComponent);

    return ConnectedRedirectComponent;
};

export default withAuthRedirect;
