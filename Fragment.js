// import React from 'react'

// function Fragment() {
//   return (
//     //React.js is used in place of div tag that no display div tag in console
//     // <React.Fragment>
//     <div>
//         <h1>This is Fragement</h1>
//         <h2>This is Nothing</h2>
//         </div>
//     // </React.Fragment>
//   )
// }
import React, { Component } from 'react'

export class Fragment extends Component {
  render() {
    return (
      <React.Fragment>
           
          <h1>This is Fragement</h1>
          <h2>This is Nothing</h2>
              
      </React.Fragment>
    )
  }
}

export default Fragment

