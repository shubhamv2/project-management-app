import CardItem from "./CardItem";
import { SortableContext, verticalListSortingStrategy } from "@dnd-kit/sortable";
const CardContainer = ({ cards }) => {
    return (
        <div className="flex flex-col gap-3">
            <SortableContext strategy={verticalListSortingStrategy} items={cards.map(card=>card.id)}>
                {
                    cards.map(card => (

                        <CardItem key={card.id} card={card} />
                    ))
                }
            </SortableContext>
        </div>
    )
}
export default CardContainer;