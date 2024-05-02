'use client'
import React, {useState} from 'react'

const page = () => {
    let [number, setNumber] = useState(5)
    
    const increment = ()=> {
        setNumber(number + 1)
    }
  return (
    <div>
        <button className='bg-teal-200 p-2' onClick={increment}>+</button>
        {number}
        <button className='bg-teal-200 p-2'>-</button>
    </div>
  )
}

export default page