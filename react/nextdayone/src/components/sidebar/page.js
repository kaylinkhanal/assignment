'use client'
import { Listbox, ListboxItem } from '@nextui-org/react'
import React from 'react'

const Sidebar = () => {
    const sideBarItems= 
     ['Home', 'Calendar','Settings','Notifications']
  return (
    <Listbox
        aria-label="Actions"
        onAction={(key) => alert(key)}
      >
        {sideBarItems.map((item)=>{
            return  <ListboxItem key="new">{item}</ListboxItem>
        })}
       
      
      </Listbox>
   
  )
}

export default Sidebar