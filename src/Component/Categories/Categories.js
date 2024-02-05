import React from 'react'
import './Categories.css'
import star from "../Assets/Star 10.svg"
import mobile from "../Assets/mobile img.jpg"

const Categories = () => {
  return (
    <div className='customer-session'>
      <div className='customer-heading'>
        <h4>Happy Customer</h4>
        <h1>Customer Smile is my Breathe<br/><span> OF Happiness</span></h1>
      </div>
      <div className=' description'>
        <p>Every sense of happiness and satisfaction that is born from from Customer become a value  that is not compareAble to anything.Trust is Priceless</p>
      </div>
      <div className='rating'>
<span>(4.5)</span>
<div className='star-img'>
<img src={star} alt='8'></img>        
<img src={star} alt='8'></img>        
<img src={star} alt='8'></img>        
<img src={star} alt='8'></img>        
<img src={star} alt='8'></img>        

</div>
</div>

<div className='text'>
  <p>hi it me helo i am ver sart wifth thet hgo bu gvi vuu hubhbhk  ufhyn  fcyigj  fctufhh  jjuu hudhbdt vdciec</p>
</div>
<div className='owner'>
  <h3>Ronald Brook</h3>
  <span>CEO</span>
</div>

      </div>
     
    )
}

export default Categories