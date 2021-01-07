import React from "react";
import News from "./News";

const NewsContainer = (props) => {
    
    let state = props.store.getState();

    return (<News postsData={state.newsReducer.postsData} />);

};
export default NewsContainer;
