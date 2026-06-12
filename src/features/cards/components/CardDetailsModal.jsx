import Modal from "../../../components/Modal";
import useModal from "../../modal/hooks/useModal";
import useBoard from "../../board/hooks/useBoard";
import { modalTypes } from "../../modal/data/modalTypes";
import { Plus, User, UserCircle, UserPlus } from "lucide-react";
import { useState, useRef } from "react";
import CardLabels from "./CardLabels";
import CommentBar from "./comment/CommentBar";
import SidebarActions from "./SidebarActions";
import SubHeader from "./SubHeader";
import ChecklistItem from "./checklist/ChecklistItem";
import ChecklistContainer from "./checklist/ChecklistContainer";
import ChecklistTracker from "./checklist/ChecklistTracker";
import AddChecklist from "./checklist/AddChecklist";
import CommentContainer from "./comment/CommentContainer";
const CardDetailsModal = ({ modal }) => {
    const { state, addCheckList, toggleCheckList } = useBoard();
    const { closeModal, openModal } = useModal();
    const [label, setLabel] = useState("");
    const [showCheckListInput, setShowCheckListInput] = useState(false);

    if (modal.modalType !== modalTypes.CARD_DETAILS) {
        return null;
    }

    const card = state.cards[modal.modalData.cardId];
    if (!card) return null;


    const handelAddChecklist = () => {
        if (!label) return;
        addCheckList(card.id, label);
        setShowCheckListInput(false);
        setLabel("");
    }

    const totalCheckLists = card.checkLists.length;
    const completedCheckLists = card.checkLists.filter(checkList => checkList.isCompleted === true).length;

    return (
        <Modal isOpen={true} onClose={closeModal} className="max-w-4xl!">
            <div className="grid grid-cols-3 gap-5 ">
                <div className="">
                    <h3 className="mb-5 text-2xl font-bold">{card.title}</h3>
                    <div className="space-y-3">
                        <CardLabels cardId={card.id} />
                        <div>
                            <SubHeader title="Description" />
                            <p className="text-sm text-slate-300">{card.description}</p>
                        </div>
                        <div>
                            <SubHeader title="Checklists" />
                            <div className="space-y-3">
                                <ChecklistContainer card={card} toggleCheckList={toggleCheckList} />
                                <AddChecklist label={label} setLabel={setLabel} handelAddChecklist={handelAddChecklist} showCheckListInput={showCheckListInput} setShowCheckListInput={setShowCheckListInput} />
                                <ChecklistTracker totalCheckLists={totalCheckLists} completedCheckLists={completedCheckLists} />
                            </div>
                        </div>

                        <CommentBar cardId={card.id} />
                    </div>
                </div>

                <div className="space-y-5">
                    <div>
                        <SubHeader title="Members" />
                        <div className="flex gap-2">
                            {
                                card.members.map(card => (<span title={card.name} className="w-10 text-2xl p-2 font-semibold h-10 cursor-pointer bg-purple-500 flex items-center justify-center rounded-full">
                                    {card.name.slice(0, 1)}
                                </span>))
                            }
                            <button onClick={() => openModal(modalTypes.ADD_MEMBER, { card })} title="Add Member" className="w-10 font-semibold h-10 cursor-pointer bg-blue-500 flex items-center justify-center rounded-full">
                                <Plus />
                            </button>
                        </div>
                    </div>
                    <div>
                        <SubHeader title="Comments" />
                        <CommentContainer comments={card.comments} />
                    </div>
                </div>

                <SidebarActions cardId={card.id} setShowCheckListInput={setShowCheckListInput} />
            </div>

        </Modal>
    )
}
export default CardDetailsModal;