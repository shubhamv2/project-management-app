import clsx from "clsx";
const AuthInput = ({label, name, placeholder, error,type="text", register}) =>{
    return(
        <div >
            <label htmlFor={name} className="block mb-2">{label}</label>
            <input className={clsx("w-full outline-none bg-slate-700 p-3 rounded-lg",error&&"border border-red-500")} id={name} type="text" placeholder={placeholder} name={name} type={type} {...register(name)}/>
            {error && <p className="text-red-500">{error.message}</p>}
        </div>
    )
}

export default AuthInput;