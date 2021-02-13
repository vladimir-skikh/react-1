import React from "react";
import style from './Post.module.css';

const Post = ({
  postPhoto, 
  authorAvatar, 
  authorName, 
  postText
}) => {
  return (
    <div className={style.item}>
      <img src={postPhoto} alt="" className={style.postPhoto}/>
      <div className={style.postDesc}>
        <div className={style.author}>
          <img src={authorAvatar} alt="" className={style.avatar}/>
          <div className={style.authorDesc}>
            <div className={style.authorDesc__left}>
              <span className={style.userName}>{authorName}</span>
              <span className={style.published}>Published a photo about 3 mins ago</span>
            </div>
            <div className={style.authorDesc__right}>
              <span className={style.like}>Like</span>
            </div>
          </div>
        </div>
        <div className={style.text}>
          <p>{ postText }</p>
        </div>
      </div>
    </div>
  );
}
export default Post;