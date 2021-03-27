import { connect } from "react-redux";
import NewPost from "./NewPost"
import {actions} from '../../../redux/newsPageReducer'

let mapStateToProps = (state) => {
    return {

    }
}

let actionCreators = {
    addNewPost: actions.addPostActionCreator,
}

const NewPostContainer = connect(mapStateToProps, actionCreators)(NewPost);

export default NewPostContainer;
