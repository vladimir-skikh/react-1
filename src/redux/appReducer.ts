import { InferActionsTypes } from './reduxStore';
import { checkAuthThunkCreator } from "./authReducer";
import { BaseThunkType, InitialAppReducerStateType } from "./types/types";

let initialState: InitialAppReducerStateType = {
    initialized: false,
}

const appReducer = (state = initialState, action: ActionsTypes): InitialAppReducerStateType => {
    let stateCopy: InitialAppReducerStateType;

    switch (action.type) {
        case 'SET_INITIALIZED': {
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
export const actions = {
    setInitializedActionCreator: () => ({type: 'SET_INITIALIZED'} as const)
}
type ActionsTypes = InferActionsTypes<typeof actions>
/** --------------------------- */
type ThunkType = BaseThunkType<ActionsTypes>;

export const initializeApp = (): ThunkType => async (dispatch) => {
    let checkAuthPromise =  dispatch(checkAuthThunkCreator());

    Promise.all([checkAuthPromise]).then( () => {
        dispatch(actions.setInitializedActionCreator());
    })
}

export default appReducer;