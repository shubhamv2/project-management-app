import { createContext, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({children}) =>{
    const [user, setUser] = useState(()=>{
        const currentUser = localStorage.getItem("currentUser");
        return currentUser? JSON.parse(currentUser): null;
    });
    const login = ({email, password}) =>{
        const users = JSON.parse(localStorage.getItem("users")) || [];
        const existingUser = users.find(user=>user.email === email && user.password === password)
        if(!existingUser) return false;
        setUser(existingUser);
        localStorage.setItem("currentUser", JSON.stringify(existingUser));
        return true;
    }

    const register = ({name, email, phone, password}) =>{
        const users = JSON.parse(localStorage.getItem("users")) || [];
        const existingUser = users.find(user=>user.email === email);
        if(existingUser) return false;
        const newUser = {
            id: crypto.randomUUID(),
            name,
            email,
            phone,
            password,
            createdAt: new Date().toISOString(),
        }        

        users.push(newUser);
        localStorage.setItem("users",JSON.stringify(users));
        setUser(newUser);
        localStorage.setItem("currentUser", JSON.stringify(newUser));
        return true;

    }

    const logout = () =>{
        setUser(null);
        localStorage.removeItem('currentUser');
        return true;
    }
    const value = {user, login, register, logout, isAuthenticated: !!user}
    return(
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    )
}








