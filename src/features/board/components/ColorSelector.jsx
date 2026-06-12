const ColorSelector = ({colors, selectedColor, handleChangeColor}) => {
    return (
        <div>
            <label className="block mb-3 text-md">Board Background </label>
            <div className="grid grid-cols-4 gap-2 sm:grid-cols-8">
                {
                    colors.map(color => {
                        const isColorSelected = selectedColor.id === color.id;
                        return (
                        <button onClick={() => handleChangeColor(color)} key={color.id} 
                        className={`${color.twClass} ${isColorSelected && "outline-2 outline-offset-4  outline-blue-500"} h-10 w-10 rounded-lg`}>
                        </button>)
                        
                    })

                }
            </div>
        </div>
    )
}

export default ColorSelector;