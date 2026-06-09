import { X } from "lucide-react";
const Modal = ({ isOpen, onClose, title, children }) => {
    if (!isOpen) return null;
    return (
        <div className="fixed w-full inset-0 bg-black/50 flex items-center justify-center">
            <div className="w-full max-w-md bg-slate-800 shadow-xl p-6 rounded-lg relative">
                <button onClick={onClose} className="absolute right-5 top-5"><X/></button>
                <div className="mt-6">
                    <h2 className="text-2xl mb-3">{title}</h2>
                    {children}
                </div>
            </div>
        </div>
    )
}
export default Modal;