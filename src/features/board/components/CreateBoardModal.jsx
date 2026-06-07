import { useState } from "react";
import Modal from "../../../components/Modal";
import BoardColorSelector from "./BoardColorSelector";

const CreateBoardModal = ({ isOpen, onClose, boardColors,handleCreateBoard, boardForm, setBoardForm}) => {
    const handleColorSelect = (color) =>{
        setBoardForm((prev)=>({...prev,selectedColor:color}));
    }
    return (
        <Modal title="Create New Board" isOpen={isOpen} onClose={onClose}>
            <div className="space-y-4">
                <div>
                    <label className="block mb-1 text-md" htmlFor="title">Board Title</label>
                    <input value={boardForm.title} onChange={(e)=>setBoardForm(prev=>({...prev,title:e.target.value}))} className="w-full outline-none bg-slate-700 p-3 rounded-lg" type="text" placeholder="eg. Marketing campaign Q4" />
                </div>
                <BoardColorSelector boardColors={boardColors} selectedColor={boardForm.selectedColor} handleColorSelect={handleColorSelect}/>

                <div className="flex gap-4 mt-10">
                    <button className="bg-red-500 p-2 rounded-lg" onClick={onClose}>Cancel</button>
                    <button onClick={handleCreateBoard} className="bg-blue-500 p-2 rounded-lg">Create Board</button>
                </div>
            </div>
        </Modal>
    )
}

export default CreateBoardModal;