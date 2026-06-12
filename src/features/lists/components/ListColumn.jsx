import { Plus } from "lucide-react";
import ColumnHeader from "./ColumnHeader";
import CardContainer from "../../cards/components/CardContainer";

import { useDroppable } from "@dnd-kit/core";
import useModal from "../../modal/hooks/useModal";
import { modalTypes } from "../../modal/data/modalTypes";
const ListColumn = ({list,cards}) =>{
    const cardItems = list.cardIds.map(cardId=>cards[cardId]);
    const {setNodeRef} = useDroppable({id:list.id})
    const {openModal} = useModal();
    return(
        <div ref={setNodeRef} className="bg-slate-700 p-6 rounded-lg min-w-78 space-y-4 min-h-58">
            <ColumnHeader title={list?.title}/>
            <button onClick={()=>{openModal(modalTypes.CREATE_CARD,{listId:list.id})}} className="flex gap-2 w-full bg-slate-900 p-2 rounded-lg"><Plus/> Add Card</button>
            <CardContainer cards={cardItems} />
        </div>
    )
}

export default ListColumn;