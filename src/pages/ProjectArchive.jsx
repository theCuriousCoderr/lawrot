import { ArrowBack } from '@mui/icons-material'
import React from 'react'
import { NavLink } from 'react-router-dom'

function ProjectArchive() {
  return (
    <div className='bg-slate-900 h-screen px-5 py-8'>
        <div>
            <NavLink to="/" className='text-teal-300 font-semibold'> <span><ArrowBack sx={{fontSize: 20}} /></span>Back to Home Page</NavLink>
        </div>
    </div>
  )
}

export default ProjectArchive