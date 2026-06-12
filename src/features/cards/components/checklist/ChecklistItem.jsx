const CheckListItem = ({checkList, card, toggleCheckList}) => {
    return (
        <div className="flex items-center gap-2">
            <input onChange={() => toggleCheckList(card.id, checkList.id)} id={checkList.id} checked={checkList.isCompleted} className="w-4 h-4" type="checkbox" />
            <label className="cursor-pointer" htmlFor={checkList.id}>{checkList.label}</label>
        </div>
    )
}
export default CheckListItem;