import CardDetailsModal from "../../cards/components/CardDetailsModal";
import ConfimDeleteModal from "../../cards/components/ConfirmDeleteModal";
import CreateBoardModal from "../../board/components/CreateBoardModal";
import CreateCardModal from "../../cards/components/CreateCardModal";
import CreateListModal from "../../lists/components/CreateListModal";
import useModal from "../hooks/useModal";
import { modalTypes } from "../data/modalTypes";
import AddMemberModal from "../../cards/components/member/AddMemberModal";
import DuedataModal from "../../cards/components/duedate/DuedateModal";

const RootModal = () =>{
    const {modals} = useModal();
    return(
        <>
            {
                modals.map(modal=>{
                    switch(modal.modalType){
                        case modalTypes.CREATE_BOARD:
                            return <CreateBoardModal key={modal.id} modal={modal}/>
                        case modalTypes.CREATE_LIST:
                            return <CreateListModal key={modal.id} modal={modal}/>
                        case modalTypes.CREATE_CARD:
                            return <CreateCardModal key={modal.id} modal={modal}/>
                        case modalTypes.CARD_DETAILS:
                            return <CardDetailsModal key={modal.id} modal={modal}/>
                        case modalTypes.CARD_DELETE:
                            return <ConfimDeleteModal key={modal.id} modal={modal}/>
                        case modalTypes.ADD_MEMBER:
                            return <AddMemberModal key={modal.id} modal={modal}/>
                        case modalTypes.CHANGE_DUE_DATE:
                            return <DuedataModal key={modal.id} modal={modal}/>
                        default:
                            return null;
                    }
                })
            }
        </>
    )
}

export default RootModal;