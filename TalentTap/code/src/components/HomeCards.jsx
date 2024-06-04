import React from 'react';
import Card from './Card';
const HomeCards = () => {
	return (
		<>
			<section className="py-3">
				<div className="container-xl lg:container m-auto">
					<div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 rounded-lg">
						<Card bg="bg-gray-100">
							<h2 className="text-2xl font-bold">For Developers</h2>
							<p className="mt-2 mb-4">Browse your jobs</p>
							<a
								href="/browse-jobs.html"
								className="inline-block bg-slate-900 text-white rounded-lg
            px-4 py-2 hover:bg-black"
							>
								Add jobs
							</a>
						</Card>
						<Card bg="bg-indigo-100 ">
							<h2 className="text-2xl font-bold">For Employers</h2>
							<p className="mt-2 mb-4">
								List Your job to find the perfect developer
							</p>
							<a
								href="/add-jobs.html"
								className="inline-block bg-indigo-500 text-white rounded-lg
            px-4 py-2 hover:bg-indigo-600"
							>
								Browse Jobs
							</a>
						</Card>
					</div>
				</div>
			</section>
		</>
	);
};

export default HomeCards;
