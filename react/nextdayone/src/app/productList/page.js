'use client'
import Image from 'next/image'
import React from 'react'
import {Card, CardHeader, CardBody} from "@nextui-org/react";
import Viber from '../viber/page';
import ProductCard from '@/components/productCard/page';

const page = () => {
    const productList =[
        {id: 321, productName: 'Hawkins Cooker 5l', price:4000, description: 'Red color', productImage:'https://static-01.daraz.com.np/p/05c01d4d098b8a45dea824b9857eec9b.jpg' },
        {id: 571, productName: 'Induction Stove', price:14000, description: 'very good', productImage:'https://static-01.daraz.com.np/p/05c01d4d098b8a45dea824b9857eec9b.jpg' },
        {id: 751, productName: 'Panasonic Cooker', price:5000, description: 'Red color', productImage:'https://static-01.daraz.com.np/p/05c01d4d098b8a45dea824b9857eec9b.jpg' },
        {id: 431, productName: 'Mixture Baltra', price:7000, description: 'Red color', productImage:'https://static-01.daraz.com.np/p/05c01d4d098b8a45dea824b9857eec9b.jpg' },
        {id: 521, productName: 'Television Samsung', price:1000, description: 'Red color', productImage:'https://static-01.daraz.com.np/p/05c01d4d098b8a45dea824b9857eec9b.jpg' },
    ]
  return (
   <div>
    <div><Image src="/hawkins.jpeg" width={200} height={300}/></div>
   <div className='flex'>
        {productList.map((item)=> <ProductCard item={item}/> )}
    </div>
   
    </div>
  )
}

export default page