import { createContext, useEffect, useReducer, useState } from "react";
import { mockList } from "../../lists/data/mockList";
import { mockBoards } from "../data/mockBoards";
import { boardReducer } from "../reducers/boardReducer";
import { boardActions } from "../constant/boardActions";
import useAuth from '../../auth/hooks/useAuth'
import { mockCard } from "../../cards/data/mockCard";
export const BoardContext = createContext();

const initialState = {
    boards: [],
    lists: {},
    cards: {},
}
export const BoardProvider = ({ children }) => {
    const [pmData, setPmData] = useState(() => {
        const data = localStorage.getItem('pmData');
        return data ? JSON.parse(data) : initialState;
    })
    const {user} = useAuth();
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

    const createCard = ({listId, title}) =>{
        const newCard = {
            id:crypto.randomUUID(),
            title,
            createdAt: new Date().toISOString(),
            createdBy: user.id,
            description:"",
            labels:[],
            checkLists:[],
            memberIds:[],
            activities:[],
            comments:[],
            dueDate: new Date().toISOString(),

        }
        dispatch({
            type:boardActions.CREATE_CARD,
            payload:{
                listId,
                newCard,
            }
        })
    }
    const moveCard = (data)=>{
        dispatch({
            type:boardActions.MOVE_CARD,
            payload:data,
        })
    }


    useEffect(()=>{
        localStorage.setItem('pmData',JSON.stringify(state))
    },[state]);
    return (

        <BoardContext.Provider value={{ state, createBoard,createList, createCard, moveCard }}>
            {children}
        </BoardContext.Provider>
    )
}