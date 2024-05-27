import React from 'react'
//HIGHER ORDER COMPONENT
const LayoutProvider = ({children}) => {
  return (
    <div>LayoutProvider : {children}</div>
  )
}

export default LayoutProvider