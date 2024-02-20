import React from 'react'

const Nav = ({navData, req}) => {
  return (
   <div className='flex px-[3vw] justify-between border border-gray-400 items-center'>
   <div className="h-[10vh]  flex items-center justify-center ">
    <img className='h-full' src="./src/assets/Images/PWSkills-logo.png" alt="" />
   </div>

     <nav className='sm:flex  w-[85vw] h-[18vh] px-12 items-center hidden justify-between  gap-8 text-lg'>
            <div className="space-x-8">
            <a href="#">{navData[0].first}</a>
            <a href="#">{navData[0].second}</a>
            <a href="#">{navData[0].third}</a>
            <a href="#">{navData[0].forth}</a>
            <a href="#">{navData[0].fifth}</a>
            </div>
            <div className="space-x-7">
            <a  href="#">{req}</a>
            <a className='bg-[#4437B8] text-white px-6 py-3 rounded-lg' href="#">Login</a>
            {/* <a href="#" className='px-5 py-4 text-xl font-semibold rounded-full bg-cyan-400'>M</a> */}
            </div>
             </nav>
   </div>
  )
}

export default Nav