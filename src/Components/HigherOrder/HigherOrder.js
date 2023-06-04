import React, { useState } from 'react'

const HigherOrder = (OriginalCompo) => {
    const NewCompo = () =>{
        const [count, setCount]=useState(0);
        const increment = () => {
          setCount(count+1);
        }
  return <OriginalCompo count={count} increment={increment}/>
    }
  return NewCompo;
}

export default HigherOrder;