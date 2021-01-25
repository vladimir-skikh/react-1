import React from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

const withAuthRedirect = (Component) => {
    class RedirectComponent extends React.Component {
        render() {
            if (!this.props.isAuth) return <Redirect to="/login" />;

            return <Component {...this.props} />;
        }
    };

    let mapStateToProps = (state) => {
        return {
            isAuth: state.authReducer.isAuth,
            id: state.authReducer.userData.id,
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
