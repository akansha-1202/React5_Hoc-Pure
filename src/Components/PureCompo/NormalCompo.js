import React, { Component } from 'react'

export default class NormalCompo extends Component {
  constructor(){
    super();
    this.state = {
      count : 0
    }
  }
  render() {
    console.log("Normal Component : ",this.state.count);
    return (
      <div className='counter colour'>
        <h4>Normal Component : {this.state.count}</h4>
        <button onClick={()=>[
          this.setState({ count : 1})
        ]}>➕</button>
      </div>
    )
  }
}
