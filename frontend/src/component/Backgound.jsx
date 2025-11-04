import React from 'react'
import back1 from "../assets/back1.jpg"
import back2 from "../assets/back2.jpg"
import back3 from "../assets/back3.jpg"
import back4 from "../assets/back4.jpg"

function Backgound({ heroCount }) {
  const backgrounds = [back2, back1, back3, back4]
  return (
    <img
      src={backgrounds[heroCount]}
      alt={`Background ${heroCount}`}
      className='w-full h-full object-cover rounded-2xl shadow-[0_8px_24px_rgba(0,0,0,0.08)]'
    />
  )
}

export default Backgound
