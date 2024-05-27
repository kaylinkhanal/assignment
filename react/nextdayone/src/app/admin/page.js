'use client'
import { Card, CardBody, CardHeader } from '@nextui-org/react'
import React from 'react'

const page = () => {
  return (
    <div>
        <Card className='m-4 p-4 w-[20%]'>
            <CardBody>
                <CardHeader>Add Categories</CardHeader>
            </CardBody>
        </Card>

        <Card className='m-4 p-4 w-[20%]'>
            <CardBody>
                <CardHeader>Add Products</CardHeader>
            </CardBody>
        </Card>
    </div>
  )
}

export default page