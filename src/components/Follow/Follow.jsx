import React from "react";
import style from "./Follow.module.css";
import User from "./User/User";

let Follow = (props) => {

    let follow = props.followData
                    .map(followItem => 
                        <User
                            name={followItem.name}
                            avatar={followItem.avatar}
                            key={followItem.id}
                        />
                    );

    return (
        <div className={style.follow}>
            <h4>Who to Follow</h4>
            {follow}
        </div>
    );
};
export default Follow;
