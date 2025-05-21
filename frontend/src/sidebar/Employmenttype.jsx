import React from 'react';
import Inputfield from '../components/Inputfield';

const Employmenttype = ({handleChange}) => {
    return (
        <div >
            <h4 className='text-primary text-lg  font-medium mb-2'>Employment Type</h4>
            
            <div>
                <label className='sidebar-label-container text-primary'>
                    <input type='radio' name='test' id='test' value="" onChange={handleChange} />            
                    <span className='checkmark'></span>Any
                </label>

                <Inputfield handleChange={handleChange} value="Temporary" title="Temporary" name="test" />
                <Inputfield handleChange={handleChange} value="Full-time" title="Full-time" name="test" />
                <Inputfield handleChange={handleChange} value="Part-time" title="Part-time" name="test" />
            </div>
        </div>
    )
}

export default Employmenttype