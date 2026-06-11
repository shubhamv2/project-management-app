const Button = ({children,className, onClick}) =>{
    return(
        <button className={`${className} px-3 py-2 rounded-lg bg-blue-500`} onClick={onClick}>
            {children}
        </button>
    )
}
export default Button;