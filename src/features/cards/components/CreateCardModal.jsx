import { useState } from "react";
import Modal from "../../../components/Modal"
import useBoard from "../../board/hooks/useBoard";
import useModal from "../../modal/hooks/useModal";
import { modalTypes } from "../../modal/data/modalTypes";
const CreateCardModal = ({ listId }) => {
    const [title, setTitle] = useState("")
    const { modal, closeModal } = useModal();
    const { createCard } = useBoard();


    if (modal.modalType !== modalTypes.CREATE_CARD) return null;
    const handleCreateCard = () => {
        createCard({
            title,
            listId:modal.modalData.listId,
        })
        setTitle("");
        closeModal();
    }


    return (
        <Modal title="Create New Card" isOpen={true} onClose={closeModal}>
            <div className="space-y-4">
                <div>
                    <label className="block mb-1 text-sm">Card Title</label>
                    <input value={title} onChange={(e) => setTitle(e.target.value)} className="bg-slate-700 outline-none p-3 rounded-lg w-full" type="text" placeholder="Card Title" />
                </div>
                <div className="flex gap-4 justify-end">
                    <button className="bg-red-500 p-2 rounded-lg" onClick={closeModal}>Cancel</button>
                    <button className="bg-blue-500 p-2 rounded-lg" onClick={handleCreateCard}>Create Card</button>
                </div>
            </div>
        </Modal>
    )
}

export default CreateCardModal;