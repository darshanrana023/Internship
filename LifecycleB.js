import React, { Component } from 'react'

export class LifecycleB extends Component {
    constructor(props){
        super (props)

        this.state = {
            name:'InnoBrain'
        }
        console.log('Lifecycle B Constructor from Constructor')
    }
    
    static getDerivedStateFromProps(props,status)
    {
        console.log("Lifecycle B method from getDerivedStateFromProps")
        return null
    }

    componentDidMount()
    {
        // setTimeout(() => {
        //     this.setState({ name: 'Innobrain'});
        // },2000);
        console.log("Lifecycle B from componentDidMount")
    }

    shouldComponentUpdate()
    {
      console.log("Lifecycle B from shouldComponentUpdate Method")
      return true
    }

    getSnapshotBeforeUpdate(prevProps,prevState)
    {
      console.log('Lifecycle B from get snapshotBeforeUpdate')
      return null
      
    }

    componentDidUpdate()
    {
      console.log('Lifecycle B from componentDidUpdate')
    }
   

  render() 
  {
    console.log("Lifecycle B from componentDidMount")
     
      
    return (
      <div>
        <h2>Lifecycle B from render method</h2>
       
      </div>
    )
  }
}

export default LifecycleB