import { Link } from "react-router-dom";
import { ROUTES } from "../../../routes/routes";
const BoardCard = ({board}) => {
    return (
        <Link className={`h-30 rounded-lg flex items-end text-lg p-6 font-semibold ${board.color}`} to={`/board/${board.id}`}>{board.title}</Link>
    )
}

export default BoardCard;