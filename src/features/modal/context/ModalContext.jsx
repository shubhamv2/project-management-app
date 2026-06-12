import { createContext, useState } from "react"


export const ModalContext = createContext();

export const ModalProvider = ({ children }) => {

    const [modals, setModals] = useState([]);


    const openModal = (modalType, modalData = null) => {
        
        setModals(prev => [
            ...prev,
            {
                id: crypto.randomUUID(),
                modalType,
                modalData,
            }
        ])
    }

    const closeModal = () => {
        setModals(prev=>prev.slice(0,-1));
    }

    const closeModalById = (id) =>{
        setModals(prev=>prev.filter(modal=>modal.id!==id))
    }

    const value = { modals, openModal, closeModal }
    return (
        <ModalContext.Provider value={value}>
            {children}
        </ModalContext.Provider>
    )
}