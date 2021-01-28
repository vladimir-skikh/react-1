import React from "react";
import style from "./News.module.css";
import Post from "./Post/Post";
import NewPostContainer from './NewPost/NewPostContainer';

class News extends React.PureComponent
{

    /** Нужно ли отрисовывать компоненту? false - нет, true - да */
    /* shouldComponentUpdate(nextProps, nextState) {
        return nextProps !== this.props || nextState !== this.state;
    } */

    posts = this.props.postsData.map( post => 
            <Post
                postText={post.postText}
                postPhoto={post.postPhoto}
                authorAvatar={post.authorAvatar}
                authorName={post.authorName}
                key={post.id}
            />
        );

    render() {
        return (
            <div>
                <div className={style.newPostBlock}>
                    <NewPostContainer />
                </div>
                <div className={style.news}>
                    {this.posts}
                </div>
            </div>
        );
    }
};
export default News;
