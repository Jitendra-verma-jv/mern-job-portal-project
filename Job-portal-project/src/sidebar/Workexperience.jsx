import React from 'react';
import Inputfield from '../components/Inputfield';

const Workexperience = ({handleChange}) => {
    return (
        <div >
            <h4 className='text-primary text-lg  font-medium mb-2'>Work Experience</h4>
            
            <div>
                <label className='sidebar-label-container text-primary'>
                    <input type='radio' name='test' id='test' value="" onChange={handleChange} />            
                    <span className='checkmark'></span>Any experience
                </label>

                <Inputfield handleChange={handleChange} value="Internship" title="Internship" name="test" />
                <Inputfield handleChange={handleChange} value="Work remotely" title="Work remotely" name="test" />
            </div>
        </div>
    )
}

export default Workexperience