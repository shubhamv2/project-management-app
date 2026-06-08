import { boardActions } from "../constant/boardActions";
export const boardReducer = (state, action) =>{
    switch(action.type){
        case boardActions.CREATE_BOARD:
            return {
                ...state,
                boards:[...state.boards, action.payload]
            }       
        case boardActions.CREATE_LIST:{
            const {boardId, newList} = action.payload;
            const updatedBoards = state.boards.map(board=>board.id===boardId?{...board,listIds:[...board.listIds,newList.id]}:board)
            return {
                ...state,
                boards:updatedBoards,
                lists:{
                    ...state.lists,
                    [newList.id]:newList,
                }
            }
        }
        default:
            return state;
    }
}