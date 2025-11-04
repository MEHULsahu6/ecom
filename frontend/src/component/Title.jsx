import React from 'react'

function Title({ text1, text2 }) {
  return (
    <div className='inline-flex gap-2 items-center text-center mb-3 text-3xl md:text-4xl font-bold text-red-900'>
      <p>{text1} <span className='text-red-300 font-bold'>{text2}</span></p>
    </div>
  )
}

export default Title
