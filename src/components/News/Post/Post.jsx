import React from "react";
import style from './Post.module.css';

const Post = (props) => {
  return (
    <div className={style.item}>
      <img src={props.postPhoto} alt="" className={style.postPhoto}/>
      <div className={style.postDesc}>
        <div className={style.author}>
          <img src={props.authorAvatar} alt="" className={style.avatar}/>
          <div className={style.authorDesc}>
            <div className={style.authorDesc__left}>
              <a className={style.userName}>{props.authorName}</a>
              <span className={style.published}>Published a photo about 3 mins ago</span>
            </div>
            <div className={style.authorDesc__right}>
              <span className={style.like}>Like</span>
            </div>
          </div>
        </div>
        <div className={style.text}>
          <p>{ props.postText } Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat ex temporibus quia autem ab perferendis odio sunt magni, amet accusamus modi recusandae reiciendis, quae molestiae officiis iste nam aspernatur eos.</p>
        </div>
      </div>
    </div>
  );
}
export default Post;