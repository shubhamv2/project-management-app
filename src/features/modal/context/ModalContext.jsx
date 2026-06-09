import { createContext, useState } from "react"


export const ModalContext = createContext();

export const ModalProvider = ({children}) =>{
    const [modal, setModal] = useState({
        modalType:null,
        modalData:null,
    });

    const openModal = (modalType, modalData=null)=>{
        setModal({
            modalType,
            modalData
        })
    }

    const closeModal = () =>{
        setModal({
            modalType:null,
            modalData:null,
        })
    }

    const value = {modal, openModal, closeModal}
    return(
        <ModalContext.Provider value={value}>
            {children}
        </ModalContext.Provider>
    )
}