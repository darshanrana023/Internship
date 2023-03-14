import React, { Component } from 'react'

class ErrorBoundry extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         hasError:false
      }
    }
    static getDerivedStateFromEroor(error)
    {
        return{
            hasError:true
        }
    }
    // static componentDidCatch(info,error)
    // {
    //   console.log(error)
    //   console.log(info)
    // }
  render() {
    if(this.state.hasError)
    {
        return<h1>Something Went Wrong!!!!!</h1>
    }
    return this.props.childern
  }
}

export default ErrorBoundry