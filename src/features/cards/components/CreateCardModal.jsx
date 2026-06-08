import Modal from "../../../components/Modal"

const CreateCardModal = ({isOpen, onClose}) =>{
    return(
        <Modal title="Create New Card" isOpen={isOpen} onClose={onClose}>
            card 
        </Modal>
    )
}

export default CreateCardModal;