import Modal from "../../../components/Modal";
import useBoard from "../../board/hooks/useBoard";
import { modalTypes } from "../../modal/data/modalTypes";
import useModal from "../../modal/hooks/useModal";

const ConfimDeleteModal = ({modal}) =>{
    const {closeModal} = useModal();
    const {deleteCard} = useBoard();
    if(modal.modalType !== modalTypes.CARD_DELETE) return null;
    console.log(modal)
    return(
        <Modal isOpen={true} onClose={closeModal} title="Delete Card">
            <div className="space-y-3">
                <h1>Are sure about deleting card?</h1>
                <div className="flex justify-end gap-4">
                    <button onClick={()=>{deleteCard(modal.modalData); closeModal()}} className="bg-red-500 px-2 py-1 rounded-lg">Delete</button>
                    <button  className="bg-blue-500 px-2 py-1 rounded-lg" onClick={closeModal}>Cancel</button>
                </div>
            </div>
        </Modal>
    )
}

export default ConfimDeleteModal;