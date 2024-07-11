import React, { useState, useEffect } from 'react';
import JobCard from './JobCard';
import axios from 'axios';
import Navbar from './Navbar';
import { BaseURL } from '../../constants';
import { useNavigate, useLocation } from 'react-router-dom';

const JobListings = () => {
    const [allJobs, setAllJobs] = useState([]);
    const [viewAll, setViewAll] = useState(false);
    const [quantity, setQuantity] = useState("More");
    const navigate = useNavigate();
    const location = useLocation();
    
    useEffect(() => {
        console.log("effect");
        axios.get(`${BaseURL}/alljobs`)
            .then(res => {
                setAllJobs(res.data);
                console.log(res.data);
            })
            .catch(err => {
                console.error(err);
            });
    }, []);

    const handleClick = () => {
        setViewAll(!viewAll);
        setQuantity(quantity === "More" ? "Less" : "More");
        navigate('/view-all-jobs');
    };

    const displayJobs = viewAll ? allJobs : allJobs.slice(0, 6);

    return (
        <>
            {location.pathname === '/view-all-jobs' && <Navbar />}
            <section className="bg-blue-50 px-4 py-10">
                <div className="container-xl lg:container m-auto">
                    <h2 className="text-3xl font-bold text-indigo-500 mb-6 text-center">
                        Recent Jobs
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                        {displayJobs.map((job, id) => (
                            <JobCard
                                key={id}
                                type={job.type}
                                title={job.title}
                                salary={job.salary}
                                description={job.description}
                                location={job.location}
								status={job.status}
                            />
                        ))}
                    </div>
                    <div className="text-center">
                        <button
                            className="bg-indigo-500 hover:bg-indigo-600 text-white px-2 py-3 rounded-md"
                            onClick={handleClick}
                        >
                            View {quantity}
                        </button>
                    </div>
                </div>
            </section>
        </>
    );
};

export default JobListings;
