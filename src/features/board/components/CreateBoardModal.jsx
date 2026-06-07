import Modal from "../../../components/Modal";

const CreateBoardModal = ({ isOpen, onClose, boardColors }) => {
    return (
        <Modal title="Create New Board" isOpen={isOpen} onClose={onClose}>
            <div className="space-y-4">
                <div>
                    <label className="block mb-1 text-md" htmlFor="title">Board Title</label>
                    <input className="w-full outline-none bg-slate-700 p-2 rounded-lg" type="text" placeholder="eg. Marketing campaign Q4" />
                </div>

                <div>
                    <label className="block mb-3 text-md">Board Background </label>
                    <div className="grid grid-cols-4 gap-2 sm:grid-cols-8">
                        {
                            boardColors.map(color=>(
                                <button key={color.id} className={`${color.twClass} h-10 w-10 rounded-lg`}>
                                
                                </button>
                            ))

                        }
                    </div>
                </div>

                <div className="flex gap-4 mt-10">
                    <button className="bg-red-500 p-2 rounded-lg" onClick={onClose}>Cancel</button>
                    <button className="bg-blue-500 p-2 rounded-lg">Create Board</button>
                </div>
            </div>
        </Modal>
    )
}

export default CreateBoardModal;