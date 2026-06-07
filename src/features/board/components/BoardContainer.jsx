import BoardCard from "./BoardCard";
const BoardContainer = ({boards}) =>{
    return(
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {
                boards.map(board=>(<BoardCard key={board.id} board={board}/>))
            }
           
        </div>
    )
}
export default BoardContainer;
