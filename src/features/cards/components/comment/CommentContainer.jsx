import CommentCard from "./CommentCard";

const CommentContainer = ({comments}) =>{
    if(!comments.length) return (<p className="p-10 text-sm text-slate-400">No comments</p>)
    return(
        <div className="flex flex-col gap-2 min-h-72  h-0 overflow-y-auto p-2">
            {
                comments.map(comment=>(
                    <CommentCard comment={comment}/>
                ))
            }
        </div>
    )
}
export default CommentContainer;