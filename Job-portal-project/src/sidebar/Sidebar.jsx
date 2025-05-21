import React from 'react';
import Location from './Location';
import Salary from './Salary';
import Jobpostingdata from './Jobpostingdata';
import Workexperience from './Workexperience';
import Employmenttype from './Employmenttype';

const Sidebar = ({handleChange,handleClick}) => {
  return (
    <div className='space-y-5'>
      <h3 className='text-primary text-lg font-bold mb-2'>Filter</h3>
      <Location handleChange={handleChange} />
      <Salary handleChange={handleChange} handleClick={handleClick} />
      <Jobpostingdata handleChange={handleChange} />
      <Workexperience handleChange={handleChange} />
      <Employmenttype handleChange={handleChange} />

    </div>
  )
}

export default Sidebar