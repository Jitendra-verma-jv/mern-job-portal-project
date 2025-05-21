import React from 'react'

const Inputfield = ({handleChange, value, title, name}) => {
    return (
        <div>
            <label className='sidebar-label-container text-primary'>
                <input type='radio' name={name} value={value} onChange={handleChange} />            
                <span className='checkmark'></span>{title}
            </label>
        </div>
    )
}

export default Inputfield