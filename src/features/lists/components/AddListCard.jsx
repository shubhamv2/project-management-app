import { Plus } from "lucide-react";

const AddListCard = ({setModalOpen}) =>{
    return(
        <div className="min-w-68 rounded-lg bg-slate-700 overflow-hidden min-h-58 flex flex-col">
            <button onClick={()=>setModalOpen(true)} className="bg-slate-400 flex-1 flex items-center justify-center">
                <Plus size={40}/>
            </button>
            <span className="flex-1 flex items-center justify-center">
                Create List
            </span>
        </div>
    )
}
export default AddListCard;