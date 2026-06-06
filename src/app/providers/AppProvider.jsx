import { AuthProvider } from "../../features/auth/context/AuthContext";

const AppProvider = ({children}) =>{
    return(
        <AuthProvider>
            {children}
        </AuthProvider>
    )
}

export default AppProvider;