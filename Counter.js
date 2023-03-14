import React, { Component } from 'react'

export class Counter extends Component {
  constructor(props)  
  {
     super(props)
     this.state={
        count:0
     }
    }

    increament()
    {
        this.setState({
            count:this.state.count+1
        })
    }

    decrement()
    {
      this.setState({
        count:this.state.count-1
    })
    }

  render() {
    return (
      <div>
        <h1> Count: {this.state.count}</h1>
        <div>

        <button onClick={ () => this.increament()}>Increment </button> 
        <button onClick={ () => this.decrement()}>Decrement </button>

        </div>

      </div>
    )
  }
}

export default Counter