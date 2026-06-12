import Button from "../../../components/Button";
import Modal from "../../../components/Modal";
import useBoard from "../../board/hooks/useBoard";
import { modalTypes } from "../../modal/data/modalTypes";
import useModal from "../../modal/hooks/useModal";

const ConfimDeleteModal = ({modal}) =>{
    const {closeModal} = useModal();
    const {deleteCard} = useBoard();
    if(modal.modalType !== modalTypes.CARD_DELETE) return null;
    return(
        <Modal isOpen={true} onClose={closeModal} title="Delete Card">
            <div className="space-y-3">
                <h1>Are sure about deleting card?</h1>
                <div className="flex justify-end gap-4">
                    <Button onClick={()=>{deleteCard(modal.modalData); closeModal()}} className="bg-red-500!">Delete</Button>
                    <Button onClick={closeModal}>Cancel</Button>
                </div>
            </div>
        </Modal>
    )
}

export default ConfimDeleteModal;