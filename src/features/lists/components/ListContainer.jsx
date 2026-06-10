import AddListCard from "./AddListCard";
import ListColumn from "./ListColumn";

const ListContainer = ({ lists, cards,board}) => {
    
    return (
        <div className="flex gap-4 overflow-x-auto min-h-100 items-start pb-10">
            {
                lists.map(list => (
                    <ListColumn key={list.id} list={list} 
                    cards={cards} />
                ))

            }
            <AddListCard board={board}/>
        </div>
    )
}

export default ListContainer;