import React from 'react'

const OurAchivement = ({OurAchivementData}) => {
  return (
    <div className='flex items-center justify-center flex-col'>
        <h2 className='text-3xl  my-5 font-semibold text-center'>Our Achievers Work With</h2>
        <div className="flex gap-5">

          {OurAchivementData.map((elem, idx)=> <div key={idx} className="h-28 w-80 flex items-center justify-center mb-12 shadow-2xl rounded-lg border-[1px] border-slate-300">
            <img src={elem.img} alt="img" />
          
          </div> )}
        </div>
    </div>
  )
}

export default OurAchivement