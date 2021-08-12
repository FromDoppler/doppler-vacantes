import Job from './job'

const Jobs = ({ jobs }) => {
  // console.log(jobs)

  return (
    <div>
      {jobs.map((job) => {
        return <Job key={job.id} job={job} />
      })}
    </div>
  )
}

export default Jobs
