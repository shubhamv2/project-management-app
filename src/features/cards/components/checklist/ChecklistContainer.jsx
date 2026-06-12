import ChecklistItem from "./ChecklistItem";
const ChecklistContainer = ({card, toggleCheckList}) => {
    return (
        <div>
            {
                card.checkLists.map(checkList => (
                    <ChecklistItem key={checkList.id} checkList={checkList} card={card} toggleCheckList={toggleCheckList} />
                ))
            }
        </div>
    )
}

export default ChecklistContainer;