import { DndContext, closestCorners } from "@dnd-kit/core";

const DndProvider = ({children, onDragEnd})=>{
    return(
        <DndContext onDragEnd={onDragEnd} collisionDetection={closestCorners}>
            {children}
        </DndContext>
    )
}

export default DndProvider;