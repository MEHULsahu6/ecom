import React from 'react'
import Title from './Title'
import { RiExchangeFundsLine } from "react-icons/ri";
import { TbRosetteDiscountCheckFilled } from "react-icons/tb";
import { BiSupport } from "react-icons/bi";

function OurPolicy() {
  return (
    <div className='w-full min-h-[70vh] flex flex-col items-center justify-center gap-12 bg-[#dfac79] py-12 px-4'>
      <div className='text-center w-full max-w-4xl'>
        <Title text1={"OUR"} text2={"POLICY"} />
        <p className='text-blue-100 text-lg max-w-xl mx-auto'>Customer-Friendly Policies – Committed to Your Satisfaction and Safety.</p>
      </div>
      <div className='flex flex-wrap justify-center gap-16'>
        <div className='w-[300px] flex flex-col items-center gap-4 text-center text-blue-100'>
          <RiExchangeFundsLine className='w-14 h-14 md:w-20 md:h-20 text-[#90b9ff]' />
          <p className='font-semibold text-xl'>Easy Exchange Policy</p>
          <p className='text-sm text-aliceblue'>Exchange Made Easy – Quick, Simple, and Customer-Friendly Process.</p>
        </div>
        <div className='w-[300px] flex flex-col items-center gap-4 text-center text-blue-100'>
          <TbRosetteDiscountCheckFilled className='w-14 h-14 md:w-20 md:h-20 text-[#90b9ff]' />
          <p className='font-semibold text-xl'>7 Days Return Policy</p>
          <p className='text-sm text-aliceblue'>Shop with Confidence – 7 Days Easy Return Guarantee.</p>
        </div>
        <div className='w-[300px] flex flex-col items-center gap-4 text-center text-blue-100'>
          <BiSupport className='w-14 h-14 md:w-20 md:h-20 text-[#90b9ff]' />
          <p className='font-semibold text-xl'>Best Customer Support</p>
          <p className='text-sm text-aliceblue'>Trusted Customer Support – Your Satisfaction Is Our Priority.</p>
        </div>
      </div>
    </div>
  )
}

export default OurPolicy
