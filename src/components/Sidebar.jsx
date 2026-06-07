import { Link, NavLink } from "react-router-dom";
import { navigationLinks } from "../constants/navigationLinks";
const Sidebar = () =>{
    return(
        <aside className="w-68 border-r border-slate-800 p-6">
            <Link className="text-2xl font-bold">PM Application</Link>
            <div className="flex flex-col mt-6">
                {
                    navigationLinks.map(link=>(
                        <NavLink to={link.path} className={({isActive})=>`p-3 rounded-lg  ${isActive?"bg-slate-700":"hover:bg-slate-800"}`}>{link.label}</NavLink>
                    ))
                }
            </div>
        </aside>
    )
}

export default Sidebar;