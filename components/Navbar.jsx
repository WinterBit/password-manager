import React from 'react'

const Navbar = () => {
  return (
    <div>
      <nav className='w-full h-12 border-2 flex justify-between border-red-500'>
        <div className="icon">
            <span>Pass</span><span>Manage</span>
        </div>
        <div className="login">
            LogIn
        </div>
      </nav>
    </div>
  )
}

export default Navbar
