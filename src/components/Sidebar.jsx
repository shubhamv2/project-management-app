import { Link, useLocation, NavLink } from "react-router-dom";
import { navigationLinks } from "../constants/navigationLinks";
const Sidebar = () =>{
    const location = useLocation();
    const isBoardRoute = location.pathname.startsWith("/board/") || location.pathname === "/";
    return(
        <aside className="w-68 border-r border-slate-800 p-6">
            <Link className="text-2xl font-bold">PM Application</Link>
            <div className="flex flex-col mt-6">
                {
                    navigationLinks.map(link=>{
                        const isBoardLink = link.path === "/";
                        return (<NavLink to={link.path} 
                            key={link.path} 
                            className={({isActive})=>{
                                const active = isBoardLink?isBoardRoute:isActive;
                                return `p-3 rounded-lg  
                            ${active?"bg-slate-700":"hover:bg-slate-800"}`
                            }
                            }>
                                {link.label}
                        </NavLink>)

                        }
                    )
                }
            </div>
        </aside>
    )
}

export default Sidebar;