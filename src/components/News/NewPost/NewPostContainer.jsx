import { connect } from "react-redux";
import NewPost from "./NewPost"
import {addPostActionCreator} from '../../../redux/newsPageReducer'

let mapStateToProps = (state) => {
    return {

    }
}

let actionCreators = {
    addNewPost: addPostActionCreator,
}

const NewPostContainer = connect(mapStateToProps, actionCreators)(NewPost);

export default NewPostContainer;
