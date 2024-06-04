import React from 'react';
import jobsData from '../jobs.json';
import JobCard from './JobCard';
import ViewAllJobs from './ViewAllJobs';
const JobListings = () => {
	const recentJobs=jobsData.jobs.slice(0,3)
	return (
		<section className="bg-blue-50 px-4 py-10">
			<div className="container-xl lg:container m-auto">
				<h2 className="text-3xl font-bold text-indigo-500 mb-6 text-center">
					Recent Jobs
				</h2>
				<div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
					{recentJobs.map((job, id) => (
						<JobCard
							key={id}
              type={job.type}
							title={job.title}
							salary={job.salary}
							description={job.description}
							location={job.location}
						/>
					))}
				</div>
        <ViewAllJobs/>
			</div>
		</section>
	);
};

export default JobListings;
