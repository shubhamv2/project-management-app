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

    const createCard = ({listId, data}) =>{
        const newCard = {
            id:crypto.randomUUID(),
            title:data.title,
            createdAt: new Date().toISOString(),
            createdBy: user.id,
            description:data.description,
            labels:[],
            checkLists:[],
            memberIds:[],
            activities:[],
            comments:[],
            dueDate: data.dueDate,

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



    const addCheckList = (cardId,label="") =>{
        const newCheckList = {
            id:crypto.randomUUID(),
            label,
            isCompleted:false,
            addedBy: user.name,
        }
        dispatch({
            type:boardActions.ADD_CHECK_LIST,
            payload:{
                cardId,
                newCheckList,
            },
        })
    }

    const toggleCheckList = (cardId, checkListId) =>{
        dispatch({
            type:boardActions.TOGGLE_CHECK_LIST,
            payload:{
                cardId,
                checkListId,
            },
        })
    }

    const deleteCard = (cardId) =>{
        dispatch({
            type:boardActions.DELETE_CARD,
            payload:cardId,
        })
    }


    const addComment = (comment,cardId) =>{
        const newComment = {
            id:crypto.randomUUID(),
            title:comment,
            user:user.name,
            createdAt: new Date().toISOString(),
        }
        dispatch({
            type:boardActions.ADD_COMMENT,
            payload:{
                cardId,
                newComment,
            },
        })
    }

    useEffect(()=>{
        localStorage.setItem('pmData',JSON.stringify(state))
    },[state]);
    return (

        <BoardContext.Provider value={{ state, createBoard,
        createList, createCard, 
        moveCard, addCheckList, 
        toggleCheckList, deleteCard, addComment }}>
            {children}
        </BoardContext.Provider>
    )
}