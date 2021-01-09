import { combineReducers, createStore } from "redux";
import newsReducer from "./newsPageReducer";
import messagesReducer from "./messagesPageReducer";
import followReducer from "./followReducer";
import usersReducer from "./usersPageReducer";


let reducers = combineReducers({
    newsReducer,
    messagesReducer,
    followReducer,
    usersReducer,
});

let store = createStore(reducers);

export default store;
