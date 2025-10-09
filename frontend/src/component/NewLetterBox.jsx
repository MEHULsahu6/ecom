import React from 'react'

function NewLetterBox() {
  const handleSubmit = (e) => {
    e.preventDefault()
  }
  return (
    <div className='w-full h-[40vh] bg-[#a39283] flex flex-col items-center justify-center gap-4'>
      <p className='md:text-3xl text-xl text-black-100 font-semibold px-6'>Subscribe now & get 20% off</p>
      <p className='md:text-lg text-sm text-center text-blue-100 font-semibold px-6 max-w-xl'>
        Subscribe now and enjoy exclusive savings, special deals, and early access to new collections.
      </p>
      <form onSubmit={handleSubmit} className='flex items-center justify-center gap-4 px-6 w-full max-w-4xl'>
        <input type="email" placeholder='Enter Your Email' required
          className='placeholder-black bg-[#F5F2EF] w-full max-w-md h-10 px-6 rounded-lg shadow-sm shadow-black' />
        <button type='submit' className='text-base px-6 py-3 hover:bg-slate-500 cursor-pointer bg-[#2e3030c9] text-white rounded-lg border border-[#80808049] shadow-sm shadow-black'>
          Subscribe
        </button>
      </form>
    </div>
  )
}

export default NewLetterBox
