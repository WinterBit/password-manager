import React from 'react'

const Urlinput = () => {
  return (
    <div className='w-[45vw] border-2 border-red-500'>

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

      <div className="Save w-full py-3">
        <button className='gradient-btn m-auto text-xl py-2 px-6 font-semibold'>Save</button>
      </div>

    </div>
  )
}

export default Urlinput
