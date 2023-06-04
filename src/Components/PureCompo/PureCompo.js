import React, { PureComponent } from 'react'

export default class PureCompo extends PureComponent {
  constructor(){
    super();
    this.state = {
        count : 0 
    }
  }
  render() {
    console.log("Pure Component : ",this.state.count);
    return (
      <div className='counter colour'>
        <h4>Pure Component : {this.state.count}</h4>
        <button onClick={() => {
            this.setState({ count : 1})
        }}>➕</button>
      </div>
    )
  }
}
