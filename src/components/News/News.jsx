import React from "react";
import style from "./News.module.css";
import Post from "./Post/Post";

const News = (props) => {

    let posts = props.state.postsData.map( post => 
            <Post
                postText={post.postText}
                postPhoto={post.postPhoto}
                authorAvatar={post.authorAvatar}
                authorName={post.authorName}
            />
        );

    return (
        <div className={style.news}>
            {posts}
        </div>
    );
};
export default News;
