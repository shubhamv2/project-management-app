import { Send } from "lucide-react";

const CommentBar = () => {
    return (
        <div className="flex items-center gap-4">
            <input type="text" className="w-full bg-slate-700 outline-none p-2 rounded-lg" placeholder="Add comment" />
            <button className="p-2 rounded-full bg-green-700">
                <Send />
            </button>
        </div>
    )
}

export default CommentBar;