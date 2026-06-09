import AddListCard from "./AddListCard";
import ListColumn from "./ListColumn";

const ListContainer = ({ lists, setModalOpen, cards, setSelectedList, setCardModalOpen}) => {

    return (
        <div className="flex gap-4 overflow-x-auto min-h-100 items-start">
            {
                lists.map(list => (
                    <ListColumn key={list.id} list={list} cards={cards}  setSelectedList={setSelectedList} setCardModalOpen={setCardModalOpen}/>
                ))

            }
            <AddListCard setModalOpen={setModalOpen} />
        </div>
    )
}

export default ListContainer;