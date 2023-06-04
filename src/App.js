import React from 'react'
import './App.css';
import Hover from './Components/HigherOrder/Hover'
import Click from './Components/HigherOrder/Click'
import NormalCompo from './Components/PureCompo/NormalCompo'
import PureCompo from './Components/PureCompo/PureCompo'

const App = () => {
  return (
    <div className='main-box'>
      <h2>HigherOrder Components</h2>
      <div className='box'>
        <Hover/>
        <Click/>
      </div>

      <h2>Pure Component</h2>
      <div className='box'>
        <NormalCompo/>
        <PureCompo/>
      </div>
    </div>
  )
}

export default App