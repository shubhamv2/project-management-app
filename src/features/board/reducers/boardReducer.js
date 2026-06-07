import { boardActions } from "../constant/boardActions";
export const boardReducer = (state, action) =>{
    switch(action.type){
        case boardActions.CREATE_BOARD:
            return {
                ...state,
                boards:[...state.boards, action.payload]
            }       
        
        default:
            return state;
    }
}