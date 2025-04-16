import React from 'react'

const Urlinput = () => {
  return (
    <div className='Urlbox w-[45vw] rounded-lg bg-[#1f1f1f]'>

      <div className="icon text-2xl text-center py-3">
        <span className='text-purple-500'>&lt; </span><span>Pass</span><span className='text-purple-500'>Manage</span> <span className='text-purple-500'> /</span><span className='text-purple-500'> &gt;</span>
        <div className="icontxt text-base text-gray-700 font-bold">Your Password Manager</div>
      </div>

      <div className="inputbox pb-3">

        <div className="up flex flex-col gap-1 w-11/12 m-auto py-2">
          <label className='text-sm font-bold' htmlFor="webUrl">Website URL</label>
          <input className='bg-transparent outline-none border-[1px] border-gray-500 placeholder-gray-700 p-2 rounded-lg' type="url" id='webUrl' placeholder='Enter Website URL' />
        </div>

        <div className="down flex justify-between w-11/12 m-auto py-2">

          <div className="userName flex flex-col gap-1 w-[48%]">
            <label className='text-sm font-bold' htmlFor="username">Username</label>
            <input className='bg-transparent outline-none border-[1px] border-gray-500 placeholder-gray-700 p-2 rounded-lg' type="text" id='username' placeholder='Enter your username' />
          </div>

          <div className="passWord flex flex-col gap-1 w-[48%]">
            <label className='text-sm font-bold' htmlFor="password">Password</label>
            <input className='bg-transparent outline-none border-[1px] border-gray-500 placeholder-gray-700 p-2 rounded-lg' type="password" id='password' placeholder='Enter your password' />
          </div>

        </div>
      </div>

      <div className="save-box w-full flex justify-center py-3 items-center">
        <button className='save-btn relative cursor-pointer h-12 w-24 rounded-full'>
          <div className="save-btn-bg absolute center-save bg-[#2f2f2f] w-[93%] h-[90%] rounded-full"></div>
          <div className="save-btn-content absolute center-save text-lg font-semibold">Save</div>
        </button>
      </div>

    </div>
  )
}

export default Urlinput
