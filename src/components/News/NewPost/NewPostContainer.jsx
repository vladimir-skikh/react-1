import { connect } from "react-redux";
import NewPost from "./NewPost"
import {changeNewPostTextActionCreator, addPostActionCreator} from '../../../redux/newsPageReducer'

let mapStateToProps = (state) => {
    return {
        newPostText: state.newsReducer.newPostText,
    }
}

let actionCreators = {
    addNewPost: addPostActionCreator,
    changePostText: changeNewPostTextActionCreator,
}

const NewPostContainer = connect(mapStateToProps, actionCreators)(NewPost);

export default NewPostContainer;
