import Link from 'next/link'

const Job = ({ job }) => {
  return (
    <div style={{ padding: '10px' }}>
      <Link href="/jobs/[id]" as={`/jobs/${job.id}`}>
        <a>
          {job.title} {'->'}
        </a>
      </Link>
    </div>
  )
}

export default Job
