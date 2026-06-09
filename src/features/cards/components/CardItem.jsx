import { Clock, Watch } from "lucide-react";

const CardItem = ({card}) =>{
    return(
        <div className="bg-slate-600 p-3 rounded-lg space-y-3 cursor-pointer">
            <h4 className="font-semibold">{card.title}</h4>
            <div className="grid grid-cols-4 text-xs gap-2">
                <span className="bg-amber-400 p-0.5 text-amber-600 rounded-lg">Urgent</span>
                <span className="bg-amber-400 p-0.5 text-amber-600 rounded-lg">Urgent</span>
                <span className="bg-amber-400 p-0.5 text-amber-600 rounded-lg">Urgent</span>
                <span className="bg-amber-400 p-0.5 text-amber-600 rounded-lg">Urgent</span>
            </div>
            <div>
                <div className="text-xs flex gap-1 items-center text-slate-300">
                    <Clock size={20}/>
                    <span>{new Date(card.dueDate).toDateString()}</span>
                </div>
                
            </div>
        </div>
    )
}

export default CardItem;