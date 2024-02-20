import React from 'react'

const FreqAskQus = () => {
  return (
    <div>
        <h4 className='text-3xl text-center my-8 font-semibold'>Frequently Asked Questions</h4>
        <div className="w-[90vw] pl-7 flex flex-col gap-4 sm:w-fit mb-6 ">
            <h4 className='text-xl font-semibold  border-[1.50px] p-3 rounded-lg border-gray-300 sm:py-6'>I need to purchase a course. Whom should I contact ?</h4>
            <h4 className='text-xl font-semibold  border-[1.50px] p-3 rounded-lg border-gray-300 sm:py-6' >I am not able to view my enrolled course. What to do/whom to contact ?</h4>
            <h4 className='text-xl font-semibold  border-[1.50px] p-3 rounded-lg border-gray-300 sm:py-6' >What is an experience portal ? How to use it ?</h4>
            <h4 className='text-xl font-semibold  border-[1.50px] p-3 rounded-lg border-gray-300 sm:py-6' >How to get Placements and Job assistance ?</h4>
        </div>
    </div>
  )
}

export default FreqAskQus