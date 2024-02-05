import React from 'react'
import './Progress.css'

export const Progress = () => {
  return (
  <div className='box'>
<div className='percent'>
  <svg>
    <circle cx={'35'} cy={'35'} r={'35'}></circle>
    <circle cx={'35'} cy={'35'} r={'35'}></circle>
  </svg>
</div>
  </div>
    )
}
