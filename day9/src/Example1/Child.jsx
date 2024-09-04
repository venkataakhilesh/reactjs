import React from 'react'
import GrandChild from '../GrandChild'

const Child = ({ data }) => {
  return (
    <>
    <GrandChild data={data}/>
    </>
  )
}

export default Child