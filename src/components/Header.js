import React from 'react'

export default function Header({title}) {
  // console.log(props);

  return (
    <div className='header'>
      <h1>{title}</h1>
      <button>Clik Me</button>
    </div>
  )
}
