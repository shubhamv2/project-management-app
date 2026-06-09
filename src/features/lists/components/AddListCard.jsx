import { Plus } from "lucide-react";
import useModal from "../../modal/hooks/useModal";
import { modalTypes } from "../../modal/data/modalTypes";
const AddListCard = ({board}) =>{
    const {modal,openModal} = useModal();
    return(
        <div className="min-w-78 rounded-lg bg-slate-700 overflow-hidden min-h-58 flex flex-col">
            <button onClick={()=>{openModal(modalTypes.CREATE_LIST, {boardId:board.id});}} className="bg-slate-400 flex-1 flex items-center justify-center">
                <Plus size={40}/>
            </button>
            <span className="flex-1 flex items-center justify-center">
                Create List
            </span>
        </div>
    )
}
export default AddListCard;