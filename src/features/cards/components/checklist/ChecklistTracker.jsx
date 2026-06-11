import { ClipboardCheck } from "lucide-react";
const ChecklistTracker = ({completedCheckLists, totalCheckLists}) => {
    return (
        <div className="flex items-center text-sm gap-1">
            <ClipboardCheck size={22} />
            <p>{completedCheckLists}/{totalCheckLists} Completed</p>
        </div>
    )
}

export default ChecklistTracker;