import { useState } from 'react';
import { FaMapMarker } from 'react-icons/fa';
const JobCard = ({
	id,
	title,
	salary,
	description = ' ',
	location,
	type,
	status,
}) => {
	const [showFullDescription, setShowFullDescription] = useState(false);
	const [currStatus, setCurrStatus] = useState('open'); //used for changing the rendered value of status in the jobcard
	let desc = description;

	if (!showFullDescription && description) {
		desc = description.substring(0, 90) + '..';
	}
	const handleReadMore = (e) => {
	};
	return (
		<div className="bg-white rounded-xl shadow-md relative">
			<div className="p-4">
				<div className="mb-6">
					<div className="text-gray-600 my-2">{type}</div>
					<button onClick={handleReadMore}>
						{' '}
						<h3 className="text-xl font-bold">{title}</h3>
					</button>
				</div>

				<div className="mb-5">{desc}</div>

				<button
					onClick={() => setShowFullDescription((prevState) => !prevState)}
					className="text-indigo-500 mb-5 hover:text-indigo-600"
				>
					{showFullDescription ? 'Less' : 'More'}
				</button>

				<h3 className="text-indigo-500 mb-2">{salary} / Year</h3>

				<div className="border border-gray-100 mb-5"></div>

				<div className="flex flex-col lg:flex-row justify-between mb-4">
					<div className="text-orange-700 mb-3">
						<FaMapMarker className="inline text-lg mb-1 mr-1" />
						{location}
					</div>
					<div className="h-[36px] bg-indigo-500 hover:bg-indigo-600 text-white px-4 py-2 rounded-lg text-center text-sm">
						{status}
					</div>
				</div>
			</div>
		</div>
	);
};

export default JobCard;
