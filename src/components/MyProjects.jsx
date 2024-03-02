import React from 'react'

function MyProjects({view}) {
  return (
    <div id="myProjects" className='section text-white bg-red-40 h-[60rem w-full mt-10'>
      <p className={`font-medium font-inter  ${view === 'myProjects' ? 'sticky bg-slate-900 py-5 text-pink-500 xl:text-white -top-10 xl:relative': 'relative text-white' }`}>PROJECTS</p>
    </div>
  )
}

export default MyProjects