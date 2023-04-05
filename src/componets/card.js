import React, { Children } from 'react';
import './Card.css'

export const Card = (Children) => {
  return (
    <div className='card'>
        {Children}
  <h2>card</h2>
    </div>
  )
}
