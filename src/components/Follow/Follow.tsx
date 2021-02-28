import React, { FC } from "react";
import { UsersPageUserDataType } from "../../redux/types/types";
import style from "./Follow.module.css";
import User from "./User/User";

type PropsType= {
    followData: Array<UsersPageUserDataType>
}

let Follow: FC<PropsType> = (props: PropsType) => {

    let follow = props.followData
                    .map(user => 
                        <User
                            id={user.id}
                            name={user.name}
                            avatar={user.photos.small}
                            key={user.id}
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
