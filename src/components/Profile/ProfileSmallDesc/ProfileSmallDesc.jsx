import React from "react";
import style from "./ProfileSmallDesc.module.css";

let ProfileSmallDesc = () => {
  return (
    <div className={style.profile_block_name}>
      <img
        className={style.profile_image}
        src="https://invisionbyte.ru/test/uploads/monthly_2018_01/Wmug__uf.thumb.jpg.eca0349ccc67dd24370df4c7e452e924.jpg"
        alt=""
      />
      <span className={style.profile_name}>John Doe</span>
    </div>
  );
};
export default ProfileSmallDesc;
