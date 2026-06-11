import { Plus, User, Tag, Calendar, Trash } from "lucide-react";
const SidebarActions = ({setShowCheckListInput}) => {
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
            <button className="flex gap-2 items-center text-sm w-full p-2 rounded-lg hover:bg-slate-600">
                <Calendar size={20} />
                <span >Due Date</span>
            </button>
            <button className="text-red-500 flex gap-2 items-center text-sm w-full p-2 rounded-lg hover:bg-slate-600">
                <Trash  size={20}/>
                <span>Delete</span>
            </button>
        </div>
    )
}
export default SidebarActions;