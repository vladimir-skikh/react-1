import { AppStateType } from './reduxStore';
import { ThunkAction } from "redux-thunk";
import { checkAuthThunkCreator } from "./authReducer";
import { InitialAppReducerStateType } from "./types/types";

const SET_INITIALIZED = 'messege-me/appReducer/SET-INITIALIZED';

let initialState: InitialAppReducerStateType = {
    initialized: false,
}

const appReducer = (state = initialState, action: ActionsType): InitialAppReducerStateType => {
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

type ActionsType = setInitializedActionType
/** --------------------------- */

/** --------Action creators---------- */
export const setInitializedCreator = (): setInitializedActionType => {
    let action: setInitializedActionType = {
        type: SET_INITIALIZED,
    }
    return action;
}
/** --------------------------------- */
type ThunkCreatorsType = ThunkAction<Promise<void>, AppStateType, unknown, ActionsType>

export const initializeApp = (): ThunkCreatorsType => async (dispatch) => {
    let checkAuthPromise =  dispatch(checkAuthThunkCreator());

    Promise.all([checkAuthPromise]).then( () => {
        dispatch(setInitializedCreator());
    })
}

export default appReducer;