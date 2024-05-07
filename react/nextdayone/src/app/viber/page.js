'use client'
import React, {useState} from 'react'
import { FaHeart } from "react-icons/fa";

//functional components---> stateless component
const page = () => {
    let [color, setColor] = useState('gray')
    const changeColor = ()=> {
        // ? : syntax is ternary operator
        //use it if possible instead of if else
       setColor(color==='red' ? 'gray': 'red')
    }
  return (
    <div className='p-2 w-8 shadow-lg m-2'>
        <FaHeart onClick={()=>changeColor()} className={'text-'+color+'-400'}/>
    </div>
  )
}

export default page