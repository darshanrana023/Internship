import{Component} from "react"
class Message extends Component{
     
  constructor()
  {
    super()
    this.state={
        message:"Welcome to My Page"
    }
  }
  changeMessage()
  {
    this.setState({
        message:"This Message is shown after clicking the Button"
     })
  }
  render()
  {
    return(
        <div>
            <h1>{this.state.message}</h1>
            <button  class="btn" onClick={()=>this.changeMessage()}>Click Me!</button>
           
        </div>
    )
  }
}
export default Message