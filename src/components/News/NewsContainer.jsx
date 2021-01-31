import { connect } from "react-redux";
import { getNews } from "../../redux/selectors/newsSelector";
import News from "./News";

let mapStateToProps = (state) => {
    return {
        postsData: getNews(state),
    }
}
let actionCreators = {}

const NewsContainer = connect(mapStateToProps, actionCreators)(News);

export default NewsContainer;
