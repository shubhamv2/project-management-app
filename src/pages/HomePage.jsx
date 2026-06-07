import { SquarePlus } from "lucide-react";
import BoardContainer from "../features/board/components/BoardContainer";
import useBoard from "../features/board/hooks/useBoard";
import { boardActions } from "../features/board/constant/boardActions";
import { useState } from "react";
import CreateBoardModal from "../features/board/components/CreateBoardModal";
import { BOARD_COLORS } from "../features/board/constant/boardColors";
const HomePage = () =>{
    const {state, dispatch} = useBoard();
    const [title, setTitle] = useState("");
    const [modalOpen, setModalOpen] = useState(false);
    const [colorId, setColorId] = useState(BOARD_COLORS[0].id)

    const handleCreateBoard = () =>{
        dispatch({
            type:boardActions.CREATE_BOARD,
            payload:{
                id:crypto.randomUUID(),
                title,
                color:"bg-pink-600",
                listIds:[],
            }
        })
    }
    return(
        <div>
            <div className="flex items-center justify-between mb-8">
                <h1 className="text-4xl font-bold ">Project Overview</h1>
                <button onClick={()=>setModalOpen(true)} className="text-green-500"><SquarePlus size={40} strokeWidth={1}/></button>
            </div>
            <BoardContainer boards={state?.boards}/>
            <CreateBoardModal isOpen={modalOpen} onClose={()=>setModalOpen(false)} boardColors={BOARD_COLORS}/>
        </div>
    )
}


export default HomePage;