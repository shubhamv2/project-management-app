import Modal from '../../../components/Modal';
import useModal from '../../modal/hooks/useModal';
import { modalTypes } from '../../modal/data/modalTypes';
import useBoard from '../../board/hooks/useBoard';
import { useState } from 'react';
const CreateListModal = () => {
    const { createList } = useBoard();
    const { modal, closeModal } = useModal();
    const [title, setTitle] = useState("");
    if (modal.modalType !== modalTypes.CREATE_LIST) return null;

    const handleCreateList = () => {
        createList({ boardId: modal.modalData.boardId, title })
        closeModal()
        setTitle("");
    }

    return (
        <Modal isOpen={true} onClose={closeModal} title="Create New List">
            <div className='mb-6'>
                <label className='block mb-2'>List Title</label>
                <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} placeholder='Title' className='outline-none bg-slate-700 w-full p-3 rounded-lg' />
            </div>
            <div className='flex gap-4 justify-end'>
                <button className='bg-red-500 p-3 rounded-lg' onClick={closeModal}>Cancel</button>
                <button className='bg-blue-500 p-3 rounded-lg' onClick={handleCreateList}>Create List</button>
            </div>
        </Modal>
    )
}

export default CreateListModal;