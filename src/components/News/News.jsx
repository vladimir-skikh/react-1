import React from "react";
import style from "./News.module.css";
import Post from "./Post/Post";
import NewPostContainer from './NewPost/NewPostContainer';

/** React memo делает оптимизацию по типу shoudComponentUpdate или PureComponent */
const News = React.memo( ({postsData}) => {

    let posts = postsData.map( post => 
            <Post
                postText={post.postText}
                postPhoto={post.postPhoto}
                authorAvatar={post.authorAvatar}
                authorName={post.authorName}
                key={post.id}
            />
        );
    
    return (
        <div>
            <div className={style.newPostBlock}>
                <NewPostContainer />
            </div>
            <div className={style.news}>
                {posts}
            </div>
        </div>
    );
    
});
export default News;
