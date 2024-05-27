'use client'
import React, {useEffect, useState} from 'react'

const page = () => {
    const lotteryItems = [
        '212',
        '3232',
        '4343',
        '324',
        '434',
        '5435',
        '4321',
        '4321',
        '5434',
        '4321'
    ]
    const [lotteryId, setLotteryId] = useState(null)
    const [isPaused, setIsPaused] = useState(false)
    useEffect(()=>{
        if(!isPaused){
            setTimeout(() => {
                let randomNum = Math.ceil(Math.random()*lotteryItems.length-1)
                if(randomNum === lotteryId){
                    randomNum=randomNum+1
                }
                 setLotteryId(randomNum)
            }, 500);
        }
   
    },[lotteryId, isPaused])


    const pauseGame = () => {
        setIsPaused(!isPaused)

    }

    const generateResult = ()=>{
        if(lotteryItems[lotteryId] !== 'X' && isPaused){
            return <div>You won</div>
        }else if(isPaused && lotteryItems[lotteryId] == 'X' ){
            return <div>You lost</div>
        }
    }
  return (
    <div>
        {
            lotteryItems.map((item, id)=>{
                return <div key={id} style={{backgroundColor: id===lotteryId ? 'red' : null}} className='w-32 shadow-lg m-2 p-2'>{item}</div>
            })
        }
     {generateResult()}
   <button onClick={pauseGame}>{isPaused ? 'Start' : 'Pause'}</button>
    </div>
  )
}

export default page