import CardItem from "./CardItem";
const CardContainer = ({cards}) =>{
    return(
        <div className="flex flex-col gap-3">
            {
                cards.map(card=>(
                    
                    <CardItem key={card.id} card={card}/>
                ))
            }
        </div>
    )
}
export default CardContainer;