import { Plus, User, Tag, Calendar, Trash } from "lucide-react";
import useModal from "../../modal/hooks/useModal";
import { modalTypes } from "../../modal/data/modalTypes";
const SidebarActions = ({setShowCheckListInput,cardId}) => {

    const {openModal} = useModal();

    return (
        <div className="bg-slate-700 p-4 rounded-lg  ">
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
            <button onClick={()=>openModal(modalTypes.CHANGE_DUE_DATE, cardId)} className="flex gap-2 items-center text-sm w-full p-2 rounded-lg hover:bg-slate-600">
                <Calendar size={20} />
                <span >Due Date</span>
            </button>
            <button onClick={()=>openModal(modalTypes.CARD_DELETE,cardId)} className="text-red-500 flex gap-2 items-center text-sm w-full p-2 rounded-lg hover:bg-slate-600">
                <Trash  size={20}/>
                <span>Delete</span>
            </button>
        </div>
    )
}
export default SidebarActions;