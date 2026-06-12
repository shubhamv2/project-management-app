import { SquarePlus } from "lucide-react";
import BoardContainer from "../features/board/components/BoardContainer";
import useBoard from "../features/board/hooks/useBoard";
import useModal from "../features/modal/hooks/useModal";
import { modalTypes } from "../features/modal/data/modalTypes";
const HomePage = () => {
    const { state } = useBoard();
    const {openModal} = useModal();
    return (
        <div>
            <div className="flex items-center justify-between mb-8">
                <h1 className="text-4xl font-bold ">Project Overview</h1>
                <button onClick={()=>openModal(modalTypes.CREATE_BOARD)} className="text-green-500"><SquarePlus size={40} strokeWidth={1} /></button>
            </div>
            <BoardContainer boards={state?.boards} />
        </div>
    )
}


export default HomePage;