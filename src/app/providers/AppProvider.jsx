import { AuthProvider } from "../../features/auth/context/AuthContext";
import { BoardProvider } from "../../features/board/context/BoardContext";
import { ModalProvider } from "../../features/modal/context/ModalContext";
const AppProvider = ({ children }) => {
    return (
        <AuthProvider>
            <ModalProvider>
                <BoardProvider>
                    {children}
                </BoardProvider>
            </ModalProvider>
        </AuthProvider>
    )
}

export default AppProvider;