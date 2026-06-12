import useBoard from "../features/board/hooks/useBoard";
import ListContainer from "../features/lists/components/ListContainer";
import { useParams } from "react-router-dom";
import CreateCardModal from '../features/cards/components/CreateCardModal';
import DndProvider from "../features/dnd/DndProvider";
import { findListForCard } from "../features/dnd/handler";
import { useState } from "react";
const BoardPage = () =>{
    const {boardId} = useParams();
    const {state, createList, createCard, moveCard} = useBoard();
    const board = state.boards.find(board=>board.id === boardId);
    if(!board) return (<div className="p-20">Board not found</div>)
    const lists = board.listIds.map(listId=>state.lists[listId]);

    const handleOnDrag = (event) =>{
        const {active, over} = event;
        if(!over) return;
        const sourceList = findListForCard(state,active.id);
        
        const destinationList = state.lists[over.id]?state.lists[over.id]:findListForCard(state, over.id);
        if(!sourceList || !destinationList) return;
        
        const sourceIndex = sourceList.cardIds.indexOf(active.id);
        const destinationIndex = destinationList.cardIds.indexOf(over.id);
        
        moveCard({
            cardId:active.id,
            sourceListId:sourceList.id,
            destinationListId:destinationList.id,
            sourceIndex,
            destinationIndex:destinationIndex === -1?destinationList.cardIds.length:destinationIndex,
        })

    }
    

    return(
        <div className="">
            <h2 className="text-4xl font-bold mb-8">Manage workflow</h2>
            <DndProvider onDragEnd={handleOnDrag} cards={state.cards}>
                <ListContainer lists={lists}  
                board={board} 
                cards={state.cards}  />
            </DndProvider>
            
        </div>
    )
}


export default BoardPage;