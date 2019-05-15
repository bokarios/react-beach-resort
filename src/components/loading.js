import React from 'react'
import img from '../images/gif/loading-gear.gif'

export default function loading() {
  return (
    <div className='loading'>
      <h6>Rooms data is loading</h6>
      <img src={img} alt='loading' />
    </div>
  )
}
