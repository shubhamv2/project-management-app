const Input = ({label, name, type="text",className,...attributes}) =>{
    return(
        <div>
            <label htmlFor={name} className="block text-sm text-slate-200 mb-2">{label}</label>
            <input className={`${className} w-full bg-slate-700 p-3 rounded-lg outline-none`} type={type} id={name} {...attributes}/>
        </div>
    )
}

export default Input;