import { Plus } from "lucide-react";
import Button from "../../../../components/Button";
import Modal from "../../../../components/Modal";
import useModal from "../../../modal/hooks/useModal";
import Input from "../../../../components/Input";
import BoardColorSelector from "../../../board/components/ColorSelector";
import { BOARD_COLORS } from "../../../board/constant/boardColors";
import { useEffect, useState } from "react";
import useBoard from "../../../board/hooks/useBoard";
const AddLabelsModal = ({modal}) =>{
    const {closeModal} = useModal();
    const {state,addLabel, applyLabel} = useBoard();
    const [newLabel, setNewLabel] = useState(
        {
            title:"",
            selectedColor:BOARD_COLORS[0]
        }
    );

    
    const [appliedLabels, setAppliedLabels] = useState(()=>state.cards[modal.modalData].labels);
    
    const appliedLabelIds = appliedLabels.map(label=>label.id);
    
    
    
    
    
    const handleChangeColor = (color) =>{
        setNewLabel(prev=>({...prev, selectedColor:color}))
    }

    const handleAddLabel = () =>{
        addLabel(newLabel)
        setNewLabel({title:"", selectedColor:BOARD_COLORS[0]});

    }

    const handleApplyLabel = (label) =>{
        setAppliedLabels(prev=>[...prev, label])

    }

    const removeAppliedLabel = (label)=>{
        setAppliedLabels(prev=>prev.filter(item=>item.id !== label.id))
    }

    useEffect(()=>{
        return applyLabel(modal.modalData,appliedLabels);
    },[appliedLabels])

    return(
        <Modal isOpen={true} onClose={closeModal} title="Add label">
            <div className="space-y-6">
                <div className="min-h-20 ">
                    <h4 className="mb-4">Selected Labels</h4>
                    <div className="grid grid-cols-4 gap-3 text-xs">
                        {
                            appliedLabels.map(label=>(
                                <Button key={label.id} onClick={()=>removeAppliedLabel(label)} className={label.color}>{label.title}</Button>

                            ))
                        }
                    </div>
                </div>
                <div className="min-h-20">
                    <h4 className="mb-4">Default Labels</h4>
                    <div className="grid grid-cols-4 gap-3 text-xs">
                        {
                            state.labels.map(label=>{
                                const isApplied = appliedLabelIds.includes(label.id)
                                return !isApplied &&<Button key={label.id} onClick={()=>handleApplyLabel(label)} className={label.color}>{label.title}</Button>

                                }
                            )
                        }
                    </div>
                </div>


                <div>
                    <Input value={newLabel.title} onChange={(e)=>setNewLabel(prev=>({...prev,title:e.target.value}))} label="Add label" placeholder="Lable title"/>
                    <BoardColorSelector colors={BOARD_COLORS} selectedColor={newLabel.selectedColor} handleChangeColor={handleChangeColor}/>
                </div>


                <Button onClick={handleAddLabel} className="flex w-full justify-center"><Plus/> Create Label</Button>
            </div>
        </Modal>
    )
}

export default AddLabelsModal;