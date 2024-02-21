import React from 'react'

const FreqAskQus = ({freqAskQus}) => {
  return (
    <div>
        <h4 className='text-3xl text-center my-8 font-semibold text-[#5A4BDA]'>Frequently Asked Questions</h4>
        <div className="w-[90vw] pl-7 flex flex-col gap-4 sm:w-[95vw] mb-6 ">
           
        {freqAskQus.map((elem,idx)=> <h4 key={idx} className='text-xl font-semibold  border-[1.50px] p-3 rounded-lg border-gray-300 sm:py-6'>{elem.qus}</h4>)}     
        </div>
    </div>
  )
}

export default FreqAskQus