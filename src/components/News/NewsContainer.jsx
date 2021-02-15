import { connect } from "react-redux";
import { compose } from "redux";
import { getNews } from "../../redux/selectors/newsSelector";
import News from "./News";
import withAuthRedirect from "../hoc/withAuthRedirect";

let mapStateToProps = (state) => {
    return {
        postsData: getNews(state),
    }
}
let actionCreators = {}

const NewsContainer = compose(
    withAuthRedirect,
    connect(mapStateToProps, actionCreators),
)(News);

export default NewsContainer;
