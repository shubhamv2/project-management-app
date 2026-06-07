import { SquarePlus } from "lucide-react";
import BoardContainer from "../features/board/components/BoardContainer";
import useBoard from "../features/board/hooks/useBoard";
import { useEffect, useState } from "react";
import CreateBoardModal from "../features/board/components/CreateBoardModal";
import { BOARD_COLORS } from "../features/board/constant/boardColors";
const HomePage = () => {
    const { state, createBoard } = useBoard();
    const [modalOpen, setModalOpen] = useState(false);

    const [boardForm, setBoardForm] = useState({
        title:"",
        selectedColor:BOARD_COLORS[0],
    })
    const handleCreateBoard = () => {
        if(!boardForm.title.trim()) return;
        createBoard({title:boardForm.title, color:boardForm.selectedColor.twClass});
        setModalOpen(false);
        setBoardForm({
            title:"",
            selectedColor:BOARD_COLORS[0],
        })
    }

    return (
        <div>
            <div className="flex items-center justify-between mb-8">
                <h1 className="text-4xl font-bold ">Project Overview</h1>
                <button onClick={() => setModalOpen(true)} className="text-green-500"><SquarePlus size={40} strokeWidth={1} /></button>
            </div>
            <BoardContainer boards={state?.boards} />
            <CreateBoardModal
                handleCreateBoard={handleCreateBoard}
                isOpen={modalOpen} onClose={() => setModalOpen(false)}
                boardColors={BOARD_COLORS} boardForm={boardForm} setBoardForm={setBoardForm}/>
        </div>
    )
}


export default HomePage;