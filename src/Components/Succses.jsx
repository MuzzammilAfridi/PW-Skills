import React from 'react'

const Succses = () => {
  return (
    <div className='flex flex-col items-center justify-center '>
        <h3 className='text-3xl font-semibold text-center'>Success Stories</h3>
        <div className="w-[70vw] my-10  border-[1px] shadow-xl rounded-lg">
            <h4 className='text-center pb-4 w-full pt-3 rounded-t-lg bg-green-300'>100% Increment</h4>
            <div className="flex py-5 px-5w-full">
                <div className="h-16 ml-5 w-16 rounded-full  flex items-center justify-center text-3xl bg-gray-500">M</div>
                <div className='flex  flex-col ml-3 justify-center '>
                <h5 className='text-lg font-semibold'>Muzzammil Afridi</h5>
                <p className=' text-slate-500'>Web Developer</p>
                </div>
            </div>
            <p className='  px-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque consequatur, dolorum velit saepe esse nostrum reiciendis maiores, et aliquid assumenda vel vero ipsa commodi minima nobis iste recusandae, nemo quasi.</p>
            <div className="flex py-5 px-5 gap-10">
                <div>
                <p>From</p>
                <img className='mt-2 w-40' src="./src/assets/Images/Swigy.png" alt="img" />
                </div>

                <div>
                    <p>To</p>
                    <img className='mt-2 w-40' src="./src/assets/Images/redbus.png" alt="" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Succses