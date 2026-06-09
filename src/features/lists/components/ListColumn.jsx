import { Plus } from "lucide-react";
import ColumnHeader from "./ColumnHeader";
import CardContainer from "../../cards/components/CardContainer";

import { useDroppable } from "@dnd-kit/core";
const ListColumn = ({list,cards,setCardModalOpen, setSelectedList}) =>{
    const cardItems = list.cardIds.map(cardId=>cards[cardId]);
    const {setNodeRef} = useDroppable({id:list.id})
    return(
        <div ref={setNodeRef} className="bg-slate-700 p-6 rounded-lg max-w-78 space-y-4 min-h-58">
            <ColumnHeader title={list?.title}/>
            <button onClick={()=>{setCardModalOpen(true); setSelectedList(list)}} className="flex gap-2 w-full bg-slate-900 p-2 rounded-lg"><Plus/> Add Card</button>
            <CardContainer cards={cardItems} />
        </div>
    )
}

export default ListColumn;