import React from 'react'
import HigherOrder from './HigherOrder'

const Hover = ({count, increment}) => {
  return (
    <div className='counter'>
        <h4>HoverCounter : {count}</h4>
        <button onMouseOver={increment}>HoverOnMe😉</button>
    </div>
  )
}

export default HigherOrder(Hover);