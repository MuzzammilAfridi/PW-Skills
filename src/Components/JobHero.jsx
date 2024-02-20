import React from 'react'

const JobHero = () => {
  return (
    
    <div className='flex px-[3vw]'>
        <div className="sm:w-[70vw] flex ">
            <div>
            <h2 className='sm:text-6xl py-16 pl-4 sm:text-start text-4xl text-center font-bold'>Let's find your <br /> dream <span className='text-blue-800'>job</span> with <span className='text-blue-800' > PW Skills</span></h2>
            <div className="px-[3vw] border-2 rounded-xl h-16 flex items-center w-[60vw] gap-32">
            <input className='outline-none text-start' type="text" placeholder='Job Title' />
            <input className='bg-white border-l-2 py-3 pl-5  outline-none text-start' type="text" placeholder='Location' />
            <button className=' bg-blue-700 text-white px-10  relative right-14  h-10 rounded-lg'>Search</button>
        </div>
        </div>
        </div>
        <div className="w-[30vw] hidden sm:block py-4">
            <img className='h-[80vh] w-[90%] ' src="./src/assets/Images/hero-banner-grid-mobile.png" alt="" />
        </div>
      
    </div>

  )
}

export default JobHero