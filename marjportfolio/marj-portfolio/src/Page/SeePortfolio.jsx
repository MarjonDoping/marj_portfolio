import React from 'react'
import { Link } from 'react-router-dom'

const SeePortfolio = () => {
  return (
    <div className='bg-gray-900'>
 <div className="max-w-screen-lg flex flex-wrap items-center justify-between mx-auto p-4">
    <div className="px-100">
        <h2 className="text-4xl font-normal text-white"> See Portfolio</h2>
      
    </div>
    <Link to="/portfolio">
    <div className="flex items-center">
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
  <path fill-rule="evenodd" clip-rule="evenodd" d="M9 6.75C8.58579 6.75 8.25 6.41421 8.25 6C8.25 5.58579 8.58579 5.25 9 5.25H18C18.4142 5.25 18.75 5.58579 18.75 6V15C18.75 15.4142 18.4142 15.75 18 15.75C17.5858 15.75 17.25 15.4142 17.25 15V7.81066L6.53033 18.5303C6.23744 18.8232 5.76256 18.8232 5.46967 18.5303C5.17678 18.2374 5.17678 17.7626 5.46967 17.4697L16.1893 6.75H9Z" fill="white"/>
</svg>
    </div>
    </Link>
   
</div>
    </div>
   
  )
}

export default SeePortfolio