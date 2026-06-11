import { UserCircle } from "lucide-react";

const CommentCard = ({comment}) => {
    return (
        <div className=" relative flex gap-3 bg-slate-900/50 rounded-tl-lg rounded-br-lg p-2">
            <UserCircle strokeWidth={1.4} size={33} className="text-blue-700 bg-blue-400 rounded-lg"/>
            <div className="">
                <h5 className="text-md mb-1 text-slate-200">{comment.user}</h5>
                <p className="text-sm text-slate-300">{comment.title}</p>
            </div>
            <span className="text-xs absolute right-2 top-2">{new Date(comment.createdAt).toLocaleTimeString()}</span>
        </div>
    )
}

export default CommentCard;