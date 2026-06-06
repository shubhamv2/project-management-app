import useAuth from "../../../features/auth/hooks/useAuth";
import { Navigate } from "react-router-dom";
import { ROUTES } from "../../../routes/routes";

const PublicRoute = ({children}) =>{
    const {isAuthenticated} = useAuth();
    if(!isAuthenticated){
        return children;
    }
    return <Navigate to={ROUTES.HOME} replace/>
}

export default PublicRoute;