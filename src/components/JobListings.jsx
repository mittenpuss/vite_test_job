import React from 'react'
import { useState, useEffect } from 'react';

import JobListing from './JobListing';
import Spinner from './Spinner';


// import axios from 'axios';

const JobListings = ({ isHome = false }) => {
    const [jobs,setJobs] = useState([])
    const [loading, setLoading] = useState(true)
    // const jobListings = isHome ? jobs.slice(0,3) : jobs

    useEffect(() => { 
        const fetchJobs = async () => {
            const apiUrl = isHome 
                ? '/api/jobs?_limit=3' 
                : '/api/jobs'
            try {
                const  res = await fetch(apiUrl)
                const data = await res.json();
                setJobs(data)
            } catch (error){
                console.log('error fetching data', error)
            } finally {
                setLoading(false)
            }
        }

        fetchJobs();
    }, []);

    // fetch('https://jsonplaceholder.typicode.com/todos')
    // .then(response => {
    //   if (!response.ok) {
    //     throw Error(`HTTP error: ${response.status}`);
    //   }
    //   return response.json();
    // })
    // .then(data => {
    //   console.log('Data received:', data);
    // })
    // .catch(error => {
    //   console.error('Error message:', error.message);
    // });

    // const axios = require("axios");

    // useEffect(() => {
    //     axios.get('http://localhost:8000/jobs')
    //         .then(res => {
    //             setJobs(res.data);
    //         })
    //         .catch(error => {
    //             console.log('error fetching data', error);
    //         })
    //         .finally(() => {
    //             setLoading(false);
    //         });
    // }, []);


  return (
    <section className='bg-blue-50 px-4 py-10'>
        <div className='container-xl lg:container m-auto'>
            <h2 className='text-3xl font-bold text-indigo-500 mb-6 text-center'>
                {isHome ? 'Recent Jobs' : 'Browse Jobs'}
            </h2>
         
                { loading ? (
                    <Spinner loading={loading}></Spinner>
                ) : ( 
                    <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
                        {jobs.map((job)=>(
                        <JobListing key={job.id} job={ job }/>
                        ))}    
                    </div>) 
                }

        </div>

    </section>
  )
}

export default JobListings