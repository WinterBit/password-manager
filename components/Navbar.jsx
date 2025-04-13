import React from 'react'

const Navbar = () => {
  return (
    <div>
      <nav className='w-full py-3 flex justify-between border-b-[0.5px] border-gray-500'>
        <div className="icon ml-16 p-2 text-2xl">
            <span className='text-purple-500'>&lt; </span><span>Pass</span><span className='text-purple-500'>Manage</span> <span className='text-purple-500'> /</span><span className='text-purple-500'> &gt;</span>
        </div>

        <div className="login p-2 px-6 mr-16 text-xl cursor-pointer gradient-btn">
            LogIn
        </div>
      </nav>
    </div>
  )
}

export default Navbar
