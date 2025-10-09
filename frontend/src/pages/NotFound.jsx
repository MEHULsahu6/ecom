import React from 'react'
import { useNavigate } from 'react-router-dom'

function NotFound() {
  let navigate = useNavigate()
  return (
    <div className='w-full h-full bg-[#EFE9E4] flex flex-col items-center justify-center gap-10 text-[#0F0F0F] text-6xl font-bold'>
      404 Page Not Found
      <button className='bg-[#0F0F0F] px-6 py-3 rounded-2xl text-[#EFE9E4] text-lg hover:bg-[#9B8C80] transition'
        onClick={() => navigate("/login")}>Login</button>
    </div>
  )
}

export default NotFound
