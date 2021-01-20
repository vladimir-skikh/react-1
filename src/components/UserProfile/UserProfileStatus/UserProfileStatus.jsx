import React from "react";
import style from "./UserProfileStatus.module.css";

class UserProfileStatus extends React.Component {

    state = {
        status: this.props.status,
    };

    componentDidUpdate(prevProps, prevState) {
        if (prevProps.status !== this.props.status) {
            this.setState({
                status: this.props.status,
            });
        }
    }

    render() {
        return (
            <div className={style.statusBlock}>
                <h3 className={style.userInfoTitle + " " + style.statusTitle}>
                    Status
                </h3>
                <span
                    className={style.statusText}
                    onDoubleClick={this.activateStatusEditMode}
                    onTouchStart={this.activateStatusEditMode}
                >
                    {
                        ( this.props.status !== '' && this.props.status !== null ) 
                        ? this.props.status 
                        : 'No status'
                    }
                </span>
            </div>
        );
    }
}

export default UserProfileStatus;
