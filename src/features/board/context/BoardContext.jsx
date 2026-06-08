import { createContext, useEffect, useReducer, useState } from "react";
import { mockList } from "../../lists/data/mockList";
import { mockBoards } from "../data/mockBoards";
import { boardReducer } from "../reducers/boardReducer";
import { boardActions } from "../constant/boardActions";


export const BoardContext = createContext();

const initialState = {
    boards: mockBoards,
    lists: mockList,
    cards: [],
}
export const BoardProvider = ({ children }) => {
    const [pmData, setPmData] = useState(() => {
        const data = localStorage.getItem('pmData');
        return data ? JSON.parse(data) : initialState;
    })
    const [state, dispatch] = useReducer(boardReducer, pmData);


    const createBoard = ({ title, color }) => {
        const newBoard = {
            id: crypto.randomUUID(),
            title,
            color,
            listIds: [],
            createdAt: new Date().toISOString(),
        }
        dispatch({
            type: boardActions.CREATE_BOARD,
            payload: newBoard,
        })
    }

    const createList = ({boardId, title}) =>{
        const newList = {
            id:crypto.randomUUID(),
            title,
            cardIds:[],
            createdAt: new Date().toISOString(),
        }
        dispatch({
            type:boardActions.CREATE_LIST,
            payload:{
                boardId: boardId,
                newList,
            }
        })
    }


    useEffect(()=>{
        localStorage.setItem('pmData',JSON.stringify(state))
    },[state]);
    return (

        <BoardContext.Provider value={{ state, createBoard,createList }}>
            {children}
        </BoardContext.Provider>
    )
}