import Modal from "../../../components/Modal";
import useModal from "../../modal/hooks/useModal";
import useBoard from "../../board/hooks/useBoard";
import { modalTypes } from "../../modal/data/modalTypes";
import {  User, UserCircle} from "lucide-react";
import { useState, useRef } from "react";
import CardLabels from "./CardLabels";
import CommentBar from "./CommentBar";
import SidebarActions from "./SidebarActions";
import SubHeader from "./SubHeader";
import ChecklistItem from "./checklist/ChecklistItem";
import ChecklistContainer from "./checklist/ChecklistContainer";
import ChecklistTracker from "./checklist/ChecklistTracker";
import AddChecklist from "./checklist/AddChecklist";
import CommentContainer from "./comment/CommentContainer";
const CardDetailsModal = () => {
    const { state, addCheckList, toggleCheckList } = useBoard();
    const { modal, closeModal } = useModal();
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
                        <CardLabels />
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

                        <CommentBar cardId={card.id}/>
                    </div>
                </div>

                <div className="space-y-5">
                    <div>
                        <SubHeader title="Members" />
                        <div className="flex gap-2">
                            <span><UserCircle /></span>
                            <span><UserCircle /></span>
                            <span><UserCircle /></span>
                        </div>
                    </div>
                    <div>
                        <SubHeader title="Comments"/>
                        <CommentContainer comments={card.comments}/>
                    </div>
                </div>

                <SidebarActions cardId={card.id} setShowCheckListInput={setShowCheckListInput} />
            </div>

        </Modal>
    )
}
export default CardDetailsModal;