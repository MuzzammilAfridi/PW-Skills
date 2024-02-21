import React from 'react'

const HallOfFameHeader = () => {
  return (
    <div className='sm:h-[28vh] h-[17vh] bg-transparent sm:px-16 px-6 shadow-lg' >
    <div className="flex items-center justify-between h-1/2">
    <img className='sm:h-3/4 h-full ' src="./src/assets/Images/PWSkills-white.png" alt="" />
      

        <button className='text-white hidden bg-[#5A4BDA] px-10 py-3 rounded-xl text-xl sm:inline-block' >Login</button>
    </div>
  
   <nav className='sm:flex h-1/2 items-center hidden justify-between'>
    <a className='hover:text-[#2952EF]' href="#">Home</a>
    <a className='hover:text-[#2952EF]'  href="#">Courses</a>
    <a className='hover:text-[#2952EF]'  href="#">PW Skills Lab</a>
    <a className='hover:text-[#2952EF]'  href="#">Job Portal</a>
    <a className='hover:text-[#2952EF]'  href="#">Experience Portal</a>
    <a className='hover:text-[#2952EF]'  href="#">Become an affiliate</a>
    <a className='hover:text-[#2952EF]'  href="#">Hall of fame</a>
       
</nav>
  
</div>
  )
}

export default HallOfFameHeader