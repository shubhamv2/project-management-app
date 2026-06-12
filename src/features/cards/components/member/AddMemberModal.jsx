import { useEffect, useState } from "react";
import Modal from "../../../../components/Modal";
import { modalTypes } from "../../../modal/data/modalTypes";
import useModal from "../../../modal/hooks/useModal";
import { X } from "lucide-react";
import useBoard from "../../../board/hooks/useBoard";
import Button from "../../../../components/Button";
import Input from "../../../../components/Input";

const AddMemberModal = ({ modal }) => {
    const { closeModal } = useModal();
    const [search, setSearch] = useState("");
    const [users, setUsers] = useState([]);
    const [selectedUsers, setSelectedUsers] = useState([]);
    const { addMember } = useBoard();
    const existedMembers = modal.modalData.card.members.map(member => member.id);

    if (modal.modalType !== modalTypes.ADD_MEMBER) return null;

    useEffect(() => {
        const storedUsers = JSON.parse(localStorage.getItem("users"));
        setUsers(storedUsers)
    }, [])

    const filteredUsers = users.filter(user => {
        if (search.trim() === "") return;
        if (existedMembers.includes(user.id)) return;
        const presentInSelectedlist = selectedUsers.some(item => item.id === user.id)
        return user.name.toLowerCase().includes(search.trim().toLowerCase()) && !presentInSelectedlist;
    })

    const handleSelectUser = (user) => {
        setSelectedUsers(prev => ([...prev, user]))
        setSearch("");
    }
    const handleRemoveUser = (userId) => {
        setSelectedUsers(prev => prev.filter(user => user.id !== userId))
    }

    const handleAddUser = () => {
        addMember(modal.modalData.card.id, selectedUsers)
        closeModal();

    }
    return (
        <Modal isOpen={true} onClose={closeModal} title="Add Members">
            <div>
                <div className="relative">
                    <Input value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Search Member" label="Find member" name="search" />

                    <div className="flex gap-2 mt-2 h-10 w-full">
                        {
                            selectedUsers.map(user => (
                                <span key={user.id}
                                    title={user.name} className="relative cursor-pointer w-10 h-10 rounded-full 
                                bg-pink-500 font-semibold text-xl flex items-center justify-center"
                                ><p>{user.name.slice(0, 1)}</p><Button onClick={() => handleRemoveUser(user.id)} className="absolute p-0! -right-1 -top-1 bg-red-600 rounded-lg"><X size={15} /></Button></span>
                            ))
                        }
                    </div>
                    <div className="flex flex-col absolute w-full top-20">

                        {
                            filteredUsers.map(user => (
                                <Button key={user.id} onClick={() => handleSelectUser(user)} className="w-full p-4! text-left bg-slate-700/30">
                                    {user.name}
                                </Button>
                            ))
                        }
                    </div>
                </div>
                <div className="flex justify-end gap-4 mt-6">
                    <Button className="bg-red-500!" onClick={closeModal}>Cancel</Button>
                    <Button onClick={handleAddUser}>Add Member</Button>
                </div>
            </div>
        </Modal>
    )
}

export default AddMemberModal;