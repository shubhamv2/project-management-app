import AddListCard from "./AddListCard";
import ListColumn from "./ListColumn";
const ListContainer = ({lists}) =>{
    console.log(lists);
    return(
        <div className="flex gap-4 overflow-x-auto min-h-100 items-start">
            {
                lists.map(list=>(
                    <ListColumn key={list.id} list={list}/>
                ))

            }
            <AddListCard/>
        </div>
    )
}

export default ListContainer;