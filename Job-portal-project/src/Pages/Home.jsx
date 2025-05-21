import { useEffect, useState } from 'react'
import Banner from '../components/Banner';
import Card from '../components/Card';
import Jobs from './Jobs';
import Sidebar from '../sidebar/Sidebar';
import Newsletter from '../components/Newsletter';

const Home = () => {
    const [selectedCategory, setSelectedCategory] = useState(null);
    const[jobs, setJobs] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 6;


    useEffect(() => {
        setIsLoading(true);
        fetch("http://localhost:5000/all-jobs")
            .then(res => res.json())
            .then(data => {
                setJobs(data);
                setIsLoading(false);
            });
    }, []); // Add this empty array
    

    // handle input change
    const [query,setQuery] = useState ("");
    const handleInputChange = (event) => {
        setQuery(event.target.value);
    }

    // filter jobs with title
    const filteredItems = jobs.filter((job) => job.jobTitle.toLowerCase().indexOf(query.toLowerCase()) !== -1); 

    // Radio filter....
    const handleChange = (event) => {
        setSelectedCategory(event.target.value);
    }

    // button based filtering...
    const handleClick = (event) => {
        setSelectedCategory(event.target.value);
    }

    // Calculate the index range

    const calculatePageRange = () => {
        const startIndex = (currentPage - 1) * itemsPerPage;
        const endIndex = startIndex + itemsPerPage;
        return {startIndex, endIndex};
    }

    // function for the next page
    const nextPage = () => {
        if(currentPage < Math.ceil(filteredItems.length / itemsPerPage)) {
            setCurrentPage(currentPage + 1);
        }
    }

    // function for the previous page 
    const prevPage = () => {
        if(currentPage > 1) {
            setCurrentPage(currentPage - 1);  
        }
    }

    // main function...
    const filteredData = (jobs,selected,query) => {
        let filteredJobs = jobs;

        // filtering input items
        if(query){
            filteredJobs = filteredItems;
        }

        // c
        if(selected){
            filteredJobs = filteredJobs.filter(({ jobLocation, maxPrice, postingDate, experienceLevel, employmentType, 
            salaryType}) => 
                postingDate >= selected ||
                jobLocation.toLowerCase() === selected.toLowerCase() ||
                parseInt(maxPrice) <= parseInt(selected) ||
                salaryType.toLowerCase() === selected.toLowerCase() ||
                employmentType.toLowerCase() === selected.toLowerCase() ||
                experienceLevel.toLowerCase() === selected.toLowerCase()
        
            );
        }

        // slice the data based on current page
        const {startIndex,endIndex} = calculatePageRange();
        filteredJobs = filteredJobs.slice(startIndex, endIndex) 

        return filteredJobs.map((data, i) => <Card key={i} data={data} />)
    }

    const result = filteredData(jobs, selectedCategory, query);
    return (
    <div className='text-blue'>
        <Banner query={query} handleInputChange={handleInputChange} />
        <div className='bg-[#FAFAFA] md:grid grid-cols-4 gap-8 lg:px-24 px-4 py-12'>
            {/* Left side bar */}
            <div className='bg-white p-4 rounded'>
                <Sidebar handleChange={handleChange} handleClick={handleClick} />
            </div>

            {/* Main content */}
            <div className='bg-white col-span-2 p-4 rounded-sm'>
                {
                    isLoading ? (<p className='text-primary font-medium'>Loading.....</p>) : result.length > 0 ? (<Jobs result={result} />) : <>
                    <h3 className='text-primary text-lg font-bold mb-2'>{result.length} Jobs</h3>
                    <p className='text-primary'>No data found</p>
                    </>
                }

                {/* page iniation here */}
                {
                    result.length > 0 ? (
                        <div className='flex text-primary mt-4 space-x-8 justify-center'>
                            <button onClick={prevPage} disabled={currentPage === 1} className='hover:underline' >Previous</button>
                            <span className='mx-2'>Page {currentPage} of {Math.ceil(filteredItems.length / itemsPerPage)} </span>
                            <button onClick={nextPage} disabled={currentPage === Math.ceil.apply(filteredItems.length / 
                            itemsPerPage)} className='hover:underline' >Next</button>
                        </div>
                    ) : ""
                }
            </div>

            {/* Right side bar */}
            <div className='bg-white p-4 rounded'>
                <Newsletter/>
            </div>
        </div>
    </div>
    )
}
export default Home;