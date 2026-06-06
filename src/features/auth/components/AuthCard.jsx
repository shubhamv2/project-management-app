const AuthCard = ({title, children}) =>{
    return(
        <div className="bg-slate-800 p-6 rounded-lg w-full max-w-md">
            <h2 className="mb-3 text-2xl font-semibold">{title}</h2>
            <div className="">
                {children}
            </div>
        </div>
    )
}

export default AuthCard;