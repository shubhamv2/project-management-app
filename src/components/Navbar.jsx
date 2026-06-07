import { Link } from "react-router-dom";
import {ROUTES} from '../routes/routes';
import useAuth from '../features/auth/hooks/useAuth';
import { UserCircle } from "lucide-react";
const Navbar = () =>{
    const {isAuthenticated,logout, user} = useAuth();
    console.log(isAuthenticated,user)
    return(
        <header className="h-16 px-6 flex items-center justify-end border-b border-slate-800 gap-6">
            <input type="text" placeholder="Global search..." className="bg-slate-800 p-2 rounded-lg w-full max-w-lg outline-none border-slate-700" />
            {
                isAuthenticated ? 
                <div className="flex items-center gap-4">
                    <div className="flex items-center flex-col">
                        <UserCircle size="35" strokeWidth="1"/>
                        <span className="text-xs whitespace-nowrap">{user?.name.split(" ")[0]}</span>
                    </div>
                    <button className="bg-red-500 px-2 py-1 text-sm rounded-lg" onClick={logout}>Logout</button>
                </div>:
                <div className="flex gap-4">
                    <Link className="bg-blue-500 px-2 py-1 rounded-lg text-sm" to={ROUTES.LOGIN}>Login</Link>
                    <Link className="bg-blue-500 px-2 py-1 rounded-lg text-sm" to={ROUTES.REGISTER}>Register</Link>
                </div>
            }

        </header>
    )
}

export default Navbar;