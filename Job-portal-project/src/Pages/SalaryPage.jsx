import React, { useEffect, useState } from 'react'
import PageHeader from '../components/PageHeader'

const Salary = () => {
    const [searchText, setSearchText] = useState("");
    const [salary, setSalary] = useState([]);
    // console.log(searchText);    

    useEffect(() => {
        fetch("salary.json").then(res => res.json()).then(data => {
            setSalary(data);
        })
    }, [searchText])

    const handleSearch = () => {
        const filter = salary.filter(
            (jobs) =>
                jobs.title.toLowerCase().includes(searchText.toLowerCase())
        );
        console.log(filter);
        setSalary(filter)
    }
    return (
        <div className='max-w-screen-2xl container max-auto xl:px-24'>
            <PageHeader title={"Estimate Salary"} path={"Salary"} />
            <div className='mt-5'>
                <div className='search-box p-2 text-center mb-2'>
                    <input type='text' name='search' id='search' className='py-2 pl-3 border focus:outline-none 
                    lg:w-6/12 mb-4 w:full' onChange={(e) => setSearchText(e.target.value)} />
                    <button onClick={handleSearch} className='bg-blue text-white py-2 px-8 rounded-sm mb-4 font-semibold'>Search</button>
                </div>
            </div>

            {/* salary display card */}
            <div className='grid lg:grid-cols-3 sm:grid-2 grid-cols-1 gap-12 items-center'>
                {
                    salary.map((data) => (
                        <div key={data.id} className='shadow px-4 py-8'>
                            <h4 className='text-xl font-semibold'>{data.title}</h4>
                            <p className='text-blue text-lg font-medium my-2'>{data.salary}</p>

                            <div className='flex flex-wrap gap-4'>
                                <a href={"/"} className='underline'>{data.status}</a>
                                <a href={"/"} className='underline'>{data.skills}</a>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Salary