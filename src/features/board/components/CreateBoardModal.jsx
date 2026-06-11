import { useState } from "react";
import Modal from "../../../components/Modal";
import BoardColorSelector from "./BoardColorSelector";
import useModal from "../../modal/hooks/useModal";
import { modalTypes } from "../../modal/data/modalTypes";
import { BOARD_COLORS } from "../constant/boardColors";
import useBoard from "../hooks/useBoard";

const CreateBoardModal = ({modal}) => {
    const [boardForm, setBoardForm] = useState({
        title: "",
        selectedColor: BOARD_COLORS[0],
    })
    const {closeModal } = useModal();
    const {createBoard} = useBoard();
    if (modal.modalType !== modalTypes.CREATE_BOARD) return null;
    
    const handleCreateBoard = () => {
        if (!boardForm.title.trim()) return;
        createBoard({ title: boardForm.title, color: boardForm.selectedColor.twClass });
        closeModal();
        setBoardForm({
            title: "",
            selectedColor: BOARD_COLORS[0],
        })
    }


    const handleColorSelect = (color) => {
        setBoardForm((prev) => ({ ...prev, selectedColor: color }));
    }
    return (
        <Modal title="Create New Board" isOpen={true} onClose={closeModal}>
            <div className="space-y-4">
                <div>
                    <label className="block mb-1 text-md" htmlFor="title">Board Title</label>
                    <input value={boardForm.title} onChange={(e) => setBoardForm(prev => ({ ...prev, title: e.target.value }))} className="w-full outline-none bg-slate-700 p-3 rounded-lg" type="text" placeholder="eg. Marketing campaign Q4" />
                </div>
                <BoardColorSelector boardColors={BOARD_COLORS} selectedColor={boardForm.selectedColor} handleColorSelect={handleColorSelect} />

                <div className="flex gap-4 mt-10">
                    <button className="bg-red-500 p-2 rounded-lg" onClick={closeModal}>Cancel</button>
                    <button onClick={handleCreateBoard} className="bg-blue-500 p-2 rounded-lg">Create Board</button>
                </div>
            </div>
        </Modal>
    )
}

export default CreateBoardModal;