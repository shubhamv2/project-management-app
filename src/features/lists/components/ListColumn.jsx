import { Plus } from "lucide-react";
import ColumnHeader from "./ColumnHeader";
import CardContainer from "../../cards/components/CardContainer";
const ListColumn = ({list}) =>{
    return(
        <div className="bg-slate-700 p-6 rounded-lg min-w-68 space-y-4 min-h-58">
            <ColumnHeader title={list?.title}/>
            <button className="flex gap-2 w-full bg-slate-600 p-2 rounded-lg"><Plus/> Add Card</button>
            <CardContainer/>
        </div>
    )
}

export default ListColumn;