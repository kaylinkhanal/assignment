'use client'
import Image from 'next/image'
import React from 'react'
import {Card, CardHeader, CardBody, Button} from "@nextui-org/react";
import Link from 'next/link';
import { FaHeart } from 'react-icons/fa';
import { useDispatch } from 'react-redux';
import { addFavItems } from '@/redux/reducerSlices/productSlice';


const ProductCard = ({item}) => {
  
  const dispatch =useDispatch()
  const addWishlist = ()=>{
    dispatch(addFavItems(item))

  }
  return (
       <Card className="py-4 m-2">
        <FaHeart onClick={()=> addWishlist()}/>
   

    <Link href={"/productList/"+item.id}>
    <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
      <p className="text-tiny uppercase font-bold">{item.price}</p>
      <small className="text-default-500">{item.description}</small>
      <h4 className="font-bold text-large">{item.productName}</h4>
 
    </CardHeader>
   
   
      <CardBody className="overflow-visible py-2">
      <Image
        alt="Card background"
        className="object-cover rounded-xl"
        src={item.productImage}
        width={270}
        height={300}
      />
    </CardBody>
        </Link>
 
  </Card>

 
  )
}

export default ProductCard