import React from 'react'
import assets from '../../assets/assets'
import './Place.css'

const Place = () => {
  return (
    <div className="hero-section">
      <div className="bgpic"><img src={assets.BgPlace} alt="" className='BgPlace' /></div>
    <div className="airplane"></div>
    <div className="heading">
      <h1>Philippines</h1>
      <h2>We are super Specialists</h2>
      <p>
    As a specialist tour operator, we plan unique travel adventures for our niche clientele. More specifically, we organize trips for people 
    <br />with shared hobbies or interests, such as cycling or hiking, island hopping, who would like to engage in such activities during 
    </p>
      </div>
      <div className='grid-item'><img src={assets.flight} alt=""  className='flight'/></div>
   
    <div className="grid-gallery">
      <div className="grid-item">
        <img src={assets.SouthAfrica} alt="South Africa" className='SouthAfrica' />

      </div>
      <div className="grid-item">
        <img src={assets.London}alt="London"  className='London'/>

      </div>
      <div className="grid-item">
        <img src={assets.SouthAfrica1} alt="SouthAfrica1"className='SouthAfrica1' />

      </div>
      <div className="grid-item">
        <img src={assets.Russia} alt="Greece"  className='russia'/>

      </div>
      <div className="grid-item">
        <img src={assets.India} alt="India"  className='india'/>
      
      </div>
      <div className="grid-item">
        <img src={assets.Russia1} alt="France" className='russia1' />
      </div>
      <div className="grid-item">
        <img src={assets.Greece} alt="Greece"className='Greece' />
  
      </div>
      <div className="grid-item">
        <img src={assets.America} alt="America" className='America' />
      </div>
      <div className="grid-item">
        <img src={assets.Haly} alt="Haly" className='Haly' />
      </div>
    </div>
    <button className="read-more-btn">Read More</button>
  </div>
  )
}
export default Place