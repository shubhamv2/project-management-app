import { createContext, useReducer } from "react";

import { mockBoards } from "../data/mockBoards";
import { boardReducer } from "../reducers/boardReducer";

export const BoardContext = createContext();

const initialState = {
    boards:mockBoards,
    lists:[],
    cards:[],
}
export const BoardProvider = ({children}) =>{
    const [state, dispatch] = useReducer(boardReducer, initialState);
    return(
        <BoardContext.Provider value={{state, dispatch}}>
            {children}
        </BoardContext.Provider>
    )
}