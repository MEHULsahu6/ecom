import React from 'react'
import logo from "../assets/logo.png"

function Footer() {
  return (
    <div className='w-full md:h-[36vh] h-[21vh] mb-20 md:mb-0 bg-[#1d313a] text-[#F5F2EF]'>
      <div className='w-full md:h-[30vh] h-[15vh] flex flex-wrap md:flex-nowrap items-center justify-around px-6 py-4'>
        <div className='md:w-[30%] w-[100%] flex flex-col gap-3'>
          <div className='flex items-center gap-2'>
            <img src={logo} alt="OneCart" className='md:w-[40px] md:h-[40px] w-[30px] h-[30px]' />
            <p className='md:text-xl text-lg font-semibold'>OneCart</p>
          </div>
          <p className='md:block hidden text-base'>
            OneCart is your all-in-one online shopping destination, offering top-quality products, unbeatable deals, and fast delivery—all backed by trusted service.
          </p>
          <p className='md:hidden text-base'>Fast. Easy. Reliable. OneCart Shopping</p>
        </div>
        <div className='md:w-[25%] w-[45%] flex flex-col items-center text-center gap-3'>
          <p className='text-xl font-semibold'>COMPANY</p>
          <ul className='text-base space-y-2'>
            <li className='cursor-pointer hover:text-[#9B8C80]'>Home</li>
            <li className='cursor-pointer hover:text-[#9B8C80]'>About us</li>
            <li className='cursor-pointer hidden md:block hover:text-[#9B8C80]'>Delivery</li>
            <li className='cursor-pointer hover:text-[#9B8C80]'>Privacy Policy</li>
          </ul>
        </div>
        <div className='md:w-[25%] w-[45%] flex flex-col items-center text-center gap-3'>
          <p className='text-xl font-semibold'>GET IN TOUCH</p>
          <ul className='text-base space-y-2'>
            <li>+91-9876543210</li>
            <li>contact@onecart.com</li>
            <li className='hidden md:block'>+1-123-456-7890</li>
            <li className='hidden md:block'>admin@onecart.com</li>
          </ul>
        </div>
      </div>
      <div className='w-full h-[1px] bg-slate-400'></div>
      <div className='w-full h-[5vh]bg-[#1d313a] text-[#F5F2EF] flex items-center justify-center font-semibold text-sm'>
        Copyright 2025 @ezcart.com - All Rights Reserved
      </div>
    </div>
  )
}

export default Footer
