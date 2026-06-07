import { AuthProvider } from "../../features/auth/context/AuthContext";
import { BoardProvider } from "../../features/board/context/BoardContext";
const AppProvider = ({children}) =>{
    return(
        <AuthProvider>
            <BoardProvider>
                {children}
            </BoardProvider>
        </AuthProvider>
    )
}

export default AppProvider;