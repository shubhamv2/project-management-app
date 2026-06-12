
import { X } from "lucide-react";
import Modal from "../../../../components/Modal";
import useBoard from "../../../board/hooks/useBoard";
import useModal from "../../../modal/hooks/useModal";
import Button from "../../../../components/Button";
const AssigneesModal = ({ modal }) => {
    const { closeModal } = useModal();
    const { state, removeMember } = useBoard();
    const totalMembers = state.cards[modal.modalData].members.length
    return (
        <Modal isOpen={true} onClose={closeModal} title="Members">
            <div className="flex gap-4 flex-col">
                {
                    totalMembers !==0? state.cards[modal.modalData].members.map(member => (
                        <div key={member.id} className=" cursor-pointer flex justify-between">
                            <div className="flex items-center gap-4">

                                <span title={member.name} className="w-10 text-2xl p-2 font-semibold h-10 cursor-pointer bg-purple-500 flex items-center justify-center rounded-full">
                                    {member.name.slice(0, 1)}
                                </span>

                                <h4>{member.name}</h4>
                            </div>
                            <Button onClick={()=>removeMember(modal.modalData, member.id)} className="p-0 bg-transparent"><X/></Button>
                        </div>
                    )):
                    <div>
                        No member assigned
                    </div>
                }
            </div>
        </Modal>
    )
}

export default AssigneesModal;