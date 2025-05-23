import React from 'react'
import Inputfield from '../components/Inputfield'

const Location = ({handleChange}) => {
  return (
    <div >
        <h4 className='text-primary text-lg  font-medium mb-2'>Location</h4>
        
        <div>
          <label className='sidebar-label-container text-primary'>
              <input type='radio' name='test' id='test' value="" onChange={handleChange} />            
              <span className='checkmark'></span>All
          </label>

          <Inputfield handleChange={handleChange} value="london" title="London" name="test" />
          <Inputfield handleChange={handleChange} value="brussels" title="Brussels" name="test" />
          <Inputfield handleChange={handleChange} value="san Francisco" title="San Francisco" name="test" />
          <Inputfield handleChange={handleChange} value="seattle" title="Seattle" name="test" />
          <Inputfield handleChange={handleChange} value="boston" title="Boston" name="test" />
          <Inputfield handleChange={handleChange} value="Banglaur" title="Banglaur" name="test" />

        </div>
    </div>
  )
}

export default Location