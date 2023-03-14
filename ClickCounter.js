import React, { Component } from 'react'
import UpdatedComponent from './WithCounter'
export class ClickCounter extends Component {
  render() {
    const {count,increamentCount}= this.props
    return (
      <div>
        <h2> This is New Branch </h2>
        < button onClick={increamentCount}>Click {count} times</button>
      </div>
    )
  }
}

export default UpdatedComponent(ClickCounter)
