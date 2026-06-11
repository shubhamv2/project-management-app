import { Send } from "lucide-react";
import { useState } from "react";
import useBoard from "../../../board/hooks/useBoard";

const CommentBar = ({cardId}) => {
    const [comment, setComment] = useState("");
    const {addComment} = useBoard()
    const handleAddComment = () =>{
        addComment(comment,cardId);
        setComment("");
    }
    return (
        <div className="flex items-center gap-4">
            <input type="text" value={comment} onChange={(e)=>setComment(e.target.value)} className="w-full bg-slate-700 outline-none p-2 rounded-lg" placeholder="Add comment" />
            <button onClick={handleAddComment} className="p-2 rounded-full bg-green-700">
                <Send />
            </button>
        </div>
    )
}

export default CommentBar;