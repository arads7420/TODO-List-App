export const ColorBtn = ({ isChecked, handleClick, color }) => {
    return (
        <>
            {isChecked ? <div
                style={{ backgroundColor: color }}
                className='color-button color-clicked'
                onClick={(e) => { handleClick(e, color) }}
            ></div> 
            : 
            <div
                style={{ backgroundColor: color }}
                className='color-button'
                onClick={(e) => { handleClick(e, color) }}
            >

            </div>}


        </>
    )
}