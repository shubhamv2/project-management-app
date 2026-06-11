import { Check, X } from "lucide-react";
const AddChecklist = ({showCheckListInput,setLabel,label, handelAddChecklist, setShowCheckListInput}) => {
    return (
        <div>
            {showCheckListInput && (
                <div className="flex items-center gap-2">
                    <input className="w-4 h-4" type="checkbox" disabled />
                    <input value={label} onChange={(e) => setLabel(e.target.value)} type="text" placeholder="Checklist title" className="outline-none bg-slate-600 py-1 px-2 rounded-lg" />
                    <button className="text-green-400" onClick={handelAddChecklist}><Check /></button>
                    <button className="text-red-400" onClick={() => setShowCheckListInput(false)}><X /></button>
                </div>
            )
            }
        </div>
    )
}
export default AddChecklist;