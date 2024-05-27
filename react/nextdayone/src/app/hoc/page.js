'use client'
import React from 'react'
import LayoutProvider from './layoutProvider'

const Hoc = () => {
  return (
    <div>hello
        <LayoutProvider >
                <input placeholder='enter name'/>
        </LayoutProvider>
    </div>
  )
}

export default Hoc