import React from 'react'
import Button from './Button'

export default function Header({title}) {
  // console.log(props);

  return (
    <div className='header'>
      <h1>{title}</h1>
      <Button color="white" background="green" />
    </div>
  )
}
