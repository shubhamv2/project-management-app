import Modal from "../../../components/Modal";
import useModal from "../../modal/hooks/useModal";
import useBoard from "../../board/hooks/useBoard";
import { modalTypes } from "../../modal/data/modalTypes";
import { Calendar, Check, ClipboardCheck, Plus, Tag, User, X } from "lucide-react";
import { useState, useRef } from "react";
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
        <Modal isOpen={true} onClose={closeModal} className="max-w-xl">
            <div className="flex gap-4">
                <div className="flex-1">

                    <h3 className="mb-6 text-2xl font-bold">{card.title}</h3>
                    <div className="space-y-5">
                        <div className="grid grid-cols-4 text-xs gap-2">
                            <span className="bg-amber-400 p-0.5 text-amber-600 rounded-lg text-center">Urgent</span>
                            <span className="bg-amber-400 p-0.5 text-amber-600 rounded-lg text-center">Urgent</span>
                            <span className="bg-amber-400 p-0.5 text-amber-600 rounded-lg text-center">Urgent</span>
                            <span className="bg-amber-400 p-0.5 text-amber-600 rounded-lg text-center">Urgent</span>
                        </div>

                        <div>
                            <h4 className="font-semibold mb-2">Description</h4>
                            <p className="text-sm text-slate-300">{card.description}</p>
                        </div>

                        <div>
                            <h4 className="font-semibold mb-2">Checklist</h4>
                            <div className="text-xs space-y-3">

                                {
                                    state.cards[card.id].checkLists.map(checkList => (
                                        <div key={checkList.id} className="flex items-center gap-2">
                                            <input onChange={() => toggleCheckList(card.id, checkList.id)} id={checkList.id} checked={checkList.isCompleted} className="w-4 h-4" type="checkbox" />
                                            <label className="cursor-pointer" htmlFor={checkList.id}>{checkList.label}</label>
                                        </div>
                                    ))
                                }

                                {
                                    showCheckListInput && (
                                        <div className="flex items-center gap-2">
                                            <input className="w-4 h-4" type="checkbox" disabled />
                                            <input value={label} onChange={(e) => setLabel(e.target.value)} type="text" placeholder="Checklist title" className="outline-none bg-slate-600 py-1 px-2 rounded-lg" />
                                            <button className="text-green-400" onClick={handelAddChecklist}><Check /></button>
                                            <button className="text-red-400" onClick={() => setShowCheckListInput(false)}><X /></button>
                                        </div>
                                    )
                                }

                                <div className="flex items-center text-sm gap-1">
                                    <ClipboardCheck size={22} />
                                    <p>{completedCheckLists}/{totalCheckLists} Completed</p>
                                </div>


                            </div>
                        </div>


                        <div>
                            <h4 className="font-semibold mb-2">Members</h4>
                            <div>

                            </div>
                        </div>


                    </div>
                </div>


                <div className="bg-slate-700 p-4 rounded-lg w-50 h-fit">
                    <button onClick={() => setShowCheckListInput(true)} className="flex gap-2 items-center text-sm w-full hover:bg-slate-600 p-2 rounded-lg">
                        <Plus />
                        <span size={20}>Add to list</span>
                    </button>
                    <button className="flex gap-2 items-center text-sm w-full p-2 rounded-lg hover:bg-slate-600">
                        <User />
                        <span size={20}>Assign</span>
                    </button>

                    <button className="flex gap-2 items-center text-sm w-full p-2 rounded-lg hover:bg-slate-600">
                        <Tag size={20} />
                        <span >Labels</span>
                    </button>
                    <button className="flex gap-2 items-center text-sm w-full p-2 rounded-lg hover:bg-slate-600">
                        <Calendar size={20} />
                        <span >Due Date</span>
                    </button>
                </div>
            </div>

        </Modal>
    )
}
export default CardDetailsModal;