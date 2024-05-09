'use client'
import React , {useEffect, useRef}from 'react'

const page = () => {
    const inputRef = useRef(null)
    useEffect(()=>{
        if(inputRef.current){
            inputRef.current.focus()
        }
    },[])
  return (
    <div>
        <input ref={inputRef} placeholder='enter name'/>
  
    </div>
  )
}

export default page