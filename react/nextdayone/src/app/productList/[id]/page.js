'use client'
import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';


const page = () => {
  return (
    <div className='flex m-2'>
       <Carousel className='w-[50%] m-4'>
                <div>
                    <img src="/hawkins.jpeg" />
                    <p className="legend">Legend 1</p>
                </div>
                <div>
                    <img src="/hawkins.jpeg" />
                    <p className="legend">Legend 2</p>
                </div>
                <div>
                    <img src="/hawkins.jpeg" />
                    <p className="legend">Legend 3</p>
                </div>
            </Carousel>
    <h1 className='m-4 text-4xl text-green-600'>Hawkins cooker 5 liter</h1>
    </div>
  )
}

export default page