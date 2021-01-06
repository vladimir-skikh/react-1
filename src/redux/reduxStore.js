import { combineReducers, createStore } from "redux";
import newsReducer from "./newsPageReducer";
import messagesReducer from "./messagesPageReducer";
import followReducer from "./followReducer";


let reducers = combineReducers({
    newsReducer,
    messagesReducer,
    followReducer,
});

let store = createStore(reducers);

export default store;
