import React from 'react'

const Header = ({headerData, inp,img, login,btnstyle,mystyle}) => {

  return (
    <div className='sm:h-[28vh] h-[17vh] bg-transparent sm:px-16 px-6 shadow-lg' style={inp==="none" ? mystyle: {backgroundColor: "transparent"}}>
        <div className="flex items-center justify-between h-1/2">
            <img className='sm:h-3/4 h-full ' src={img} alt="img" />
            {inp === 'none' ? "" : <input className='px-14 w-[55vw] hidden sm:inline-block outline-none border-[0.8px] border-gray rounded-lg py-3' type="text" placeholder='Search by Product title' />
 }
            <button className='bg-orange-400 hidden text-white px-10 py-3 rounded-xl text-xl sm:inline-block' style={inp==="none" ? btnstyle: {backgroundColor: "#D2614B"}}>{login}</button>
        </div>
      {
        headerData.map((elem, idx)=>  <nav key={idx} className='sm:flex h-1/2 items-center hidden justify-between'>
        <a className='hover:text-red-600' href="#">{elem.first}</a>
        <a href="#">{elem.second}</a>
        <a href="#">{elem.third}</a>
        <a href="#">{elem.fourth}</a>
        <a href="#">{elem.fifth}</a>
        <a href="#">{elem.sixth}</a>
           
    </nav>)
      }
    </div>
  )
}

export default Header