import React, { Component } from 'react'

export class RefsDemo extends Component {

    constructor(props) {
      super(props)
    
    //   this.inputref =React.createRef()
    // Second Method
      this.cdRef=null
      this.setCBRef=element=>{
        this.CBRef=element
      }
     }

      componentDidMount()
      {
        // this.inputref.current.focus()
        // console.log(this.inputref)
         //2nd method
         if(this.cbRef)
           this.cbRef.focus()
      }

      clickHandler = () =>{
        alert(this.inputref.current.value)
      }
    
  render() {
    return (
      <div>
        {/* <input type='text' ref={this.inputref}/> */}
        <input type='text' ref={this.setCBRef}/>
        <button onClick={this.clickHandler}>Click</button>
      </div>
    )
  }
}

export default RefsDemo