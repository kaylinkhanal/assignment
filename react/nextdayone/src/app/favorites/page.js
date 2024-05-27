'use client'
import ProductCard from '@/components/productCard/page';
import React from 'react'
import { useSelector } from 'react-redux';
const Favorites = () => {
const {favItems} = useSelector(state=>state.product)
  return (
    <div>
        {favItems.map((item)=>{
            return <ProductCard item={item}/>
        })}
    </div>
  )
}

export default Favorites