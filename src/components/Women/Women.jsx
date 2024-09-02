import React from 'react'
import './Women.css'
import assets from '../../assets/assets'
const Women = () => {
  return (
    <div className='Women-Container'>
        <img src={assets.SideBracket1} alt="" className='Side1'/>
        <img src={assets.Women} alt="" className='Women' />
        <img src={assets.SideBracket2} alt="" className='Side2' />
        <img src={assets.SideImg1} alt="" className='Sideimg1' />
        <img src={assets.SideImg2} alt="" className='Sideimg2' />
        <img src={assets.AboutStyle} alt="" className='Aboutstyle'/>
        <div className=' About'>
            <p className='aboutname'>About us</p>
            <h1>Explore All Tour <br />Of The World With Us.</h1>
            <p>At Stanbrook Tourism, we know that luxury is personal. With over two <br />
            decade’s experience in arranging the finest luxury holidays,
                 we go that extra <br />
                 mile to ensure that every detail is built around you. So, you can simply sit <br />
                 back, 
                 relax and trust us to take you there. <br />

                 <br />
                  Privately owned by full-time, hands-on directors, backed up by a loyal and</p>
            <button>Read More</button>     
        </div>
    </div>
  )
}
export default Women
