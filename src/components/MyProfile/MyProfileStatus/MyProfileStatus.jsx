import React from "react";
import style from "./MyProfileStatus.module.css";

class MyProfileStatus extends React.Component {
    state = {
        editMode: false,
    };

    activateStatusEditMode() {
        /** setState является асинкхонной функцией */
        this.setState({
            editMode: true,
        });
    }

    diactivateStatusEditMode() {
        this.setState({
            editMode: false,
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
                            value={this.props.status}
                            onBlur={this.diactivateStatusEditMode.bind(this)}
                            autoFocus={true}
                        />
                    </div>
                ) : (
                    <span
                        className={style.statusText}
                        onDoubleClick={this.activateStatusEditMode.bind(this)}
                    >
                        {this.props.status}
                    </span>
                )}
            </div>
        );
    }
}

export default MyProfileStatus;
