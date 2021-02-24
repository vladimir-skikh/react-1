import { checkAuthThunkCreator } from "./authReducer";
import { InitialAppReducerStateType } from "./types/types";

const SET_INITIALIZED = 'messege-me/appReducer/SET-INITIALIZED';

let initialState: InitialAppReducerStateType = {
    initialized: false,
}

const appReducer = (state = initialState, action: any): InitialAppReducerStateType => {
    let stateCopy: InitialAppReducerStateType;

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

/** ------Action Types--------- */
type setInitializedActionType = {
    type: typeof SET_INITIALIZED
}
/** --------------------------- */

/** --------Action creators---------- */
export const setInitializedCreator = (): setInitializedActionType => {
    let action: setInitializedActionType = {
        type: SET_INITIALIZED,
    }
    return action;
}
/** --------------------------------- */

export const initializeApp = () => (dispatch: any) => {
    let checkAuthPromise =  dispatch(checkAuthThunkCreator());

    Promise.all([checkAuthPromise]).then( () => {
        dispatch(setInitializedCreator());
    })
}

export default appReducer;