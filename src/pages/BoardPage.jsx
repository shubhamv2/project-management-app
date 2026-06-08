import useBoard from "../features/board/hooks/useBoard";
import ListContainer from "../features/lists/components/ListContainer";
import { useParams } from "react-router-dom";
import CreateListModal from "../features/lists/components/CreateListModal";
import { useState } from "react";
const BoardPage = () =>{
    const {boardId} = useParams();
    const {state, createList} = useBoard();
    const board = state.boards.find(board=>board.id === boardId);
    const lists = board.listIds.map(listId=>state.lists[listId]);
    const [modalOpen, setModalOpen] = useState(false);
    const [listTitle, setListTitle] = useState("");
    
    const handleCreateList = () =>{
        createList({boardId:board.id, title:listTitle})
        setModalOpen(false);
        setListTitle("");
    }
    
    
    if(!board) return (<div className="p-20">Board not found</div>)
    return(
        <div className="">
            <h2 className="text-4xl font-bold mb-8">Manage workflow</h2>
            <div className="">
                <ListContainer lists={lists} setModalOpen={setModalOpen}/>
            </div>
            <CreateListModal handleCreateList={handleCreateList} isOpen={modalOpen} onClose={()=>setModalOpen(false)} listTitle={listTitle} setListTitle={setListTitle}/>
        </div>
    )
}


export default BoardPage;