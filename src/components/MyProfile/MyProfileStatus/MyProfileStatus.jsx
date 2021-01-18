import React from "react";
import style from "./MyProfileStatus.module.css";

class MyProfileStatus extends React.Component {

    state = {
        editMode: false,
        status: this.props.status,
    };

    activateStatusEditMode = () => {
        /** setState является асинхронной функцией */
        this.setState({
            editMode: true,
        });
    }

    diactivateStatusEditMode = () => {
        this.props.updateStatus(this.state.status);

        this.setState({
            editMode: false,
        });
    }

    onChangeStatusText = (e) => {
        let status = e.currentTarget.value;

        this.setState({
            status: status,
        });
    }

    render() {
        return (
            <div className={style.statusBlock}>
                <h3 className={style.userInfoTitle + " " + style.statusTitle}>
                    Status
                </h3>
                {this.state.editMode ? (
                    <div>
                        <input
                            type="text"
                            autoFocus={true}
                            value={this.state.status}
                            onBlur={this.diactivateStatusEditMode}
                            onChange={this.onChangeStatusText}
                        />
                    </div>
                ) : (
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
                )}
            </div>
        );
    }
}

export default MyProfileStatus;
