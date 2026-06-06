const AuthButton = ({children}) =>{
    return(
        <button type="submit" className="bg-blue-600 w-full mt-3 p-3 rounded-lg font-semibold">
            {children}
        </button>
    )
}
export default AuthButton;