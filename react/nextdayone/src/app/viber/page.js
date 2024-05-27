'use client'
import React, {useState} from 'react'
import { FaHeart } from "react-icons/fa";

//functional components---> stateless component
const Viber = () => {
    let [color, setColor] = useState('gray')
    const changeColor = ()=> {
        // ? : syntax is ternary operator
        //use it if possible instead of if else
       setColor(color==='red' ? 'gray': 'red')
    }
  return (
        <FaHeart onClick={()=>changeColor()}color={color}/>
  )
}

export default Viber