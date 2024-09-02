import React from 'react'
import './Bgmain.css'
import assets from '../../assets/assets'

const Bgmain = () => {
  return (
    <div className='Bgmain'>
        <img src={assets.bgmain} alt="" className='bg'/>
        <img src={assets.shade} alt=""  className='shade'/>
        <img src={assets.WhiteBg1} alt="" className='WhiteBg' />
        <div className='mainText'>
          <h5>Explore The World</h5>
          <h1 className='Head'>MAKE YOUR LIFE A</h1>
          <h2>MEMORABLE SYMPHONEY <br />
             OF TRAVEL</h2>
          <p>It’s time to elevate your travel out of the ordinary.
             Passionate about travel and tailor-made holidays, we use our in-depth knowledge <br /> to craft trips that push the boundaries beyond your imagination.
             We have hand-picked many breathtaking experiences for you, a <br /> preview of the curated journeys you will indulge in.</p>
          <button className='explore-button'>Explore Our Trips</button>
        </div>
        
    </div>
  )
}
export default Bgmain
