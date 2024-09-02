import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Bgmain from './components/Bgmain/Bgmain'
import Women from './components/Women/Women'
import Place from './components/Place/Place'

const App = () => {
  return (
    <div className='app'>
      <Navbar />
      <Bgmain />
      <Women />
      <Place />
  
    </div>
  )
}
export default App
