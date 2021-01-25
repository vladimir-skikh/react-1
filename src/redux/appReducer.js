import { checkAuthThunkCreator } from "./authReducer";

const SET_INITIALIZED = 'SET-INITIALIZED';

let initialState = {
    initialized: false,
}

const appReducer = (state = initialState, action) => {
    let stateCopy;

    switch (action.type) {
        case SET_INITIALIZED: {
            stateCopy = {
                ...state,
                initialized: true,
            }
            break;
        }
        default: 
            stateCopy = {...state}
    }

    return stateCopy;
}

export const setInitializedCreator = () => {
    let action = {
        type: SET_INITIALIZED,
    }
    return action;
}

export const initializeApp = () => (dispatch) => {
    let checkAuthPromise =  dispatch(checkAuthThunkCreator());

    Promise.all([checkAuthPromise]).then( () => {
        dispatch(setInitializedCreator());
    })
}

export default appReducer;