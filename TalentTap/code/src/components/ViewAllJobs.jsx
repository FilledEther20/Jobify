import React from 'react'
import  jobsData from '../jobs.json'
const ViewAllJobs = () => {
  const remJobs=jobsData.jobs.slice(6)
  return (
    <>
      <div className='text-center'>
        <a
          href="/ViewAllJobs.html"
          className='bg-indigo-500 hover:bg-indigo-600 text-white px-2 py-3 rounded-md '
        >
          View More
        </a>
      </div>
    </>
  )
}

export default ViewAllJobs