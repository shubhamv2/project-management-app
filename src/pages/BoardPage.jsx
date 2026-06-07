import useBoard from "../features/board/hooks/useBoard";
import ListContainer from "../features/lists/components/ListContainer";
import { useParams } from "react-router-dom";
const BoardPage = () =>{
    const {boardId} = useParams();
    const {state} = useBoard();
    const board = state.boards.find(board=>board.id === boardId);
    if(!board) return (<div className="p-20">Board not found</div>)
    const lists = board.listIds.map(listId=>state.lists[listId]);
    return(
        <div className="">
            <h2 className="text-4xl font-bold mb-8">Manage workflow</h2>
            <div className="">
                <ListContainer lists={lists}/>
            </div>
        </div>
    )
}


export default BoardPage;