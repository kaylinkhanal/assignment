'use client'
import React, {useEffect, useState} from 'react'

const page = () => {
    const lotteryItems = [
        'Car',
        'X',
        'Bike',
        'X',
        'X',
        'X',
        'TV',
        'X',
        'X',
        'X'
    ]
    const [lotteryId, setLotteryId] = useState(null)
    useEffect(()=>{
        setInterval(() => {
            const randomNum = Math.ceil(Math.random()*10)
            setLotteryId(randomNum)
        }, 100);
    },[])
  return (
    <div>
        {lotteryId}
        {
            lotteryItems.map((item, id)=>{
                return <div style={{backgroundColor: id===lotteryId ? 'red' : null}} className='w-32 shadow-lg m-2 p-2'>{item}</div>
            })
        }
        <button>Pause</button>
    </div>
  )
}

export default page