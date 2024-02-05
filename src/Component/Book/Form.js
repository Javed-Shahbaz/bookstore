import React, {useState} from 'react'
import './Form.css'

export const Form = ({title,author,category,handle}) => {
  
 
  return (
    <>
    <div className='line-bar'></div>
    <div className='form scale-in-hor-left'>
      <div className='form-heading'>
        <h2>ADD NEW BOOK</h2>
      </div>
      <div className='form-details'>
        <div className='form-description'>


<input  onChange={(e) => title(e.target.value) } type="text"  placeholder='Add Title' /> <input   onChange={(e) => author(e.target.value)}type="text"  placeholder='Add Author' /> 
<input  onChange={(e) => category(e.target.value) }type="text"  placeholder='Add Category' /> 

          <button onClick={handle} className='button1'>Add Book</button>
        </div>
      </div>
    </div>
    </>
  )
}


