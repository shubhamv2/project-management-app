import { useEffect, useState } from "react";
import Modal from "../../../../components/Modal";
import { modalTypes } from "../../../modal/data/modalTypes";
import useModal from "../../../modal/hooks/useModal";
import { X } from "lucide-react";
import useBoard from "../../../board/hooks/useBoard";

const AddMemberModal = ({modal}) =>{
    const {closeModal} = useModal();
    const [search, setSearch] = useState("");
    const [users, setUsers] = useState([]);
    const [selectedUsers, setSelectedUsers] = useState([]);
    const {addMember} = useBoard();
    const existedMembers = modal.modalData.card.members.map(member=>member.id);

    if(modal.modalType !== modalTypes.ADD_MEMBER) return null;

    useEffect(()=>{
        const storedUsers = JSON.parse(localStorage.getItem("users"));
        setUsers(storedUsers)
    },[])

    const filteredUsers = users.filter(user=>{
        if(search.trim()==="") return;
        if(existedMembers.includes(user.id)) return;
        const presentInSelectedlist = selectedUsers.some(item=>item.id === user.id)
        return user.name.toLowerCase().includes(search.trim().toLowerCase()) && !presentInSelectedlist;
    })
    
    const handleSelectUser = (user) =>{
        setSelectedUsers(prev=>([...prev,user]))
        setSearch("");
    }
    const handleRemoveUser = (userId) =>{
        setSelectedUsers(prev=>prev.filter(user=>user.id !== userId))
    }

    const handleAddUser = () =>{
        addMember(modal.modalData.card.id,selectedUsers)
        closeModal();

    }
    return(
        <Modal isOpen={true} onClose={closeModal} title="Add Members">
            <div>
                <div className="space-y-3">
                    <input value={search} onChange={(e)=>setSearch(e.target.value)} type="text" placeholder="Search member" className="outline-none bg-slate-700 w-full p-3 rounded-lg"/>
                    <div className="flex gap-2">
                        {
                            selectedUsers.map(user=>(
                                <span key={user.id} 
                                title={user.name} className="relative cursor-pointer w-10 h-10 rounded-full 
                                bg-pink-500 font-semibold text-xl flex items-center justify-center"
                                ><p>{user.name.slice(0,1)}</p><button onClick={()=>handleRemoveUser(user.id)} className="absolute -right-1 -top-1 bg-red-600 rounded-lg"><X size={15}/></button></span>
                            ))
                        }
                    </div>
                    <div className="flex flex-col mt-2">
                        {
                            filteredUsers.map(user=>(
                                <button key={user.id} onClick={()=>handleSelectUser(user)} className="w-full text-sm text-left p-3 bg-slate-700/30 rounded-lg">
                                    {user.name}
                                </button>
                            ))
                        }
                    </div>

                    <div className="flex justify-end mt-6 gap-4">
                        <button onClick={closeModal} className="bg-red-500 px-3 py-2 rounded-lg">Cancel</button>
                        <button onClick={handleAddUser} className="bg-blue-500 px-2 py-1 rounded-lg">Add</button>
                    </div>
                </div>
            </div>
        </Modal>
    )
}

export default AddMemberModal;