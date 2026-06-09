import useBoard from "../features/board/hooks/useBoard";
import ListContainer from "../features/lists/components/ListContainer";
import { useParams } from "react-router-dom";
import CreateListModal from "../features/lists/components/CreateListModal";
import CreateCardModal from '../features/cards/components/CreateCardModal'
import { useState } from "react";
const BoardPage = () =>{
    const {boardId} = useParams();
    const {state, createList, createCard} = useBoard();
    const board = state.boards.find(board=>board.id === boardId);
    if(!board) return (<div className="p-20">Board not found</div>)
    const lists = board.listIds.map(listId=>state.lists[listId]);
    const [modalOpen, setModalOpen] = useState(false);
    const [listTitle, setListTitle] = useState("");
    const [cardModalOpen, setCardModalOpen] = useState(false);
    const [selectedList, setSelectedList] = useState(null);
    
    const handleCreateList = () =>{
        createList({boardId:board.id, title:listTitle})
        setModalOpen(false);
        setListTitle("");
    }


    
    
    return(
        <div className="">
            <h2 className="text-4xl font-bold mb-8">Manage workflow</h2>
            <div className="">
                <ListContainer lists={lists} setModalOpen={setModalOpen} cards={state.cards} setSelectedList={setSelectedList} setCardModalOpen={setCardModalOpen} />
            </div>
            <CreateListModal handleCreateList={handleCreateList} isOpen={modalOpen} onClose={()=>setModalOpen(false)} listTitle={listTitle} setListTitle={setListTitle}/>
            <CreateCardModal isOpen={cardModalOpen} onClose={setCardModalOpen} listId={selectedList?.id}/>
        </div>
    )
}


export default BoardPage;