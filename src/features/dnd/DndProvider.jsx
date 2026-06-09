import { DndContext, DragOverlay, closestCorners } from "@dnd-kit/core";
import { useState } from "react";
import CardItem from "../cards/components/CardItem";

const DndProvider = ({children, onDragEnd, cards})=>{
    const [activeCardId, setActiveCardId] = useState(null);
    const activeCard = cards?.[activeCardId];
    return(
        <DndContext onDragStart={(event)=>{setActiveCardId(event.active.id)}} onDragEnd={(event)=>{onDragEnd(event); setActiveCardId(null)}} collisionDetection={closestCorners}>
            {children}
            <DragOverlay>
                {
                    activeCard?(
                        <CardItem card={activeCard}/>
                    ):null
                }
            </DragOverlay>
        </DndContext>
    )
}

export default DndProvider;