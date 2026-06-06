import useAuth from "../../../features/auth/hooks/useAuth";
import { Navigate } from "react-router-dom";
import { ROUTES } from "../../../routes/routes";

const ProtectedRoute = ({children}) =>{
    const {isAuthenticated} = useAuth();
    if(!isAuthenticated){
        return <Navigate to={ROUTES.LOGIN} replace/>;   
    }
    return children;
}

export default ProtectedRoute;