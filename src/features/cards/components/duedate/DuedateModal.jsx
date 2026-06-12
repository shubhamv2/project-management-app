import Modal from "../../../../components/Modal";
import useModal from "../../../modal/hooks/useModal";
import Input from "../../../../components/Input";
import Button from "../../../../components/Button";
import { useState } from "react";
import useBoard from "../../../board/hooks/useBoard";
const DuedataModal = ({modal}) => {
    const {state} = useBoard();
    const dueDate = state.cards[modal.modalData].dueDate;
    const { closeModal } = useModal();
    const [date, setDate] = useState(dueDate);
    const {dueDateChange} = useBoard();

    return (
        <Modal isOpen={true} onClose={closeModal} title="Set Deadline">
            <div className="space-y-6">
                <Input label="Deadline" placeholder="Set deadline" value={date} onChange={(e)=>setDate(e.target.value)} type="date" name="date"/>
                <div className="flex gap-4 justify-end">
                    <Button className="bg-red-500!">Cancel</Button>
                    <Button onClick={()=>{dueDateChange(modal.modalData,date); closeModal()}}>Set Deadline</Button>
                </div>
            </div>

        </Modal>
    )
}

export default DuedataModal;