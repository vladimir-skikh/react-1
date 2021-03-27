import { applyMiddleware, combineReducers, createStore } from "redux";
import newsReducer from "./newsPageReducer";
import messagesReducer from "./messagesPageReducer";
import followReducer from "./followReducer";
import usersReducer from "./usersPageReducer";
import userProfileReducer from "./userProfileReducer";
import authReducer from "./authReducer";
import appReducer from "./appReducer";
import thunkMiddleware from 'redux-thunk';
import { reducer as formReducer } from 'redux-form';
import { composeWithDevTools } from 'redux-devtools-extension';


let rootReducer = combineReducers({
    appReducer,
    newsReducer,
    messagesReducer,
    followReducer,
    usersReducer,
    userProfileReducer,
    authReducer,
    form: formReducer,
});

type rootReducerType = typeof rootReducer;
export type AppStateType = ReturnType<rootReducerType>;

type PropertiesTypes<T> = T extends {[key: string]: infer U} ? U : never;
export type InferActionsTypes<T extends {[key: string]: (...args: any[]) => any}> = ReturnType<PropertiesTypes<T>>;

/** Подключение REDUX DevTools */
const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunkMiddleware)));

export default store;
