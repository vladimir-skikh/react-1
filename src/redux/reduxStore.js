import { combineReducers, createStore } from "redux";
import newsReducer from "./newsPageReducer";
import messagesReducer from "./messagesPageReducer";
import followReducer from "./followReducer";
import usersReducer from "./usersPageReducer";
import userProfileReducer from "./userProfileReducer";


let reducers = combineReducers({
    newsReducer,
    messagesReducer,
    followReducer,
    usersReducer,
    userProfileReducer,
});

let store = createStore(reducers);

export default store;
