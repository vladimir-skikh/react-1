import { combineReducers, createStore } from "redux";
import newsReducer from "./newsPageReducer";
import messagesReducer from "./messagesPageReducer";
import followReducer from "./followReducer";
import usersReducer from "./usersPageReducer";
import userProfileReducer from "./userProfileReducer";
import authReducer from "./authReducer";


let reducers = combineReducers({
    newsReducer,
    messagesReducer,
    followReducer,
    usersReducer,
    userProfileReducer,
    authReducer,
});

let store = createStore(reducers);

export default store;
