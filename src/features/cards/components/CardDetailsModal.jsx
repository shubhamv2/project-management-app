import Modal from "../../../components/Modal";
import useModal from "../../modal/hooks/useModal";
import useBoard from "../../board/hooks/useBoard";
import { modalTypes } from "../../modal/data/modalTypes";
const CardDetailsModal = () =>{
    const {state} = useBoard();
    const {modal, closeModal} = useModal();
    if(modal.modalType !== modalTypes.CARD_DETAILS){
        return null;
    }

    const card = state.cards[modal.modalData.cardId];
    if(!card) return null;

    return(
        <Modal isOpen={true} onClose={closeModal}>
            <div>
                <h3>{card.title}</h3>
                
            </div>

        </Modal>
    )
}
export default CardDetailsModal;