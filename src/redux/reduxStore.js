import { applyMiddleware, combineReducers, createStore } from "redux";
import newsReducer from "./newsPageReducer";
import messagesReducer from "./messagesPageReducer";
import followReducer from "./followReducer";
import usersReducer from "./usersPageReducer";
import userProfileReducer from "./userProfileReducer";
import authReducer from "./authReducer";
import thunkMiddleware from 'redux-thunk';


let reducers = combineReducers({
    newsReducer,
    messagesReducer,
    followReducer,
    usersReducer,
    userProfileReducer,
    authReducer,
});

let store = createStore(reducers, applyMiddleware(thunkMiddleware));

export default store;
