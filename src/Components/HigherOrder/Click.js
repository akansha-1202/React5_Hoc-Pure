import React from 'react'
import HigherOrder from './HigherOrder'

const Click = ({count, increment}) => {
  return (
    <div className='counter'>
        <h4>ClickCounter : {count}</h4>
        <button onClick={increment}>ClickMe😊</button>
    </div>
  )
}

export default HigherOrder(Click);