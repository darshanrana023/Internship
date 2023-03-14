import React, { Component } from 'react'
import LifecycleB from './LifecycleB'
export class LifecycleA extends Component {
    constructor(props){
        super (props)

        this.state = {
            name:'InnoBrain'
        }
        console.log('Lifecycle A Constructor from Constructor')
    }
    
    static getDerivedStateFromProps(props,status)
    {
        console.log("Lifecycle A method from getDerivedStateFromProps")
        return null
    }

    componentDidMount()
    {
        setTimeout(() => {
            this.setState({ name: 'Innobrain'});
        },2000);
        console.log("Lifecycle A from componentDidMount")
    }

    shouldComponentUpdate()
    {
      console.log("Lifecycle A from shouldComponentUpdate Method")
      return true
    }

    getSnapshotBeforeUpdate(prevProps,prevState)
    {
      console.log('Lifecycle A from get snapshotBeforeUpdate')
      return null
      
    }

    componentDidUpdate()
    {
      console.log('Lifecycle A from componentDidUpdate')
    }
    changeState=() =>
    {
      this.setState({
        name:'Coding'
      })
    }

  render() 
  {
    {console.log("Lifecycle A from componentDidMount")
     }
      
    return (
      <div>
        <h2>Lifecycle from render method</h2>
        <button onClick={this.changeState}>Change State</button>
       <LifecycleB/>
      </div>
    )
  }
}

export default LifecycleA