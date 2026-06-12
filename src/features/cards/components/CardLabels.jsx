import useBoard from "../../board/hooks/useBoard";
const CardLabels = ({cardId}) => {
    const {state} = useBoard();
    return (
        <div className="grid grid-cols-3 text-xs gap-2">
            {
                state.cards[cardId].labels.map(label=>(
                    <span className={`${label.color} px-2 py-1 rounded-lg text-center`}>{label.title}</span>

                ))
            }

        </div>
    )
}

export default CardLabels;