import Modal from '../../../components/Modal';
const CreateListModal = ({isOpen, onClose, handleCreateList, listTitle, setListTitle}) =>{

    return(
        <Modal isOpen={isOpen} onClose={onClose} title="Create New List">
            <div className='mb-6'>
                <label className='block mb-2'>List Title</label>
                <input type="text" value={listTitle} onChange={(e)=>setListTitle(e.target.value)} placeholder='Title' className='outline-none bg-slate-700 w-full p-3 rounded-lg'/>
            </div>
            <div className='flex gap-4 justify-end'>
                <button className='bg-red-500 p-3 rounded-lg' onClick={onClose}>Cancel</button>
                <button className='bg-blue-500 p-3 rounded-lg' onClick={handleCreateList}>Create List</button>
            </div>
        </Modal>
    )
}

export default CreateListModal;