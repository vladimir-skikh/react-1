import React, { useEffect, useState } from "react";
import style from "./MyProfileStatus.module.css";

const MyProfileStatusWithHooks = (props) => {
    
    /** destructure assignment */
    let [editMode, setEditMode] = useState(false);
    let [status, setStatus] = useState(props.status);

    useEffect( () => {
        setStatus(props.status);
    }, [props.status]);


    const activateStatusEditMode = () => {
        setEditMode(true);
    }

    const diactivateStatusEditMode = () => {
        props.updateStatus(status);
        setEditMode(false);
    }

    const onChangeStatusText = (e) => {
        let status = e.currentTarget.value;
        setStatus(status);
    }

    return (
        <div className={style.statusBlock}>
            <h3 className={style.userInfoTitle + " " + style.statusTitle}>
                Status
            </h3>
            {editMode ? (
                <div>
                    <input 
                        type="text" 
                        autoFocus={true} 
                        value={status}
                        onBlur={diactivateStatusEditMode}
                        onChange={onChangeStatusText}
                    />
                </div>
            ) : (
                <span 
                    className={style.statusText}
                    onDoubleClick={activateStatusEditMode}
                    onTouchStart={activateStatusEditMode}
                >
                    {props.status !== "" && props.status !== undefined
                        ? props.status
                        : "No status"}
                </span>
            )}
        </div>
    );
};

export default MyProfileStatusWithHooks;
