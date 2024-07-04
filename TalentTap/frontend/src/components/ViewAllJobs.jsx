import React, { useState } from 'react';
import jobsData from '../jobs.json';
import JobCard from './JobCard';

const ViewAllJobs = () => {
	const remJobs = jobsData.jobs;
	const [visibleJobs, setVisibleJobs] = useState(remJobs);

	const handleClick = () => {
		setVisibleJobs(remJobs);
	};

	return (
		<>
			<section className="bg-blue-50 px-20 py-10">
				<div className="container-xl lg:container m-auto ">
					<h2 className="text-4xl font-bold text-indigo-500 mb-6 text-center ">
						All Jobs
					</h2>
					<div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 mb-6 ">
						{visibleJobs.map((job, index) => (
							<JobCard
								key={index}
								id={job.id}
								title={job.title}
								salary={job.salary}
								description={job.description}
								location={job.location}
								type={job.type}
							/>
						))}
					</div>
				</div>
			</section>
		</>
	);
};

export default ViewAllJobs;
