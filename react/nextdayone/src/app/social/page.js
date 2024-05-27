import Feed from '@/components/feed/page'
import Sidebar from '@/components/sidebar/page'
import React from 'react'

const page = () => {
  return (
    <div className='flex'>
        <Sidebar/>
        <Feed/>
      
    </div>
  )
}

export default page